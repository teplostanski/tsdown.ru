#!/usr/bin/env node
/**
 * Проверяет внутренние ссылки и якоря в Markdown под docs/.
 * Учитываются только href из разметки [текст](url) — «висячие» заголовки без ссылок на них не проверяются.
 * Нужен свежий вывод VitePress: по умолчанию перед проверкой выполняется `vitepress build docs`.
 *
 * Использование:
 *   node scripts/check-docs-links.mjs           # сборка + проверка
 *   node scripts/check-docs-links.mjs --skip-build   # только проверка (dist уже есть)
 */

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
)
const docsRoot = path.join(repoRoot, 'docs')
const distRoot = path.join(repoRoot, 'docs', '.vitepress', 'dist')

const skipBuild = process.argv.includes('--skip-build')

function walkMarkdownFiles(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walkMarkdownFiles(p, out)
    else if (ent.name.endsWith('.md')) out.push(p)
  }
  return out
}

function extractMarkdownLinks(text) {
  const links = []
  const re = /\[([^\]]*)\]\(([^)]+)\)/g
  let m
  while ((m = re.exec(text))) {
    let href = m[2].trim().split(/\s+/)[0]
    links.push(href)
  }
  return links
}

function isExternal(href) {
  return /^(https?:|mailto:|tel:|\/\/)/i.test(href)
}

// Сопоставление файла docs/…/*.md с файлом вывода VitePress dist/….html
function mdFileToDistHtml(mdPath) {
  const rel = path.relative(docsRoot, mdPath).replace(/\\/g, '/')
  const base = rel.replace(/\.md$/i, '')
  return path.join(distRoot, `${base}.html`)
}

// Разрешить href относительно исходного .md к пути HTML в dist и необязательному якорю
function resolveHrefToDistHtml(fromMdPath, href) {
  const [rawPath, fragment] = href.split('#')
  const pathname = rawPath.trim()

  if (!pathname) {
    return {
      htmlPath: mdFileToDistHtml(fromMdPath),
      fragment: fragment || null,
    }
  }

  if (pathname.startsWith('/')) {
    let p = pathname.slice(1).replace(/\/$/, '')
    if (p.endsWith('.md')) p = p.slice(0, -3)
    const htmlPath = path.join(distRoot, `${p}.html`)
    return { htmlPath, fragment: fragment || null }
  }

  const dir = path.dirname(fromMdPath)
  const resolvedMd = path.normalize(path.join(dir, pathname))
  if (!resolvedMd.startsWith(docsRoot)) {
    return { error: `выходит за пределы docs/: ${pathname}` }
  }
  let rel = path.relative(docsRoot, resolvedMd).replace(/\\/g, '/')
  if (rel.endsWith('.md')) rel = rel.slice(0, -3)
  const htmlPath = path.join(distRoot, `${rel}.html`)
  return { htmlPath, fragment: fragment || null }
}

function htmlHasFragment(html, fragment) {
  const needle = `id="${fragment}"`
  return html.includes(needle)
}

function main() {
  if (!skipBuild) {
    const r = spawnSync('npx', ['vitepress', 'build', 'docs'], {
      cwd: repoRoot,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })
    if (r.status !== 0) {
      process.exit(r.status ?? 1)
    }
  }

  if (!fs.existsSync(distRoot)) {
    console.error(`Нет каталога сборки: ${distRoot}`)
    console.error('Запустите без --skip-build или выполните npm run docs:build')
    process.exit(1)
  }

  const mdFiles = walkMarkdownFiles(docsRoot).filter(
    (p) => !p.includes(`${path.sep}.vitepress${path.sep}`),
  )

  const errors = []

  for (const mdPath of mdFiles) {
    const text = fs.readFileSync(mdPath, 'utf8')
    const relMd = path.relative(repoRoot, mdPath)

    for (const href of extractMarkdownLinks(text)) {
      if (href.startsWith('#')) {
        const fragment = href.slice(1)
        if (!fragment) continue
        const htmlPath = mdFileToDistHtml(mdPath)
        if (!fs.existsSync(htmlPath)) {
          errors.push(
            `${relMd}: нет страницы в dist для якоря-only ссылки: ${href}`,
          )
          continue
        }
        const html = fs.readFileSync(htmlPath, 'utf8')
        if (!htmlHasFragment(html, fragment)) {
          errors.push(
            `${relMd}: якорь не найден на странице ${path.relative(repoRoot, htmlPath)}: #${fragment}`,
          )
        }
        continue
      }

      if (isExternal(href)) continue

      const resolved = resolveHrefToDistHtml(mdPath, href)
      if (resolved.error) {
        errors.push(`${relMd}: ${resolved.error} (${href})`)
        continue
      }

      const { htmlPath, fragment } = resolved

      if (!fs.existsSync(htmlPath)) {
        errors.push(
          `${relMd}: нет файла вывода ${path.relative(repoRoot, htmlPath)} (ссылка ${href})`,
        )
        continue
      }

      if (fragment) {
        const html = fs.readFileSync(htmlPath, 'utf8')
        if (!htmlHasFragment(html, fragment)) {
          errors.push(
            `${relMd}: якорь не найден в ${path.relative(repoRoot, htmlPath)}: #${fragment} (из ${href})`,
          )
        }
      }
    }
  }

  if (errors.length) {
    console.error(`Ошибок: ${errors.length}\n`)
    for (const e of errors) console.error(`  • ${e}`)
    process.exit(1)
  }

  console.log(
    `Проверено файлов: ${mdFiles.length}. Внутренние ссылки и якоря в порядке.`,
  )
}

main()

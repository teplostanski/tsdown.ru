import { type DefaultTheme } from 'vitepress'

export function sidebar(prefix: string): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Руководство',
      base: `${prefix}/guide`,

      items: [
        { text: 'Введение', link: '/' },
        { text: 'Начало работы', link: '/getting-started' },
        { text: 'Миграция с tsup', link: '/migrate-from-tsup' },
        { text: 'FAQ', link: '/faq' },
      ],
    },
    {
      text: 'Опции',
      base: `${prefix}/options`,
      items: [
        { text: 'Точка входа', link: '/entry' },
        { text: 'Файл конфигурации', link: '/config-file' },
        { text: 'Файлы деклараций (dts)', link: '/dts' },
        { text: 'Формат вывода', link: '/output-format' },
        { text: 'Директория вывода', link: '/output-directory' },
        { text: 'Очистка', link: '/cleaning' },
        {
          text: 'Зависимости',
          link: '/dependencies',
        },
        { text: 'Режим наблюдения (Watch Mode)', link: '/watch-mode' },
        { text: 'Целевая платформа (Target)', link: '/target' },
        { text: 'Платформа', link: '/platform' },
        { text: 'Tree-shaking', link: '/tree-shaking' },
        {
          text: 'Карты исходного кода (Source Maps)',
          link: '/sourcemap',
        },
        { text: 'Минификация', link: '/minification' },
        { text: 'Уровень логирования', link: '/log-level' },
        { text: 'Прослойки (Shims)', link: '/shims' },
        { text: 'Автоэкспорты', link: '/package-exports' },
        { text: 'Сборка без объединения (Unbundle)', link: '/unbundle' },
        { text: 'CJS экспорт по умолчанию', link: '/cjs-default' },
        { text: 'CSS', link: '/css' },
      ],
    },
    {
      text: 'Рецепты',
      base: `${prefix}/recipes`,
      items: [
        { text: 'Поддержка Vue', link: '/vue-support' },
        { text: 'Поддержка React', link: '/react-support' },
        { text: 'Поддержка Solid', link: '/solid-support' },
        { text: 'Поддержка Svelte', link: '/svelte-support' },
      ],
    },
    {
      text: 'Продвинутые возможности',
      base: `${prefix}/advanced`,
      items: [
        { text: 'Плагины', link: '/plugins' },
        { text: 'Хуки', link: '/hooks' },
        { text: 'Опции Rolldown', link: '/rolldown-options' },
        { text: 'Программный API', link: '/programmatic-usage' },
        { text: 'Производительность', link: '/benchmark' },
      ],
    },
    {
      text: 'Справочник API',
      base: `${prefix}/reference`,
      items: [
        { text: 'Интерфейс командной строки', link: '/cli' },
        {
          text: 'Параметры конфигурации',
          link: '/api/Interface.UserConfig',
        },
        {
          text: 'Определения типов',
          link: '/api/Type.Definitions',
        },
      ],
    },
  ]
}

# Поддержка CI окружения

tsdown автоматически определяет CI окружения и позволяет включать или отключать определённые функции в зависимости от того, выполняется ли сборка локально или в CI.

## Определение CI

tsdown использует пакет [`is-in-ci`](https://www.npmjs.com/package/is-in-ci) для определения CI окружений. Это покрывает все основные CI провайдеры, включая GitHub Actions, GitLab CI, Jenkins, CircleCI, Travis CI и другие.

## Опции с поддержкой CI

Ряд опций поддерживают различное поведение в зависимости от окружения через значения `'ci-only'` и `'local-only'`:

| Значение       | Поведение                                |
| -------------- | ---------------------------------------- |
| `true`         | Всегда включено                          |
| `false`        | Всегда выключено                         |
| `'ci-only'`    | Включено только в CI, выключено локально |
| `'local-only'` | Включено только локально, выключено в CI |

### Поддерживаемые опции

Для следующих опций можно указать значения, зависящие от окружения:

- [`dts`](/options/dts) — Генерация файлов деклараций TypeScript
- [`publint`](/options/lint) — Валидация линтинга пакета
- [`attw`](/options/lint) — Валидация "Are the types wrong"
- `report` — Отчёт о размере бандла
- [`exports`](/options/package-exports) — Автогенерация экспортов `package.json`
- `unused` — Проверка неиспользуемых зависимостей
- `devtools` — Интеграция DevTools
- `failOnWarn` — Завершать с ошибкой при предупреждениях (по умолчанию `'ci-only'`)

### Простое использование

Укажите значение опции CI:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  // Генерировать файлы деклараций только локально (пропускать в CI для более быстрых сборок)
  dts: 'local-only',
  // Запускать publint только в CI
  publint: 'ci-only',
  // Завершать с ошибкой при предупреждениях только в CI (это значение по умолчанию)
  failOnWarn: 'ci-only',
})
```

### Форма объекта

Когда опция принимает объект конфигурации, вы можете установить свойство `enabled` в значение с учётом CI:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  publint: {
    enabled: 'ci-only',
    level: 'error',
  },
  attw: {
    enabled: 'ci-only',
    profile: 'node16',
  },
})
```

## Функция конфигурации

Функция конфигурации получает булево значение `ci` в своём контексте, позволяя динамическую конфигурацию:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig((_, { ci }) => ({
  minify: ci,
  sourcemap: !ci,
}))
```

## Пример: CI пайплайн

Типичная конфигурация, оптимизированная для CI:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  dts: true,
  // Завершать с ошибкой при предупреждениях в CI
  failOnWarn: 'ci-only',
  // Запускать валидаторы пакета в CI
  publint: 'ci-only',
  attw: 'ci-only',
})
```

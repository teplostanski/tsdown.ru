# Валидация пакета (publint и attw)

tsdown интегрирован с [publint](https://publint.dev/) и [Are the types wrong?](https://arethetypeswrong.github.io/) (attw) для проверки пакета перед публикацией. Эти инструменты ищут типичные ошибки в конфигурации `package.json` и в типах.

## Установка

Оба инструмента — **опциональные зависимости**: ставить их нужно только если планируете ими пользоваться:

::: code-group

```bash [publint]
npm install -D publint
```

```bash [attw]
npm install -D @arethetypeswrong/core
```

```bash [both]
npm install -D publint @arethetypeswrong/core
```

:::

## publint

[publint](https://publint.dev/) проверяет, что пакет правильно настроен для публикации: сверяет поля `package.json` (`exports`, `main`, `module`, `types`) с реальными выходными файлами.

### Включение publint

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  publint: true,
})
```

### Настройка

Поведение publint настраивается через опции:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  publint: {
    level: 'error', // 'warning' | 'error' | 'suggestion'
  },
})
```

### CLI

```bash
tsdown --publint
```

## attw (Are the types wrong?)

[attw](https://arethetypeswrong.github.io/) проверяет корректность TypeScript-деклараций при разных стратегиях разрешения модулей (`node10`, `node16`, `bundler`). Находит, например, неверные ESM/CJS декларации, из-за которых у пользователей пакета возникают ошибки в рантайме.

### Включение attw

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: true,
})
```

### Настройка

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    // Профиль разрешения:
    //   'strict'   — все стратегии должны пройти (по умолчанию)
    //   'node16'   — игнорировать ошибки разрешения node10
    //   'esm-only' — игнорировать ошибки CJS-разрешения
    profile: 'node16',

    // Уровень: 'warn' (по умолчанию) или 'error' (падает сборка)
    level: 'error',

    // Игнорировать определённые типы проблем
    ignoreRules: ['false-cjs', 'cjs-resolves-to-esm'],
  },
})
```

### Профили

| Профиль    | Описание                                              |
| ---------- | ----------------------------------------------------- |
| `strict`   | Все стратегии разрешения должны пройти (по умолчанию) |
| `node16`   | Игнорировать ошибки разрешения для node10             |
| `esm-only` | Игнорировать ошибки node10 и node16-cjs               |

### Правила для игнорирования

Отдельные типы проблем можно отключить через `ignoreRules`:

| Правило                     | Описание                                               |
| --------------------------- | ------------------------------------------------------ |
| `no-resolution`             | Модуль не удалось разрешить                            |
| `untyped-resolution`        | Разрешение прошло, но типов нет                        |
| `false-cjs`                 | В типах указан CJS, реализация — ESM                   |
| `false-esm`                 | В типах указан ESM, реализация — CJS                   |
| `cjs-resolves-to-esm`       | CJS-разрешение указывает на ESM-модуль                 |
| `fallback-condition`        | Использовано запасное/универсальное условие            |
| `cjs-only-exports-default`  | CJS-модуль экспортирует только default                 |
| `named-exports`             | Именованные экспорты в типах и реализации не совпадают |
| `false-export-default`      | В типах объявлен default-экспорт, которого нет в коде  |
| `missing-export-equals`     | В типах для CJS отсутствует `export =`                 |
| `unexpected-module-syntax`  | В файле неожиданный синтаксис модуля                   |
| `internal-resolution-error` | Внутренняя ошибка разрешения при проверке типов        |

### CLI

```bash
tsdown --attw
```

## Интеграция с CI

И `publint`, и `attw` поддерживают [опции с учётом CI](/advanced/ci). Удобно запускать проверку пакета только в CI:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  publint: 'ci-only',
  attw: {
    enabled: 'ci-only',
    profile: 'node16',
    level: 'error',
  },
})
```

> [!NOTE]
> Оба инструмента требуют наличия `package.json` в корне проекта. Если файл не найден, выводится предупреждение и проверка не выполняется.

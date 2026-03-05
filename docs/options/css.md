# Поддержка CSS

Поддержка CSS в `tsdown` пока является экспериментальной функцией. Хотя она охватывает основные сценарии использования, API и поведение могут измениться в будущих релизах.

> [!WARNING] Экспериментальная функция
> Поддержка CSS находится в стадии экспериментальной разработки. Пожалуйста, тщательно тестируйте функциональность и сообщайте о любых обнаруженных проблемах. По мере развития функции её API и поведение могут меняться.

## Базовая и расширенная поддержка CSS

`tsdown` поддерживает два уровня работы с CSS:

- **Встроенный (базовый):** Извлечение и сборка CSS-файлов работают из коробки — дополнительные зависимости не требуются.
- **Расширенный (`@tsdown/css`):** Для использования препроцессоров (Sass/Less/Stylus), понижения синтаксиса CSS, минификации и встраивания `@import` требуется пакет `@tsdown/css`:

```bash
npm install -D @tsdown/css
```

После установки `@tsdown/css` расширенный плагин CSS автоматически заменяет встроенный.

## Импорт CSS

Импорт файлов `.css` из точек входа на TypeScript или JavaScript поддерживается из коробки. Содержимое CSS извлекается и сохраняется в виде отдельного файла `.css`:

```ts
// src/index.ts
import './style.css'

export function greet() {
  return 'Hello'
}
```

В результате в выходной директории будут созданы файлы `index.mjs` и `index.css`.

### Встраивание `@import`

При установленном `@tsdown/css` директивы `@import` в CSS автоматически обрабатываются и встраиваются в итоговый файл. Это позволяет удобно структурировать стили по нескольким файлам, не создавая при этом отдельных выходных файлов:

```css
/* style.css */
@import './reset.css';
@import './theme.css';

.main {
  color: red;
}
```

Весь импортированный код собирается в единый выходной файл, а сами директивы `@import` удаляются.

## CSS-препроцессоры

> [!NOTE]
> Требуется установленый пакет `@tsdown/css`.

`tsdown` предоставляет встроенную поддержку файлов `.scss`, `.sass`, `.less`, `.styl` и `.stylus`. Соответствующий препроцессор необходимо установить как dev-зависимость:

::: code-group

```sh [Sass]
# Либо sass-embedded (рекомендуется, работает быстрее), либо sass
npm install -D sass-embedded
# или
npm install -D sass
```

```sh [Less]
npm install -D less
```

```sh [Stylus]
npm install -D stylus
```

:::

После установки вы можете импортировать файлы препроцессоров напрямую:

```ts
import './style.scss'
import './theme.less'
import './global.styl'
```

### Настройки препроцессоров

Параметры для каждого препроцессора можно передать через `css.preprocessorOptions`:

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$brand-color: #ff7e17;`,
      },
      less: {
        math: 'always',
      },
    },
  },
})
```

#### `additionalData`

Каждый препроцессор поддерживает опцию `additionalData`, позволяющую добавить код в начало каждого обрабатываемого файла. Это удобно для подключения глобальных переменных или миксинов:

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Строка — добавляется в начало каждого .scss-файла
        additionalData: `@use "src/styles/variables" as *;`,
      },
    },
  },
})
```

Также можно использовать функцию для динамической вставки:

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source, filename) => {
          if (filename.includes('theme')) return source
          return `@use "src/styles/variables" as *;\n${source}`
        },
      },
    },
  },
})
```

## Минификация CSS

> [!NOTE]
> Требуется установленный пакет `@tsdown/css`.

Для минификации CSS включите опцию `css.minify`:

```ts
export default defineConfig({
  css: {
    minify: true,
  },
})
```

Минификация выполняется с помощью [Lightning CSS](https://lightningcss.dev/).

## Целевое окружение для CSS

> [!NOTE]
> Требуется установленный пакет `@tsdown/css`.

По умолчанию понижение синтаксиса CSS использует глобальную опцию [`target`](/options/target). Вы можете переопределить это поведение специально для CSS с помощью `css.target`:

```ts
export default defineConfig({
  target: 'node18',
  css: {
    target: 'chrome90', // целевое окружение только для CSS
  },
})
```

Установите `css.target: false`, чтобы полностью отключить понижение синтаксиса CSS, даже если задана глобальная опция `target`:

```ts
export default defineConfig({
  target: 'chrome90',
  css: {
    target: false, // сохранить современный синтаксис CSS
  },
})
```

## Трансформер CSS

> [!NOTE]
> Требуется установленый пакет `@tsdown/css`.

Опция `css.transformer` определяет способ обработки CSS. PostCSS и Lightning CSS представляют собой **взаимоисключающие** пути обработки:

- **`'lightningcss'`** (по умолчанию): директивы `@import` обрабатывает Lightning CSS через `bundleAsync()`; PostCSS **не используется**.
- **`'postcss'`**: директивы `@import` обрабатываются через [`postcss-import`](https://github.com/postcss/postcss-import), применяются плагины PostCSS, затем Lightning CSS используется только для финального понижения синтаксиса и минификации.

```ts
export default defineConfig({
  css: {
    transformer: 'postcss', // PostCSS для @import и плагинов
  },
})
```

При использовании трансформера `'postcss'` установите `postcss` и при необходимости `postcss-import` для разрешения директив `@import`:

```bash
npm install -D postcss postcss-import
```

### Настройки PostCSS

Настройте PostCSS непосредственно в конфигурации или укажите путь к конфигурационному файлу:

```ts
export default defineConfig({
  css: {
    transformer: 'postcss',
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
})
```

Или укажите путь к директории для поиска конфигурационного файла PostCSS (`postcss.config.js` и т.п.):

```ts
export default defineConfig({
  css: {
    transformer: 'postcss',
    postcss: './config', // искать postcss.config.js в директории ./config/
  },
})
```

Если `css.postcss` не указан, а `transformer` установлен в `'postcss'`, tsdown автоматически подхватывает конфигурацию PostCSS из корня проекта.

## Lightning CSS

> [!NOTE]
> Требуется установленый пакет `@tsdown/css`.

`tsdown` использует [Lightning CSS](https://lightningcss.dev/) для понижения синтаксиса CSS — преобразования современных возможностей CSS в синтаксис, совместимый со старыми браузерами, в соответствии с настройкой `target`.

Чтобы включить понижение синтаксиса CSS, установите `lightningcss`:

::: code-group

```sh [npm]
npm install -D lightningcss
```

```sh [pnpm]
pnpm add -D lightningcss
```

```sh [yarn]
yarn add -D lightningcss
```

```sh [bun]
bun add -D lightningcss
```

:::

После установки понижение синтаксиса CSS включается автоматически при указании параметра `target`. Например, при `target: 'chrome108'` вложенные селекторы `&` будут преобразованы в плоскую структуру:

```css
/* Исходный код */
.foo {
  & .bar {
    color: red;
  }
}

/* Результат (chrome108) */
.foo .bar {
  color: red;
}
```

### Настройки Lightning CSS

Дополнительные параметры для Lightning CSS можно передать через `css.lightningcss`:

```ts
import { Features } from 'lightningcss'

export default defineConfig({
  css: {
    lightningcss: {
      // Явное указание целевых браузеров (вместо использования `target`)
      targets: { chrome: 100 << 16 },
      // Включение/отключение конкретных функций
      include: Features.Nesting,
    },
  },
})
```

> [!TIP]
> Если задано `css.lightningcss.targets`, оно имеет приоритет перед верхнеуровневой опцией `target` и опцией `css.target` при преобразовании CSS.

Подробнее о доступных опциях читайте в [документации Lightning CSS](https://lightningcss.dev/).

## Разделение кода CSS

### Режим объединения (по умолчанию)

По умолчанию весь CSS объединяется в один файл (по умолчанию: `style.css`):

```
dist/
  index.mjs
  style.css  ← весь CSS объединён
```

### Пользовательское имя файла

Вы можете задать своё имя для объединённого CSS-файла:

```ts
export default defineConfig({
  css: {
    fileName: 'my-library.css',
  },
})
```

### Режим разделения

Чтобы разделять CSS по чанкам — так, чтобы каждый JavaScript-чанк, импортирующий CSS, получал соответствующий файл `.css` — включите режим разделения:

```ts
export default defineConfig({
  css: {
    splitting: true,
  },
})
```

```
dist/
  index.mjs
  index.css        ← CSS из index.ts
  async-abc123.mjs
  async-abc123.css ← CSS из асинхронного чанка
```

## Справочник опций

| Опция                     | Тип                           | По умолчанию          | Описание                                                                                                       |
| ------------------------- | ----------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| `css.transformer`         | `'postcss' \| 'lightningcss'` | `'lightningcss'`      | Механизм обработки CSS (требуется установленный пакет `@tsdown/css`)                                           |
| `css.splitting`           | `boolean`                     | `false`               | Включает разделение CSS по чанкам                                                                              |
| `css.fileName`            | `string`                      | `'style.css'`         | Имя файла для объединённого CSS (при `splitting: false`)                                                       |
| `css.minify`              | `boolean`                     | `false`               | Включает минификацию CSS (требуется установленный пакет `@tsdown/css`)                                         |
| `css.target`              | `string \| string[] \| false` | _берётся из `target`_ | Целевое окружение для понижения синтаксиса CSS (требуется установленный пакет `@tsdown/css`)                   |
| `css.postcss`             | `string \| object`            | —                     | Путь к конфигу PostCSS или встроенные параметры (требуется установленный пакет `@tsdown/css`)                  |
| `css.preprocessorOptions` | `object`                      | —                     | Параметры для CSS-препроцессоров (требуется установленный пакет `@tsdown/css`)                                 |
| `css.lightningcss`        | `object`                      | —                     | Параметры, передаваемые в Lightning CSS для понижения синтаксиса (требуется установленный пакет `@tsdown/css`) |

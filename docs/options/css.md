# Поддержка CSS

Поддержка CSS в `tsdown` пока является экспериментальной функцией. Хотя она охватывает основные сценарии использования, API и поведение могут измениться в будущих релизах.

> [!WARNING] Экспериментальная функция
> Поддержка CSS находится в стадии экспериментальной разработки. Пожалуйста, тщательно тестируйте функциональность и сообщайте о любых обнаруженных проблемах. По мере развития функции её API и поведение могут меняться.

## Начало работы

Поддержка CSS в `tsdown` реализована пакетом `@tsdown/css`. Установите его, чтобы включить обработку CSS:

```bash
npm install -D @tsdown/css
```

После установки `@tsdown/css` обработка CSS включается автоматически.

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

Директивы `@import` в CSS автоматически обрабатываются и встраиваются в итоговый файл. Это позволяет удобно структурировать стили по нескольким файлам, не создавая при этом отдельных выходных файлов:

```css
/* style.css */
@import './reset.css';
@import './theme.css';

.main {
  color: red;
}
```

Весь импортированный код собирается в единый выходной файл, а сами директивы `@import` удаляются.

### Инлайн CSS (`?inline`)

Если к импорту CSS добавить суффикс `?inline`, полностью обработанный CSS возвращается в виде строки JavaScript вместо вывода отдельного файла `.css`. Поведение согласовано с [режимом `?inline` в Vite](https://vite.dev/guide/features#disabling-css-injection-into-the-page):

```ts
import css from './theme.css?inline' // обработанный CSS в виде строки
import './style.css' // извлекается в отдельный .css файл
console.log(css) // ".theme { color: red; }\n"
```

CSS с `?inline` проходит полный конвейер обработки — препроцессоры, встраивание `@import`, понижение синтаксиса и минификация — так же, как обычный CSS. Отличается только формат вывода: экспорт строки JavaScript вместо отдельного ресурса `.css`.

То же поддерживается для препроцессоров:

```ts
import css from './theme.scss?inline'
```

При использовании `?inline` этот CSS не попадает в сгенерированные `.css` файлы, а импорт допускает tree-shaking (`moduleSideEffects: false`).

## CSS-препроцессоры

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

## Сохранение импортов CSS (`css.inject`) {#css-inject}

По умолчанию после извлечения CSS в отдельные файлы операторы импорта CSS удаляются из выходного JavaScript. Если включить `css.inject`, в выводе JS сохраняются операторы `import`, указывающие на сгенерированные CSS-файлы — тогда пользователи вашей библиотеки автоматически подтянут CSS вместе с JS:

```ts
export default defineConfig({
  css: {
    inject: true,
  },
})
```

При `css.inject: true` в выходном JS, например, окажется:

```js
// dist/index.mjs
import './style.css'

export function greet() {
  return 'Hello'
}
```

Такой режим удобен для библиотек компонентов, когда стили должны подключаться автоматически при импорте компонентов.

## CSS Modules

Файлы с расширением `.module.css` (и варианты для препроцессоров, например `.module.scss`, `.module.less` и т.д.) обрабатываются как [CSS modules](https://github.com/css-modules/css-modules). Имена классов автоматически ограничиваются областью видимости и экспортируются как объект JavaScript:

```ts
// src/index.ts
import styles from './app.module.css'

console.log(styles.title) // "scoped_title_hash"
```

```css
/* app.module.css */
.title {
  color: red;
}
.content {
  font-size: 14px;
}
```

CSS выводится с именами классов, ограниченными областью видимости, а выходной JS экспортирует соответствие исходных и сгенерированных имён (map).

### Настройка

Поведение CSS modules настраивается через `css.modules`:

```ts
export default defineConfig({
  css: {
    modules: {
      // Режим области видимости: 'local' (по умолчанию) или 'global'
      scopeBehaviour: 'local',

      // Шаблон имён классов с областью видимости (синтаксис шаблонов Lightning CSS)
      generateScopedName: '[hash]_[local]',

      // Преобразование соглашения об именовании классов в JS-экспортах
      localsConvention: 'camelCase',
    },
  },
})
```

Установите `css.modules: false`, чтобы полностью отключить CSS modules — файлы `.module.css` будут обрабатываться как обычный CSS.

### `localsConvention`

Управляет тем, как имена классов экспортируются в JavaScript:

| Значение          | Вход      | Экспорт             |
| ----------------- | --------- | ------------------- |
| _(не задано)_     | `foo-bar` | `foo-bar`           |
| `'camelCase'`     | `foo-bar` | `foo-bar`, `fooBar` |
| `'camelCaseOnly'` | `foo-bar` | `fooBar`            |
| `'dashes'`        | `foo-bar` | `foo-bar`, `fooBar` |
| `'dashesOnly'`    | `foo-bar` | `fooBar`            |

### `generateScopedName`

При использовании `transformer: 'lightningcss'` (по умолчанию) параметр принимает строковый [шаблон Lightning CSS](https://lightningcss.dev/css-modules.html#custom-naming-conventions) (например, `'[hash]_[local]'`).

При использовании `transformer: 'postcss'` также поддерживается функция:

```ts
export default defineConfig({
  css: {
    transformer: 'postcss',
    modules: {
      generateScopedName: (name, filename, css) => {
        return `my-lib_${name}`
      },
    },
  },
})
```

> [!NOTE]
> Функциональная форма `generateScopedName` поддерживается только с `transformer: 'postcss'`. Трансформер Lightning CSS поддерживает только строковые шаблоны.

### Опциональные зависимости

Если вы используете `transformer: 'postcss'` вместе с CSS modules, установите [`postcss-modules`](https://github.com/css-modules/postcss-modules):

```bash
npm install -D postcss postcss-modules
```

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

## Опциональные peer dependencies для PostCSS

При использовании `transformer: 'postcss'` может потребоваться установка следующих пакетов — в зависимости от задействованных возможностей:

| Пакет                                                               | Назначение                                                              | Когда требуется                        |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| [`postcss`](https://github.com/postcss/postcss)                     | Базовый движок PostCSS                                                  | Всегда (при `transformer: 'postcss'`)  |
| [`postcss-import`](https://github.com/postcss/postcss-import)       | Разрешение и встраивание директив `@import`                             | Когда CSS-файлы используют `@import`   |
| [`postcss-modules`](https://github.com/css-modules/postcss-modules) | Поддержка CSS modules (имена классов с ограниченной областью видимости) | При использовании файлов `.module.css` |

```bash
npm install -D postcss postcss-import postcss-modules
```

Все три пакета объявлены как опциональные peer dependencies для `@tsdown/css` и загружаются только при необходимости.

## Справочник опций

| Опция                     | Тип                           | По умолчанию          | Описание                                             |
| ------------------------- | ----------------------------- | --------------------- | ---------------------------------------------------- |
| `css.transformer`         | `'postcss' \| 'lightningcss'` | `'lightningcss'`      | Конвейер обработки CSS                               |
| `css.splitting`           | `boolean`                     | `false`               | Разделение CSS по чанкам                             |
| `css.fileName`            | `string`                      | `'style.css'`         | Имя объединённого CSS-файла (при `splitting: false`) |
| `css.minify`              | `boolean`                     | `false`               | Минификация CSS                                      |
| `css.modules`             | `object \| false`             | `{}`                  | Настройка CSS modules или `false` для отключения     |
| `css.target`              | `string \| string[] \| false` | _берётся из `target`_ | Целевое окружение для понижения синтаксиса CSS       |
| `css.postcss`             | `string \| object`            | —                     | Путь к конфигурации PostCSS или встроенные параметры |
| `css.preprocessorOptions` | `object`                      | —                     | Параметры CSS-препроцессоров                         |
| `css.inject`              | `boolean`                     | `false`               | Сохранение операторов импорта CSS в выходном JS      |
| `css.lightningcss`        | `object`                      | —                     | Параметры Lightning CSS для понижения синтаксиса     |

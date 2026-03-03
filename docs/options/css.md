# Поддержка CSS

Поддержка CSS в `tsdown` пока является экспериментальной функцией. Хотя она охватывает основные сценарии использования, API и поведение могут измениться в будущих релизах.

> [!WARNING] Экспериментальная функция
> Поддержка CSS находится в стадии экспериментальной разработки. Пожалуйста, тщательно тестируйте функциональность и сообщайте о любых обнаруженных проблемах. По мере развития функции её API и поведение могут меняться.

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
> Если задан параметр `css.lightningcss.targets`, он имеет приоритет над глобальной опцией `target` при преобразовании CSS.

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

| Опция                     | Тип       | Значение по умолчанию | Описание                                                          |
| ------------------------- | --------- | --------------------- | ----------------------------------------------------------------- |
| `css.splitting`           | `boolean` | `false`               | Включить разделение CSS по чанкам                                 |
| `css.fileName`            | `string`  | `'style.css'`         | Имя файла для объединённого CSS (при `splitting: false`)          |
| `css.preprocessorOptions` | `object`  | —                     | Параметры для CSS-препроцессоров (scss, sass, less, styl, stylus) |
| `css.lightningcss`        | `object`  | —                     | Опции, передаваемые в Lightning CSS для понижения синтаксиса      |

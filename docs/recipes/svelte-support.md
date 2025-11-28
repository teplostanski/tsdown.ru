# Поддержка Svelte

`tsdown` поддерживает сборку библиотек компонентов Svelte через интеграцию с [`rollup-plugin-svelte`](https://github.com/sveltejs/rollup-plugin-svelte). Эта конфигурация компилирует файлы `.svelte` и объединяет их с исходниками на TypeScript.

## Быстрый старт

Самый простой способ начать — воспользоваться шаблоном для создания Svelte-компонентной библиотеки. Этот стартовый проект уже настроен для разработки библиотек на Svelte.

```bash
npx create-tsdown@latest -t svelte
```

## Минимальный пример

Настройте `tsdown` для библиотеки Svelte, добавив в файл `tsdown.config.ts`:

```ts [tsdown.config.ts]
import svelte from 'rollup-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  plugins: [svelte({ preprocess: sveltePreprocess() })],
})
```

Установите необходимые зависимости:

::: code-group

```sh [npm]
npm install -D rollup-plugin-svelte svelte svelte-preprocess
```

```sh [pnpm]
pnpm add -D rollup-plugin-svelte svelte svelte-preprocess
```

```sh [yarn]
yarn add -D rollup-plugin-svelte svelte svelte-preprocess
```

```sh [bun]
bun add -D rollup-plugin-svelte svelte svelte-preprocess
```

:::

## Как это работает

- **`rollup-plugin-svelte`** компилирует одностраничные компоненты `.svelte`.
- **`tsdown`** объединяет готовый результат с исходным кодом на TypeScript.

:::info

Чтобы сгенерировать `.d.ts` для компонентов Svelte, обычно используют пакет [`svelte2tsx`](https://www.npmjs.com/package/svelte2tsx). Рекомендуется применять специальный шаблон Svelte, в котором уже предусмотрен этап генерации деклараций на основе `svelte2tsx` после сборки.

:::

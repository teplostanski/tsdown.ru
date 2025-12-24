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

## Дистрибуция

В соответствии с практикой сообщества и руководством [Packaging](https://svelte.dev/docs/kit/packaging) для SvelteKit, не публикуйте предварительно скомпилированные JS-компоненты. Вместо этого распространяйте исходные `.svelte`‑файлы и позвольте инструментам сборки пользователей (например, Vite с `@sveltejs/vite-plugin-svelte`) компилировать их в их собственных проектах.

Почему не стоит публиковать предварительно скомпилированный JS:

- Совместимость версий. Предварительно собранный код зависит от конкретной версии компилятора и пакета `svelte/internal`; несовпадения могут привести к ошибкам при работе или гидрации на сервере (SSR).
- Согласованность SSR и гидрации. Различные параметры компиляции (`generate`, `hydratable`, `dev`, и т.п.) в библиотеке и приложении могут вызывать проблемы с гидрацией.
- Интеграция с инструментами. Исходные `.svelte`‑файлы позволяют использовать улучшенные возможности HMR, диагностику, оптимизацию CSS и tree‑shaking; при дистрибуции JS эти преимущества теряются.
- Упрощённая поддержка. Меньше переизданий при обновлении Svelte — пользователи сами компилируют библиотеку нужной им версией.

Когда стоит публиковать JS:

- Если вы поставляете артефакты, которые можно использовать вне Svelte (например, веб-компоненты с `customElement`).
- В сценариях, где используется CDN и отсутствует этап сборки на стороне потребителя.

Для подробной настройки упаковки (например, полей `exports`, `types`, `files`, `sideEffects`, подэкспортов и карт деклараций) см. официальное руководство.

::: tip
Основы работы с tsdown:

- Отметьте пакеты `svelte`/`svelte/*` как внешние (`external`) в конфигурации `tsdown` и добавьте `svelte` в `peerDependencies`.
- Используйте `rollup-plugin-svelte` для препроцессинга и интеграции, оставляя `.svelte`‑файлы в исходном виде при дистрибуции.
- Применяйте `svelte2tsx`, чтобы создавать `.d.ts`‑файлы, соответствующие вашим подэкспортам из `exports`.
  :::

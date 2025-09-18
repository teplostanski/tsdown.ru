# Поддержка Vue

`tsdown` обеспечивает полноценную поддержку разработки библиотек компонентов Vue, бесшовно интегрируясь с [`unplugin-vue`](https://github.com/unplugin/unplugin-vue) и [`rolldown-plugin-dts`](https://github.com/sxzz/rolldown-plugin-dts). Эта настройка позволяет собирать компоненты Vue и создавать декларации типов с помощью современных инструментов TypeScript.

## Быстрый старт

Самый быстрый способ начать работу — использовать стартовый шаблон для Vue-компонентов. Этот стартовый проект поставляется с предварительно настроенной конфигурацией для разработки Vue-библиотек, поэтому вы сразу можете сосредоточиться на создании компонентов.

```bash
npx create-tsdown@latest -t vue
```

## Минимальный пример

Чтобы настроить `tsdown` для библиотеки Vue, используйте следующую конфигурацию в вашем `tsdown.config.ts`:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  plugins: [Vue({ isProduction: true })],
  dts: { vue: true },
})
```

Установите необходимые зависимости:

::: code-group

```sh [npm]
npm install -D unplugin-vue vue-tsc
```

```sh [pnpm]
pnpm add -D unplugin-vue vue-tsc
```

```sh [yarn]
yarn add -D unplugin-vue vue-tsc
```

```sh [bun]
bun add -D unplugin-vue vue-tsc
```

:::

## Как это работает

- **`unplugin-vue`** компилирует однофайловые компоненты `.vue` в JavaScript и извлекает CSS, подготавливая их к сборке.
- **`rolldown-plugin-dts`** (с параметром `vue: true`) и **`vue-tsc`** совместно генерируют точные файлы деклараций TypeScript для ваших компонентов Vue, обеспечивая полную поддержку типов для пользователей вашей библиотеки.

> [!TIP]  
> Установите `platform: 'neutral'` для максимальной совместимости библиотек, которые могут использоваться как в браузере, так и в Node.js.

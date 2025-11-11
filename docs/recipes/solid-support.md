# Поддержка Solid

`tsdown` упрощает разработку библиотек компонентов Solid благодаря интеграции с [`rolldown-plugin-solid`](https://github.com/g-mero/rolldown-plugin-solid) или [`unplugin-solid`](https://github.com/unplugin/unplugin-solid). Эта интеграция позволяет собирать компоненты Solid и автоматически генерировать декларации типов с использованием современных инструментов TypeScript.

## Быстрый старт

Самый быстрый способ начать — использовать стартовый шаблон компонента Solid. Этот стартовый проект предварительно настроен для разработки библиотек Solid, чтобы вы могли сразу сосредоточиться на создании компонентов.

```bash
npx create-tsdown@latest -t solid
```

## Минимальный пример

Чтобы настроить `tsdown` для библиотеки Solid, используйте следующий конфиг в `tsdown.config.ts`:

```ts [tsdown.config.ts]
import solid from 'rolldown-plugin-solid' // или используйте 'unplugin-solid/rolldown'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  dts: true,
  plugins: [solid()],
})
```

Создайте типичный компонент Solid:

```tsx [MyButton.tsx]
import type { Component } from 'solid-js'

interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: Component<MyButtonProps> = ({ type }) => {
  return (
    <button class="my-button">
      my button: type
      {type}
    </button>
  )
}
```

И экспортируйте его во входном файле:

```ts [index.ts]
export { MyButton } from './MyButton'
```

Установите необходимые зависимости:

::: code-group

```sh [npm]
npm install -D rolldown-plugin-solid
```

```sh [pnpm]
pnpm add -D rolldown-plugin-solid
```

```sh [yarn]
yarn add -D rolldown-plugin-solid
```

```sh [bun]
bun add -D rolldown-plugin-solid
```

:::

или, если предпочитаете использовать `unplugin-solid`:

::: code-group

```sh [npm]
npm install -D unplugin-solid
```

```sh [pnpm]
pnpm add -D unplugin-solid
```

```sh [yarn]
yarn add -D unplugin-solid
```

```sh [bun]
bun add -D unplugin-solid
```

:::

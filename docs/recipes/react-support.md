# Поддержка React

`tsdown` предоставляет первоклассную поддержку для создания библиотек React-компонентов. Поскольку [Rolldown](https://rolldown.rs/) нативно поддерживает сборку JSX/TSX файлов, вам не нужны дополнительные плагины для начала работы.

## Быстрый старт

Самый быстрый способ начать работу — использовать стартовый шаблон для React-компонентов. Этот стартовый проект поставляется с предварительно настроенной конфигурацией для разработки React-библиотек, поэтому вы сразу можете сосредоточиться на создании компонентов.

```bash
npx create-tsdown@latest -t react
```

Чтобы использовать React Compiler, можно быстро настроить проект с помощью специального шаблона:

```bash
npx create-tsdown@latest -t react-compiler
```

## Минимальный пример

Для настройки `tsdown` для React-библиотеки вы можете просто использовать стандартный `tsdown.config.ts`:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  dts: true,
})
```

Создайте типичный React-компонент:

```tsx [MyButton.tsx]
import React from 'react'

interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return <button className="my-button">my button: type {type}</button>
}
```

И экспортируйте его в вашем входном файле:

```ts [index.ts]
export { MyButton } from './MyButton'
```

::: warning

Существует 2 способа преобразования JSX/TSX файлов в `tsdown`:

- **classic**
- **automatic** (по умолчанию)

Если вам нужно использовать классическое преобразование JSX, вы можете настроить опцию [`inputOptions.jsx`](https://rolldown.rs/reference/config-options#jsx) Rolldown в вашем файле конфигурации:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  inputOptions: {
    jsx: 'react', // Использовать классическое преобразование JSX
  },
})
```

:::

## Включение React Compiler

React Compiler — это инновационный инструмент сборки, который автоматически оптимизирует React-приложения. React рекомендует авторам библиотек использовать React Compiler для предварительной компиляции кода с целью повышения производительности.

В настоящее время React Compiler доступен только в виде плагина для Babel. Для начала работы можно либо создать проект на основе шаблона `react-compiler`, как показано выше, либо интегрировать его вручную:

```bash
pnpm add -D @rollup/plugin-babel babel-plugin-react-compiler
```

```ts [tsdown.config.ts]
import pluginBabel from '@rollup/plugin-babel'
import { defineConfig } from 'tsdown'

export default defineConfig({
  plugins: [
    pluginBabel({
      babelHelpers: 'bundled',
      parserOpts: {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      },
      plugins: ['babel-plugin-react-compiler'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
})
```

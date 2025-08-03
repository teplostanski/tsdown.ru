# Поддержка Vue

`tsdown` обеспечивает полноценную поддержку разработки библиотек компонентов Vue, бесшовно интегрируясь с [`unplugin-vue`](https://github.com/unplugin/unplugin-vue) и [`rolldown-plugin-dts`](https://github.com/sxzz/rolldown-plugin-dts). Эта настройка позволяет собирать компоненты Vue и создавать декларации типов с помощью современных инструментов TypeScript.

## Быстрый старт

Самый быстрый способ начать работу — использовать шаблон [vue-components-starter](https://github.com/sxzz/vue-components-starter). Этот стартовый проект поставляется с предварительно настроенной средой для разработки библиотек Vue, так что вы можете сразу сосредоточиться на создании компонентов.

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

```bash
npm install -D unplugin-vue vue-tsc
```

## Как это работает

- **`unplugin-vue`** компилирует однофайловые компоненты `.vue` в JavaScript и извлекает CSS, подготавливая их к сборке.
- **`rolldown-plugin-dts`** (с параметром `vue: true`) и **`vue-tsc`** совместно генерируют точные файлы деклараций TypeScript для ваших компонентов Vue, обеспечивая полную поддержку типов для пользователей вашей библиотеки.

> [!TIP]  
> Установите `platform: 'neutral'` для максимальной совместимости библиотек, которые могут использоваться как в браузере, так и в Node.js.

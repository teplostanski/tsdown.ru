# Начало работы

:::warning 🚧 Бета-версия
[Rolldown](https://rolldown.rs) сейчас находится в бета-версии. Хотя он уже может обрабатывать большинство задач продакшн-уровня, в нём всё ещё могут быть ошибки и недоработки.
:::

## Установка

Существует несколько способов начать работу с `tsdown`:

- [Установить вручную](#pучная-установка) в качестве зависимости для разработки в вашем проекте.
- Использовать [стартовые шаблоны](#стартовые-шаблоны) для быстрого создания структуры нового проекта.
- Попробовать онлайн с помощью [StackBlitz](#попробовать-онлайн).

### Ручная установка {#pучная-установка}

Установите `tsdown` как зависимость разработки, используя ваш предпочитаемый менеджер пакетов:

::: code-group

```sh [npm]
npm install -D tsdown
```

```sh [pnpm]
pnpm add -D tsdown
```

```sh [yarn]
yarn add -D tsdown
```

```sh [bun]
bun add -D tsdown
```

:::

При желании, если вы не используете [`isolatedDeclarations`](https://www.typescriptlang.org/tsconfig/#isolatedDeclarations), вам также следует установить TypeScript в качестве зависимости для разработки:

::: code-group

```sh [npm]
npm install -D typescript
```

```sh [pnpm]
pnpm add -D typescript
```

```sh [yarn]
yarn add -D typescript
```

```sh [bun]
bun add -D typescript
```

:::

:::tip Compatibility Note
:::tip Примечание о совместимости
`tsdown` требует Node.js версии 20.19 или выше. Пожалуйста, убедитесь, что ваша среда разработки соответствует этому требованию перед установкой. Хотя `tsdown` в основном тестируется с Node.js, поддержка Deno и Bun является экспериментальной и может работать не так, как ожидается.
:::

## Cтартовые шаблоны {#стартовые-шаблоны}

Для ещё более быстрого начала работы вы можете использовать CLI-инструмент [create-tsdown](https://github.com/gugustinette/create-tsdown), который предоставляет набор стартовых шаблонов для создания библиотек на чистом TypeScript, а также фронтенд-библиотек для React и Vue.

::: code-group

```sh [npm]
npm create tsdown@latest
```

```sh [pnpm]
pnpm create tsdown@latest
```

```sh [yarn]
yarn create tsdown@latest
```

```sh [bun]
bun create tsdown@latest
```

:::

Эти шаблоны включают готовые к использованию конфигурации и лучшие практики для сборки, тестирования и проверки кода TypeScript-проектов.

## Попробуйте онлайн {#попробовать-онлайн}

Вы можете попробовать tsdown прямо в браузере с помощью StackBlitz:

[![tsdown-starter-stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rolldown/tsdown-starter-stackblitz)

Этот шаблон уже настроен для tsdown, поэтому вы можете экспериментировать и начать работу быстро — никакой локальной настройки не требуется.

## Использование CLI

Чтобы убедиться, что `tsdown` установлен правильно, выполните следующую команду в директории вашего проекта:

```sh
./node_modules/.bin/tsdown --version
```

Вы также можете изучить доступные параметры CLI и примеры с помощью:

```sh
./node_modules/.bin/tsdown --help
```

### Ваш первый бандл

Давайте создадим два исходных файла TypeScript:

```ts [src/index.ts]
import { hello } from './hello.ts'

hello()
```

```ts [src/hello.ts]
export function hello() {
  console.log('Hello tsdown!')
}
```

Затем создайте файл конфигурации `tsdown`:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
})
```

Теперь выполните следующую команду, чтобы собрать ваш код:

```sh
./node_modules/.bin/tsdown
```

Вы должны увидеть собранный файл в `dist/index.mjs`. Чтобы убедиться, что всё работает, запустите этот файл:

```sh
node dist/index.mjs
```

Вы должны увидеть сообщение `Hello tsdown!`, выведенное в консоль.

### Использование CLI в скриптах npm

Для упрощения команды вы можете добавить её в скрипты вашего `package.json`:

```json{5} [package.json]
{
  "name": "my-tsdown-project",
  "type": "module",
  "scripts": {
    "build": "tsdown"
  },
  "devDependencies": {
    "tsdown": "^0.9.0"
  }
}
```

Теперь вы можете собрать свой проект с помощью:

```sh
npm run build
```

## Использование файла конфигурации

Хотя вы можете использовать CLI напрямую, для более сложных проектов рекомендуется использовать конфигурационный файл. Это позволяет вам определять и управлять настройками сборки централизованно и многоразово.

Для получения более подробной информации обратитесь к документации по [файлу конфигурации](../options/config-file.md).

## Использование плагинов

`tsdown` поддерживает плагины для расширения его функциональности. Вы можете использовать плагины Rolldown, Unplugin и большинство плагинов Rollup без проблем. Чтобы использовать плагины, добавьте их в массив `plugins` в вашем файле конфигурации. Например:

```ts [tsdown.config.ts]
import SomePlugin from 'some-plugin'
import { defineConfig } from 'tsdown'

export default defineConfig({
  plugins: [SomePlugin()],
})
```

Для получения более подробной информации обратитесь к документации по [плагинам](../advanced/plugins.md).

## Использование режима наблюдения (Watch Mode)

Вы можете включить режим наблюдения для автоматической пересборки вашего проекта при изменении файлов. Это особенно полезно во время разработки для оптимизации вашего рабочего процесса. Используйте параметр `--watch` (или `-w`):

```bash
tsdown --watch
```

Для получения более подробной информации обратитесь к документации по [режиму наблюдения](../options/watch-mode.md).

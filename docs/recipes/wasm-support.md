# Поддержка WASM

`tsdown` умеет собирать модули WebAssembly (WASM) с помощью плагина [`rolldown-plugin-wasm`](https://github.com/sxzz/rolldown-plugin-wasm). Плагин позволяет импортировать `.wasm` файлы прямо в TypeScript или JavaScript — и синхронно, и асинхронно.

## Минимальный пример

Чтобы включить поддержку WASM, добавьте плагин в `tsdown.config.ts`:

```ts [tsdown.config.ts]
import { wasm } from 'rolldown-plugin-wasm'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [wasm()],
})
```

Установите зависимость:

::: code-group

```sh [npm]
npm install -D rolldown-plugin-wasm
```

```sh [pnpm]
pnpm add -D rolldown-plugin-wasm
```

```sh [yarn]
yarn add -D rolldown-plugin-wasm
```

```sh [bun]
bun add -D rolldown-plugin-wasm
```

:::

## Импорт WASM-модулей

Модули WASM можно импортировать напрямую:

```ts
import { add } from './add.wasm'

add(1, 2)
```

### Асинхронная инициализация

Запрос `?init` возвращает асинхронную функцию инициализации:

```ts
import init from './add.wasm?init'

const instance = await init(
  imports, // необязательно
)

instance.exports.add(1, 2)
```

### Синхронная инициализация

Запрос `?init&sync` даёт синхронную инициализацию:

```ts
import initSync from './add.wasm?init&sync'

const instance = initSync(
  imports, // необязательно
)

instance.exports.add(1, 2)
```

## Поддержка `wasm-bindgen`

### Окружение сборки `bundler` (по умолчанию, рекомендуется)

```ts
import { add } from 'some-pkg'

add(1, 2)
```

### Окружение сборки `web`

#### В Node.js

```ts
import { readFile } from 'node:fs/promises'
import init, { add } from 'some-pkg'
import wasmUrl from 'some-pkg/add_bg.wasm?url'

await init({
  module_or_path: readFile(new URL(wasmUrl, import.meta.url)),
})

add(1, 2)
```

#### В браузере

```ts
import init, { add } from 'some-pkg/add.js'
import wasmUrl from 'some-pkg/add_bg.wasm?url'

await init({
  module_or_path: wasmUrl,
})

add(1, 2)
```

> [!NOTE]
> Другие режимы сборки wasm-bindgen (например, `nodejs` и `no-modules`) не поддерживаются.

## Поддержка TypeScript

Чтобы получить типы для импорта `.wasm`, добавьте декларации в `tsconfig.json`:

```jsonc [tsconfig.json]
{
  "compilerOptions": {
    "types": ["rolldown-plugin-wasm/types"],
  },
}
```

## Опции плагина

Плагин принимает объект с опциями:

```ts
wasm({
  maxFileSize: 14 * 1024, // макс. размер файла для встраивания (по умолчанию 14 КБ)
  fileName: '[hash][extname]', // шаблон имени выходного файла
  publicPath: '', // префикс путей для не встроенных файлов
  targetEnv: 'auto', // 'auto' | 'auto-inline' | 'browser' | 'node'
})
```

| Опция         | По умолчанию        | Описание                                                                                                                                                                                                                                   |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `maxFileSize` | `14 * 1024`         | Максимальный размер файла для встраивания. Файлы больше этого копируются в выходную директорию и подгружаются в рантайме. `0` — всегда копировать, не встраивать.                                                                          |
| `fileName`    | `'[hash][extname]'` | Шаблон имени для сгенерированных WASM-файлов.                                                                                                                                                                                              |
| `publicPath`  | —                   | Префикс для путей к не встроенным WASM-файлам.                                                                                                                                                                                             |
| `targetEnv`   | `'auto'`            | Поведение кода инициализации. `'auto'` — определение окружения в рантайме; `'auto-inline'` — всегда встраивать и декодировать по окружению; `'browser'` — без встроенных модулей Node.js; `'node'` — без `fetch` (нужен Node.js 20.16.0+). |

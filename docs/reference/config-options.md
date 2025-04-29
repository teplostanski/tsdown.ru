# Интерфейс: Options

Определён в: [options.ts:38](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L38)

Опции для tsdown.

## Свойства

### alias?

> `необязательный` **alias**: `Record`\<`string`, `string`\>

Определён в: [options.ts:48](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L48)

***

### clean?

> `необязательный` **clean**: `boolean` \| `string`[]

Определён в: [options.ts:66](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L66)

***

### config?

> `необязательный` **config**: `string` \| `boolean`

Определён в: [options.ts:102](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L102)

Путь к файлу конфигурации

***

### define?

> `необязательный` **define**: `Record`\<`string`, `string`\>

Определён в: [options.ts:70](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L70)

***

### dts?

> `необязательный` **dts**: `boolean` \| `Options`

Определён в: [options.ts:125](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L125)

Генерирует файлы деклараций

***

### entry?

> `необязательный` **entry**: `InputOption`

Определён в: [options.ts:40](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L40)

***

### external?

> `необязательный` **external**: `ExternalOption`

Определён в: [options.ts:41](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L41)

***

### fixedExtension?

> `необязательный` **fixedExtension**: `boolean`

Определён в: [options.ts:80](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L80)

Использует фиксированное расширение для выходных файлов.
Расширение всегда будет `.cjs` или `.mjs`.
В противном случае оно будет зависеть от типа пакета.

#### По умолчанию

```ts
false
```

***

### format?

> `необязательный` **format**: `ModuleFormat` \| `ModuleFormat`[]

Определён в: [options.ts:61](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L61)

#### По умолчанию

```ts
'es'
```

***

### fromVite?

> `необязательный` **fromVite**: `boolean` \| `"vitest"`

Определён в: [options.ts:119](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L119)

Повторно использует конфиг из Vite или Vitest (экспериментально)

#### По умолчанию

```ts
false
```

***

### globalName?

> `необязательный` **globalName**: `string`

Определён в: [options.ts:62](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L62)

***

### inputOptions?

> `необязательный` **inputOptions**: `InputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `InputOptions`\>

Определён в: [options.ts:52](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L52)

***

### minify?

> `необязательный` **minify**: `boolean`

Определён в: [options.ts:68](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L68)

#### По умолчанию

```ts
false
```

***

### noExternal?

> `необязательный` **noExternal**: `Arrayable`\<`string` \| `RegExp`\> \| (`id`, `importer`) => `undefined` \| `null` \| `boolean` \| `void`

Определён в: [options.ts:42](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L42)

***

### onSuccess?

> `необязательный` **onSuccess**: `string` \| (`config`) => `void` \| `Promise`\<`void`\>

Определён в: [options.ts:108](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L108)

Можно указать команду, которая будет выполнена после успешной сборки. Особенно полезно для режима наблюдения (Watch mode).

***

### outDir?

> `необязательный` **outDir**: `string`

Определён в: [options.ts:64](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L64)

#### По умолчанию

```ts
'dist'
```

***

### outExtensions?

> `необязательный` **outExtensions**: `OutExtensionFactory`

Определён в: [options.ts:85](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L85)

Пользовательские расширения для выходных файлов.
Опция `fixedExtension` будет переопределена этим параметром.

***

### outputOptions?

> `необязательный` **outputOptions**: `OutputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `OutputOptions`\>

Определён в: [options.ts:87](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L87)

***

### platform?

> `необязательный` **platform**: `"node"` \| `"neutral"` \| `"browser"`

Определён в: [options.ts:51](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L51)

#### По умолчанию

```ts
'node'
```

***

### plugins?

> `необязательный` **plugins**: `RolldownPluginOption`\<`any`\>

Определён в: [options.ts:96](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L96)

***

### publint?

> `необязательный` **publint**: `boolean` \| `Options`

Определён в: [options.ts:137](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L137)

Запускает publint после сборки.
Требует установленного пакета `publint`.

***

### report?

> `необязательный` **report**: `boolean`

Определён в: [options.ts:143](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L143)

Включает отчёт о размере после сборки.

#### По умолчанию

```ts
true
```

***

### shims?

> `необязательный` **shims**: `boolean`

Определён в: [options.ts:72](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L72)

#### По умолчанию

```ts
false
```

***

### silent?

> `необязательный` **silent**: `boolean`

Определён в: [options.ts:98](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L98)

***

### skipNodeModulesBundle?

> `необязательный` **skipNodeModulesBundle**: `boolean`

Определён в: [options.ts:113](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L113)

Пропускает бандлинг node_modules.

***

### sourcemap?

> `необязательный` **sourcemap**: [`Sourcemap`](./type-aliases/Sourcemap.md)

Определён в: [options.ts:65](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L65)

***

### target?

> `необязательный` **target**: `string` \| `string`[]

Определён в: [options.ts:69](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L69)

***

### treeshake?

> `необязательный` **treeshake**: `boolean`

Определён в: [options.ts:95](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L95)

#### По умолчанию

```ts
true
```

***

### tsconfig?

> `необязательный` **tsconfig**: `string` \| `boolean`

Определён в: [options.ts:49](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L49)

***

### unused?

> `необязательный` **unused**: `boolean` \| `Options`

Определён в: [options.ts:131](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L131)

Включает проверку неиспользуемых зависимостей с помощью `unplugin-unused`.
Требует установленного пакета `unplugin-unused`.

***

### watch?

> `необязательный` **watch**: `string` \| `boolean` \| `string`[]

Определён в: [options.ts:103](https://github.com/rolldown/tsdown/blob/6b9d5005e52e2b4ca6df872be6acc7b9974476c7/src/options.ts#L103)

# Интерфейс: Options

Определён в: [options.ts:43](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L43)

Опции для tsdown.

## Свойства

### alias?

> `необязательный` **alias**: `Record`\<`string`, `string`\>

Определён в: [options.ts:53](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L53)

***

### clean?

> `необязательный` **clean**: `boolean` \| `string`[]

Определён в: [options.ts:71](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L71)

***

### config?

> `необязательный` **config**: `string` \| `boolean`

Определён в: [options.ts:107](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L107)

Путь к файлу конфигурации

***

### define?

> `необязательный` **define**: `Record`\<`string`, `string`\>

Определён в: [options.ts:75](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L75)

***

### dts?

> `необязательный` **dts**: `boolean` \| `Options`

Определён в: [options.ts:130](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L130)

Генерирует файлы деклараций

***

### entry?

> `необязательный` **entry**: `InputOption`

Определён в: [options.ts:45](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L45)

***

### external?

> `необязательный` **external**: `ExternalOption`

Определён в: [options.ts:46](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L46)

***

### fixedExtension?

> `необязательный` **fixedExtension**: `boolean`

Определён в: [options.ts:85](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L85)

Использует фиксированное расширение для выходных файлов.
Расширение всегда будет `.cjs` или `.mjs`.
В противном случае оно будет зависеть от типа пакета.

#### По умолчанию

```ts
false
```

***

### format?

> `необязательный` **format**: [`Format`](./type-aliases/Format.md) \| [`Format`](./type-aliases/Format.md)[]

Определён в: [options.ts:66](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L66)

#### По умолчанию

```ts
'es'
```

***

### fromVite?

> `необязательный` **fromVite**: `boolean` \| `"vitest"`

Определён в: [options.ts:124](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L124)

Повторно использует конфиг из Vite или Vitest (экспериментально)

#### По умолчанию

```ts
false
```

***

### globalName?

> `необязательный` **globalName**: `string`

Определён в: [options.ts:67](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L67)

***

### hooks?

> `необязательный` **hooks**: `Partial`\<`TsdownHooks`\> \| (`hooks`) => `Awaitable`\<`void`\>

Определён в: [options.ts:150](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L150)

***

### inputOptions?

> `необязательный` **inputOptions**: `InputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `InputOptions`\>

Определён в: [options.ts:57](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L57)

***

### minify?

> `необязательный` **minify**: `boolean`

Определён в: [options.ts:73](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L73)

#### По умолчанию

```ts
false
```

***

### noExternal?

> `необязательный` **noExternal**: `Arrayable`\<`string` \| `RegExp`\> \| (`id`, `importer`) => `undefined` \| `null` \| `boolean` \| `void`

Определён в: [options.ts:47](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L47)

***

### onSuccess?

> `необязательный` **onSuccess**: `string` \| (`config`) => `void` \| `Promise`\<`void`\>

Определён в: [options.ts:113](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L113)

Можно указать команду, которая будет выполнена после успешной сборки. Особенно полезно для режима наблюдения (Watch mode).

***

### outDir?

> `необязательный` **outDir**: `string`

Определён в: [options.ts:69](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L69)

#### По умолчанию

```ts
'dist'
```

***

### outExtensions?

> `необязательный` **outExtensions**: `OutExtensionFactory`

Определён в: [options.ts:90](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L90)

Пользовательские расширения для выходных файлов.
Опция `fixedExtension` будет переопределена этим параметром.

***

### outputOptions?

> `необязательный` **outputOptions**: `OutputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `OutputOptions`\>

Определён в: [options.ts:92](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L92)

***

### platform?

> `необязательный` **platform**: `"node"` \| `"neutral"` \| `"browser"`

Определён в: [options.ts:56](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L56)

#### По умолчанию

```ts
'node'
```

***

### plugins?

> `необязательный` **plugins**: `RolldownPluginOption`\<`any`\>

Определён в: [options.ts:101](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L101)

***

### publint?

> `необязательный` **publint**: `boolean` \| `Options`

Определён в: [options.ts:142](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L142)

Запускает publint после сборки.
Требует установленного пакета `publint`.

***

### report?

> `необязательный` **report**: `boolean` \| `ReportOptions`

Определён в: [options.ts:148](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L148)

Включает отчёт о размере после сборки.

#### По умолчанию

```ts
true
```

***

### shims?

> `необязательный` **shims**: `boolean`

Определён в: [options.ts:77](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L77)

#### По умолчанию

```ts
false
```

***

### silent?

> `необязательный` **silent**: `boolean`

Определён в: [options.ts:103](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L103)

***

### skipNodeModulesBundle?

> `необязательный` **skipNodeModulesBundle**: `boolean`

Определён в: [options.ts:118](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L118)

Пропускает бандлинг node_modules.

***

### sourcemap?

> `необязательный` **sourcemap**: [`Sourcemap`](./type-aliases/Sourcemap.md)

Определён в: [options.ts:70](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L70)

***

### target?

> `необязательный` **target**: `string` \| `string`[]

Определён в: [options.ts:74](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L74)

***

### treeshake?

> `необязательный` **treeshake**: `boolean`

Определён в: [options.ts:100](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L100)

#### По умолчанию

```ts
true
```

***

### tsconfig?

> `необязательный` **tsconfig**: `string` \| `boolean`

Определён в: [options.ts:54](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L54)

***

### unused?

> `необязательный` **unused**: `boolean` \| `Options`

Определён в: [options.ts:136](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L136)

Включает проверку неиспользуемых зависимостей с помощью `unplugin-unused`.
Требует установленного пакета `unplugin-unused`.

***

### watch?

> `необязательный` **watch**: `string` \| `boolean` \| `string`[]

Определён в: [options.ts:108](https://github.com/rolldown/tsdown/blob/4b95e82619cbfac9f7af2b67632779e053e54c4a/src/options.ts#L108)

# Интерфейс: Options

Определён в: [options.ts:48](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L48)

Опции для tsdown.

## Свойства

### alias?

> `необязательный` **alias**: `Record`\<`string`, `string`\>

Определён в: [options.ts:58](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L58)

***

### clean?

> `необязательный` **clean**: `boolean` \| `string`[]

Определён в: [options.ts:81](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L81)

Очищает директории перед сборкой.

По умолчанию очищается директория вывода.

***

### config?

> `необязательный` **config**: `string` \| `boolean`

Определён в: [options.ts:117](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L117)

Путь к файлу конфигурации

***

### define?

> `необязательный` **define**: `Record`\<`string`, `string`\>

Определён в: [options.ts:85](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L85)

***

### dts?

> `необязательный` **dts**: `boolean` \| `Options`

Определён в: [options.ts:144](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L144)

Генерирует файлы деклараций TypeScript (.d.ts).

По умолчанию эта функция определяется автоматически на основе наличия поля `types` в файле `package.json`.
- Если поле `types` присутствует в `package.json`, генерация файлов деклараций включена.
- Если поле `types` отсутствует, генерация файлов деклараций по умолчанию отключена.

***

### entry?

> `необязательный` **entry**: `InputOption`

Определён в: [options.ts:50](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L50)

***

### env?

> `optional` **env**: `Record`\<`string`, `any`\>

Определён в: [options.ts:174](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L174)

Переменные окружения, задаваемые на этапе компиляции.

#### Пример

```json
{
  "DEBUG": true,
  "NODE_ENV": "production"
}
```

***

### external?

> `необязательный` **external**: `ExternalOption`

Определён в: [options.ts:51](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L51)

***

### fixedExtension?

> `необязательный` **fixedExtension**: `boolean`

Определён в: [options.ts:95](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L95)

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

Определён в: [options.ts:71](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L71)

#### По умолчанию

```ts
'es'
```

***

### fromVite?

> `необязательный` **fromVite**: `boolean` \| `"vitest"`

Определён в: [options.ts:134](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L134)

Повторно использует конфиг из Vite или Vitest (экспериментально)

#### По умолчанию

```ts
false
```

***

### globalName?

> `необязательный` **globalName**: `string`

Определён в: [options.ts:72](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L72)

***

### hooks?

> `необязательный` **hooks**: `Partial`\<`TsdownHooks`\> \| (`hooks`) => `Awaitable`\<`void`\>

Определён в: [options.ts:176](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L176)

***

### inputOptions?

> `необязательный` **inputOptions**: `InputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `InputOptions`\>

Определён в: [options.ts:62](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L62)

***

### minify?

> `необязательный` **minify**: `boolean` \| `BindingMinifyOptions` \| `"dce-only"`

Определён в: [options.ts:83](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L83)

#### По умолчанию

```ts
false
```

***

### noExternal?

> `необязательный` **noExternal**: `Arrayable`\<`string` \| `RegExp`\> \| (`id`, `importer`) => `undefined` \| `null` \| `boolean` \| `void`

Определён в: [options.ts:52](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L52)

***

### onSuccess?

> `необязательный` **onSuccess**: `string` \| (`config`) => `void` \| `Promise`\<`void`\>

Определён в: [options.ts:123](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L123)

Можно указать команду, которая будет выполнена после успешной сборки. Особенно полезно для режима наблюдения (Watch mode).

***

### outDir?

> `необязательный` **outDir**: `string`

Определён в: [options.ts:74](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L74)

#### По умолчанию

```ts
'dist'
```

***

### outExtensions?

> `необязательный` **outExtensions**: `OutExtensionFactory`

Определён в: [options.ts:100](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L100)

Пользовательские расширения для выходных файлов.
Опция `fixedExtension` будет переопределена этим параметром.

***

### outputOptions?

> `необязательный` **outputOptions**: `OutputOptions` \| (`options`, `format`) => `Awaitable`\<`null` \| `void` \| `OutputOptions`\>

Определён в: [options.ts:102](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L102)

***

### platform?

> `необязательный` **platform**: `"node"` \| `"neutral"` \| `"browser"`

Определён в: [options.ts:61](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L61)

#### По умолчанию

```ts
'node'
```

***

### plugins?

> `необязательный` **plugins**: `RolldownPluginOption`\<`any`\>

Определён в: [options.ts:111](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L111)

***

### publint?

> `необязательный` **publint**: `boolean` \| `Options`

Определён в: [options.ts:156](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L156)

Запускает publint после сборки.
Требует установленного пакета `publint`.

***

### report?

> `необязательный` **report**: `boolean` \| `ReportOptions`

Определён в: [options.ts:162](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L162)

Включает отчёт о размере после сборки.

#### По умолчанию

```ts
true
```

***

### shims?

> `необязательный` **shims**: `boolean`

Определён в: [options.ts:87](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L87)

#### По умолчанию

```ts
false
```

***

### silent?

> `необязательный` **silent**: `boolean`

Определён в: [options.ts:113](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L113)

***

### skipNodeModulesBundle?

> `необязательный` **skipNodeModulesBundle**: `boolean`

Определён в: [options.ts:128](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L128)

Пропускает бандлинг node_modules.

***

### sourcemap?

> `необязательный` **sourcemap**: [`Sourcemap`](./type-aliases/Sourcemap.md)

Определён в: [options.ts:75](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L75)

***

### target?

> `необязательный` **target**: `string` \| `string`[]

Определён в: [options.ts:84](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L84)

***

### treeshake?

> `необязательный` **treeshake**: `boolean`

Определён в: [options.ts:110](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L110)

#### По умолчанию

```ts
true
```

***

### tsconfig?

> `необязательный` **tsconfig**: `string` \| `boolean`

Определён в: [options.ts:59](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L59)

***

### unused?

> `необязательный` **unused**: `boolean` \| `Options`

Определён в: [options.ts:150](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L150)

Включает проверку неиспользуемых зависимостей с помощью `unplugin-unused`.
Требует установленного пакета `unplugin-unused`.

***

### watch?

> `необязательный` **watch**: `string` \| `boolean` \| `string`[]

Определён в: [options.ts:118](https://github.com/rolldown/tsdown/blob/6f00871acd7aada2e6f895db2db913b1dbe12c29/src/options.ts#L118)

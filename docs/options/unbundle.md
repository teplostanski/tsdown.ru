# Сборка без объединения (Unbundle)

Режим **unbundle** в `tsdown` создает файлы, сохраняющие структуру исходных модулей, вместо объединения всего в один файл для каждой точки входа. В этом режиме каждый файл обрабатывается отдельно, и в выходной директории сохраняется та же структура, что и в исходной. Этот подход фокусируется на преобразовании кода без его объединения.

## Как включить

Чтобы включить режим **unbundle**, установите параметр `unbundle` в значение `true` в конфигурации `tsdown`:

```ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  unbundle: true,
})
```

## Как это работает

В режиме **unbundle** каждый файл вашего проекта обрабатывается отдельно. Структура папок и файлов в результате остается такой же, как в исходном коде.

### Пример

Допустим, в вашем проекте есть следующие файлы:

```
src/
  index.ts
  mod.ts
```

И `src/index.ts` импортирует `src/mod.ts`:

```ts [src/index.ts]
import { foo } from './mod'

foo()
```

```ts [src/mod.ts]
export function foo() {
  console.log('Hello from mod!')
}
```

С параметром `unbundle: true`, даже если только `src/index.ts` указан как точка входа, оба файла будут обработаны и сохранены отдельно:

```
dist/
  index.js
  mod.js
```

Каждый выходной файл соответствует своему исходному файлу, сохраняя структуру модулей.

## Когда использовать режим unbundle

Режим **unbundle** полезен, когда вы хотите:

- Сохранить прямое соответствие между исходными и выходными файлами.
- Избежать объединения модулей в монорепозиториях или библиотеках, где пользователи могут импортировать отдельные части.
- Просто преобразовать код (например, из TypeScript в JavaScript) без его объединения.

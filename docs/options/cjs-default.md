# CJS экспорт по умолчанию

Опция `cjsDefault` помогает улучшить совместимость при генерации модулей CommonJS (CJS). Эта опция **включена по умолчанию**.

## Как это работает

Когда ваш модуль имеет **только один экспорт по умолчанию** и выходной формат установлен как CJS, `tsdown` автоматически преобразует:

- `export default ...`
  в
  `module.exports = ...` в сгенерированном JavaScript файле.

Для файлов деклараций TypeScript (`.d.ts`) происходит преобразование:

- `export default ...`
  в
  `export = ...`

Это гарантирует, что потребители, использующие синтаксис require CommonJS (`require('your-module')`), получат экспорт по умолчанию напрямую, что улучшает совместимость с инструментами и окружениями, которые ожидают такого поведения.

## Пример

**Исходный модуль:**

```ts
// src/index.ts
export default function greet() {
  console.log('Hello, world!')
}
```

**Сгенерированный CJS вывод:**

```js
// dist/index.cjs
function hello() {
  console.log('Hello!')
}
module.exports = hello
```

**Сгенерированный файл деклараций:**

```ts
// dist/index.d.cts
declare function hello(): void
export = hello
```

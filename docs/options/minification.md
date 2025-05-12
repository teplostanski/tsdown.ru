# Минификация

Минификация - это процесс сжатия вашего кода для уменьшения его размера и повышения производительности путём удаления ненужных символов, таких как пробелы, комментарии и неиспользуемый код.

Вы можете включить минификацию в `tsdown` с помощью опции `--minify`:

```bash
tsdown --minify
```

> [!WARNING]
> Функция минификации в настоящее время является **экспериментальной**. Хотя её можно использовать, она может не идеально обрабатывать все крайние случаи. Используйте её с осторожностью и тщательно тестируйте результат в рабочих окружениях.

## Пример

Для следующего исходного кода:

```ts [src/index.ts]
const x = 1

function hello(x: number) {
  console.log('Hello World')
  console.log(x)
}

hello(x)
```

Вот два возможных результата в зависимости от того, включена ли минификация:

::: code-group

```js [dist/index.mjs (без --minify)]
//#region src/index.ts
const x = 1
function hello(x$1) {
  console.log('Hello World')
  console.log(x$1)
}
hello(x)

//#endregion
```

<!-- prettier-ignore -->
```js [dist/index.mjs (с --minify)]
const e=1;function t(e){console.log(`Hello World`),console.log(e)}t(e);
```

:::

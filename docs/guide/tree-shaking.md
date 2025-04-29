# Tree-shaking

Tree-shaking — это процесс удаления неиспользуемого (мёртвого) кода из итогового бандла. Это позволяет уменьшить размер финального файла и повысить производительность приложения. В результате в бандл попадает только тот код, который используется в проекте.

Tree-shaking **включен по умолчанию** в `tsdown`, но при необходимости вы можете его отключить:

```bash
tsdown --no-treeshake
```

### Пример

Рассмотрим следующий исходный код:

::: code-group

```ts [src/index.ts]
import { hello } from './util'

const x = 1

hello(x)
```

```ts [src/util.ts]
export function unused() {
  console.log("I'm unused.")
}

export function hello(x: number) {
  console.log('Hello World')
  console.log(x)
}
```

:::

Вот два возможных результата в зависимости от того, включен ли tree-shaking:

::: code-group

```js [dist/index.mjs (с tree-shaking)]
function hello(x$1) {
  console.log('Hello World')
  console.log(x$1)
}

const x = 1
hello(x)
```

```js [dist/index.mjs (без tree-shaking)]
function unused() {
  console.log("I'm unused.")
}
function hello(x$1) {
  console.log('Hello World')
  console.log(x$1)
}

const x = 1
hello(x)
```

:::

### Что происходит

- **С Tree-shaking:** Функция `unused` удаляется из финального бандла, поскольку она не вызывается нигде в исходном коде.
- **Без Tree-shaking:** Функция `unused` включается в бандл, даже если она не используется, что приводит к увеличению размера выходного файла.

> [!TIP]
> Tree-shaking особенно полезен для оптимизации библиотек или крупных проектов с множеством неиспользуемых экспортов. Однако, если вам нужно включить весь код (например, для отладки или тестирования), вы можете отключить его с помощью `--no-treeshake`.

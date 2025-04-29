# Точка входа

Опция `entry` определяет входные файлы вашего проекта. Эти файлы служат отправной точкой для процесса сборки. Вы можете задать точки входа через CLI или в конфигурационном файле.

## Использование CLI

В CLI можно указать входные файлы напрямую в аргументах команды. Например:

```bash
tsdown src/entry1.ts src/entry2.ts
```

Эта команда соберёт `src/entry1.ts` и `src/entry2.ts` как отдельные точки входа.

## Использование конфигурационного файла

В конфигурационном файле опция `entry` позволяет определить точки входа в разных форматах:

### Один входной файл

Укажите один файл как строку:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
})
```

### Несколько входных файлов

Используйте массив строк для нескольких файлов:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/entry1.ts', 'src/entry2.ts'],
})
```

### Входные файлы с псевдонимами (алиасами)

Используйте объект, где ключи — это алиасы, а значения — пути к файлам:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    main: 'src/index.ts',
    utils: 'src/utils.ts',
  },
})
```

Такой конфиг создаст два бандла: для `src/index.ts` — `dist/main.js` и для `src/utils.ts` — `dist/utils.js`.

## Использование Glob-шаблонов

Опция `entry` поддерживает [glob-паттерны](https://code.visualstudio.com/docs/editor/glob-patterns), что позволяет динамически выбирать множество файлов. Например:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/**/*.ts',
})
```

Этот конфиг включит все `.ts` файлы в папке `src` и её подпапках как точки входа.

> [!WARNING]
> По умолчанию опция `entry` интерпретируется как glob-шаблон. Это означает:
>
> - В **Windows** используйте прямые слеши (`/`), а не обратные (`\`) в путях.
> - Нельзя указывать несуществующие в файловой системе файлы.
>
> Если требуется обойти эти ограничения, используйте напрямую `inputOptions.input` в конфиге для более точного контроля.

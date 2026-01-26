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

Вы также можете использовать glob-шаблоны в массивах, включая шаблоны исключения для пропуска конкретных файлов:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/*.ts', '!src/*.test.ts'],
})
```

### Glob-шаблоны в объекте

Когда точки входа задаются объектом, в ключах и в значениях можно использовать звёздочку `*`. В ключе она подставляется именем подходящего файла без расширения:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    // src/foo.ts → dist/lib/foo.js, src/bar.ts → dist/lib/bar.js
    'lib/*': 'src/*.ts',
  },
})
```

Так можно задать структуру выходных файлов, отличную от структуры исходников.

#### Исключения

При использовании glob в ключах значение может быть массивом шаблонов. Шаблоны с префиксом `!` исключают файлы из выборки:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    // Все файлы из hooks, кроме index
    'hooks/*': ['src/hooks/*.ts', '!src/hooks/index.ts'],
  },
})
```

#### Несколько шаблонов

Можно комбинировать несколько включающих и несколько исключающих шаблонов:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    'utils/*': [
      'src/utils/*.ts',
      'src/utils/*.tsx',
      '!src/utils/index.ts',
      '!src/utils/internal.ts',
    ],
  },
})
```

> [!WARNING]
> Если в массиве несколько включающих шаблонов, у них должна быть одна базовая директория. Смешивание в одном ключе, например, `src/hooks/*.ts` и `src/utils/*.ts` приведёт к ошибке.

#### Смешанный формат

В одном массиве entry можно комбинировать строки, glob-шаблоны и объекты:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/*',
    '!src/foo.ts',
    { main: 'index.ts' },
    { 'lib/*': ['src/*.ts', '!src/bar.ts'] },
  ],
})
```

Если одно и то же выходное имя задано и в массиве, и в объекте, приоритет у записи в объекте.

> [!TIP]
>
> В **Windows** необходимо использовать прямые слэши (`/`) вместо обратных (`\`) в путях к файлам при работе с glob-паттернами.

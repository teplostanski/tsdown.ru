# Настройка параметров Rolldown

`tsdown` использует [Rolldown](https://rolldown.rs) в качестве основного движка. Это позволяет вам легко передавать или переопределять параметры непосредственно для Rolldown, предоставляя детальный контроль над процессом сборки.

Полный список доступных параметров Rolldown можно найти в документации [Rolldown Config Options](https://rolldown.rs/options/input).

> [!WARNING]
> Необходимо хорошо разбираться в работе опций Rolldown, которые вы переопределяете, а также обязательно ознакомиться с документацией Rolldown перед их использованием.

## Переопределение `inputOptions`

Вы можете переопределить `inputOptions`, сгенерированные `tsdown`, чтобы настроить обработку входных файлов Rolldown. Для этого есть два способа:

### Использование объекта

Вы можете напрямую передать объект для переопределения конкретных `inputOptions`:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  inputOptions: {
    cwd: './custom-directory',
  },
})
```

В этом примере параметр `cwd` (текущий рабочий каталог) установлен в `./custom-directory`.

### Использование функции

Альтернативно, вы можете использовать функцию для динамического изменения `inputOptions`. Функция получает сгенерированные `inputOptions` и текущий `format` в качестве аргументов:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  inputOptions(inputOptions, format) {
    inputOptions.cwd = './custom-directory'
    return inputOptions
  },
})
```

Этот подход полезен, когда вам нужно настраивать параметры в зависимости от формата вывода или других динамических условий.

## Переопределение `outputOptions`

Параметры `outputOptions` можно настраивать так же, как и `inputOptions`. Например:

### Использование объекта

Вы можете напрямую передать объект для переопределения конкретных `outputOptions`:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  outputOptions: {
    comments: 'preserve-legal',
  },
})
```

В этом примере параметр `comments: 'preserve-legal'` гарантирует, что юридические комментарии (например, заголовки лицензий) сохранятся в выходных файлах.

### Использование функции

Вы также можете использовать функцию для динамического изменения `outputOptions`. Функция получает сгенерированные `outputOptions` и текущий `format` в качестве аргументов:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  outputOptions(outputOptions, format) {
    if (format === 'esm') {
      outputOptions.comments = 'preserve-legal'
    }
    return outputOptions
  },
})
```

Это гарантирует, что юридические комментарии сохранятся только для формата `esm`.

## Когда использовать пользовательские параметры

Хотя `tsdown` напрямую предоставляет многие общие параметры, могут быть случаи, когда некоторые параметры Rolldown не доступны через основной интерфейс. В таких случаях вы можете использовать переопределения `inputOptions` и `outputOptions` для прямой настройки этих параметров в Rolldown.

> [!TIP]
> Использование `inputOptions` и `outputOptions` дает вам полный доступ к мощной системе конфигурации Rolldown, позволяя настраивать процесс сборки за пределами стандартных возможностей `tsdown`.

# Интерфейс командной строки

Все флаги CLI также могут быть заданы в конфигурационном файле для удобства повторного использования и поддержки в сложных проектах. Подробнее смотри в разделе [Файл конфигурации](../options/config-file.md).

## `[...files]`

Укажите входные файлы в качестве аргументов командной строки. Это эквивалентно установке опции `entry` в конфигурационном файле. Например:

```bash
tsdown src/index.ts src/util.ts
```

Эта команда соберёт `src/index.ts` и `src/util.ts` как отдельные точки входа. Подробнее смотри в разделе [Точка входа](../options/entry.md).

## `-c, --config <filename>`

Указывает пользовательский конфигурационный файл. Используйте эту опцию, чтобы задать путь к нужному конфигу.

См. также [Файл конфигурации](../options/config-file.md).

## `--no-config`

Отключает загрузку конфигурационного файла. Полезно, если вы хотите использовать только параметры командной строки или значения по умолчанию.

См. также [Отключение файла конфигурации](../options/config-file.md#отключение-фаила-конфигурации).

## `--tsconfig <tsconfig>`

Указывает путь или имя файла вашего `tsconfig`. `tsdown` будет искать указанный файл, начиная с текущего каталога и поднимаясь вверх по дереву каталогов. По умолчанию используется `tsconfig.json`.

```bash
tsdown --tsconfig tsconfig.build.json
```

## `--format <format>`

Определяет формат бандла. Поддерживаемые форматы:

- `esm` (ECMAScript Modules)
- `cjs` (CommonJS)
- `iife` (Immediately Invoked Function Expression)

См. также [Формат вывода](../options/output-format.md).

## `--clean`

Очищает выходную директорию перед сборкой. Удаляет все файлы в выходной папке для чистой сборки.

См. также [Очистка](../options/cleaning.md).

## `--external <module>`

Помечает модуль как внешний. Указанный модуль не будет включён в бандл.

См. также [Зависимости](../options/dependencies.md).

## `--minify`

Включает минификацию выходного бандла для уменьшения размера файла. Минификация удаляет лишние символы и оптимизирует код для продакшена.

См. также [Минификация](../options/minification.md).

## `--target <target>`

Указывает версию JavaScript для выходного бандла. Примеры:

- `es2015`
- `esnext`

См. также [Цель (Target)](../options/target.md).

## `--silent`

Подавляет все логи, кроме ошибок, во время сборки. Отображаются только сообщения об ошибках, что облегчает поиск критических проблем.

См. также [Тихий режим (Silent Mode)](../options/silent-mode.md).

## `-d, --out-dir <dir>`

Указывает директорию для выходных файлов. Используйте эту опцию, чтобы задать, куда будут записаны собранные файлы.

См. также [Директория вывода](../options/output-directory.md).

## `--treeshake`, `--no-treeshake`

Включает или отключает tree-shaking. Tree-shaking удаляет неиспользуемый код из итогового бандла, уменьшая его размер и повышая производительность.

См. также [Tree-Shaking](../options/tree-shaking.md).

## `--sourcemap`

Генерирует карту исходного кода для собранных файлов. Карта исходного кода помогает при отладке, сопоставляя итоговый код с исходными файлами.

См. также [Карты исходного кода (Source Maps)](../options/sourcemap.md).

## `--shims`

Включает прослойки для CommonJS (CJS) и ECMAScript Module (ESM). Это обеспечивает совместимость между разными системами модулей.

См. также [Прослойки (Shims)](../options/shims.md).

## `--platform <platform>`

Указывает целевую платформу для бандла. Поддерживаемые платформы:

- `node` (Node.js)
- `browser` (веб-браузеры)
- `neutral` (платформонезависимо)

См. также [Платформа](../options/platform.md).

## `--dts`

Генерирует файлы деклараций TypeScript (`.d.ts`) для собранного кода. Полезно для библиотек, которым нужны типы.

См. также [Файлы деклараций (dts)](../options/dts.md).

## `--publint`

Включает `publint` для проверки пакета перед публикацией. Проверяет типовые ошибки в конфигурации пакета и помогает соблюдать лучшие практики.

## `--unused`

Включает проверку неиспользуемых зависимостей. Помогает выявить зависимости, которые не используются в проекте, чтобы очистить `package.json`.

## `-w, --watch [path]`

Включает режим наблюдения, чтобы автоматически пересобирать проект при изменении файлов. Можно указать путь для отслеживания изменений.

См. также [Режим наблюдения (Watch Mode)](../options/watch-mode.md).

## `--ignore-watch <path>`

Игнорирует указанные пути в режиме наблюдения.

## `--from-vite [vitest]`

Повторно использует конфигурацию из Vite или Vitest. Позволяет расширять или интегрировать существующие конфиги Vite или Vitest.

См. также [Extending Vite or Vitest Config](../options/config-file.md#расширение-конфигурации-vite-или-vitest-экспериментально).

## `--report`, `--no-report`

Включает или отключает генерацию отчёта о сборке. По умолчанию отчёт включён и выводит список артефактов сборки с их размерами в консоль. Это даёт быстрый обзор результатов сборки и помогает анализировать выходные файлы и находить возможности для оптимизации. Отключение отчёта может быть полезно, если требуется минимальный вывод в консоль.

## `--env.* <value>`

Определяет переменные окружения на этапе компиляции, например:

```bash
tsdown --env.NODE_ENV=production
```

Обратите внимание, что переменные окружения, определённые с помощью `--env.VAR_NAME`, могут быть доступны только как `import.meta.env.VAR_NAME` или `process.env.VAR_NAME`.

## `--debug [feat]`

Показывает отладочные логи.

## `--on-success <command>`

Укажите команду, которую нужно выполнить после успешной сборки. Это особенно полезно в режиме наблюдения (watch mode), чтобы автоматически запускать дополнительные скрипты или действия после завершения каждой сборки.

```bash
tsdown --on-success "echo Сборка завершена!"
```

## `--copy <dir>`

Копирует все файлы из указанного каталога в директорию вывода. Это полезно для включения статических ресурсов, таких как изображения, таблицы стилей или другие ресурсы в результат сборки.

```bash
tsdown --copy public
```

Всё содержимое каталога `public` будет скопировано в директорию вывода (например, `dist`).

## `--public-dir <dir>`

Псевдоним для `--copy`.
**Устарело:** Пожалуйста, используйте вместо этого `--copy` для большей ясности и согласованности.

## `--exports`

Генерирует поля `exports`, `main`, `module` и `types` в вашем `package.json`.

См. также [Автоэкспорты](../options/package-exports.md).
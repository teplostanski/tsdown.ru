# Введение

**tsdown** — это _Элегантный Сборщик Библиотек_. Разработанный с учетом простоты и скорости, он предоставляет бесшовный и эффективный способ сборки ваших библиотек на TypeScript и JavaScript. Независимо от того, создаете ли вы небольшую утилиту или сложную библиотеку, `tsdown` позволяет вам сосредоточиться на своем коде, элегантно обрабатывая процесс сборки.

## Почему tsdown?

`tsdown` построен на основе [Rolldown](https://rolldown.rs/) — современного сборщика, написанного на Rust. В то время как Rolldown является мощным инструментом общего назначения, `tsdown` делает шаг вперед, предоставляя **полное готовое решение** для авторов библиотек.

### Ключевые отличия между tsdown и Rolldown

- **Упрощенная конфигурация**: `tsdown` минимизирует необходимость в сложных настройках, предлагая разумные значения по умолчанию, адаптированные для разработки библиотек. Он обеспечивает оптимизированный процесс, чтобы вы могли сосредоточиться на своем коде, а не на процессе сборки.
- **Функции, специфичные для библиотек**: В отличие от Rolldown, который разработан как сборщик общего назначения, `tsdown` оптимизирован специально для создания библиотек. Он включает такие функции, как автоматическая генерация деклараций TypeScript и поддержка нескольких выходных форматов.
- **Готовность к будущему**: Как **официальный проект Rolldown**, `tsdown` глубоко интегрирован в его экосистему и будет продолжать развиваться вместе с ним. Используя последние достижения Rolldown, `tsdown` стремится исследовать новые возможности для разработки библиотек. Кроме того, `tsdown` позиционируется как **основа для [Rolldown Vite](https://github.com/vitejs/rolldown-vite) в режиме Library Mode**, обеспечивая целостный и надежный опыт для авторов библиотек в долгосрочной перспективе.

## Экосистема плагинов

`tsdown` поддерживает всю экосистему плагинов Rolldown, что упрощает расширение и настройку процесса сборки. Кроме того, он совместим с большинством плагинов Rollup, предоставляя доступ к обширной библиотеке существующих инструментов. 

Для получения более подробной информации обратитесь к документации [Плагинов](../advanced/plugins.md).

## Что он может собирать?

`tsdown` разработан для обработки всех основных элементов современной разработки библиотек:

- **TypeScript и JavaScript**: Безупречная сборка файлов `.ts` и `.js` с поддержкой современного синтаксиса и функций.
- **Декларации TypeScript**: Автоматическая генерация файлов деклараций (`.d.ts`) для вашей библиотеки.
- **Несколько выходных форматов**: Создание бандлов в форматах `esm`, `cjs` и `iife` для обеспечения совместимости в различных средах.
- **Ресурсы**: Включение и обработка вспомогательных файлов, таких как файлы `.json` или `.wasm`. 

Благодаря встроенной поддержке [tree shaking](../options/tree-shaking.md), [минификации](../options/minification.md) и [source maps](../options/sourcemap.md), `tsdown` гарантирует, что ваша библиотека оптимизирована для продакшна.

## Быстрый и элегантный

`tsdown` создан быть **быстрым**. Используя производительность Rolldown на основе Rust, он обеспечивает молниеносную сборку даже для крупных проектов. В то же время он **элегантен** — предлагает чистую и интуитивно понятную систему конфигурации, которая минимизирует шаблонный код и максимизирует продуктивность.

## Начало работы

Готовы погрузиться? Ознакомьтесь с руководством [Начало работы](./getting-started.md), чтобы настроить ваш первый проект с `tsdown`.

Хотите использовать tsdown в своих скриптах? Смотрите раздел [Программный API](../advanced/programmatic-usage.md).

## Благодарности

Проект `tsdown` создан благодаря сообществу разработчиков с открытым исходным кодом и множеству инновационных инструментов в экосистеме JavaScript и TypeScript. Мы искренне благодарим всех контрибьюторов и мейнтейнеров, чьи труды заложили основу для нашего проекта.

### Вдохновители проекта

- **Rollup**: Стал первоисточником идей для современной сборки JavaScript и привнёс мощную систему плагинов.
- **esbuild**: Показал возможности быстрой нативной сборки и задал высокую планку производительности для инструментов сборки.
- **tsup**: Подарил идею комфортного разработческого опыта "из коробки", многие опции командной строки и некоторые технические решения.
- **unbuild**: Лёг в основу гибкой системы хуков, реализованной в tsdown.
- **Rolldown**: Выступает высокопроизводительным ядром на Rust, которое питает tsdown и обеспечивает множество его продвинутых возможностей.

# Работа с AI

tsdown предоставляет официальные [skills](https://agentskills.io/) для AI агентов-разработчиков, чтобы они могли понимать конфигурацию tsdown, функции и лучшие практики при создании библиотек.

## Установка

Установите все skills tsdown для вашего AI-агента разработки:

```bash
npx skills add rolldown/tsdown
```

Или установите только конкретный skill:

```bash
npx skills add rolldown/tsdown --skill tsdown          # только skill tsdown
npx skills add rolldown/tsdown --skill tsdown-migrate  # только skill для миграции
```

Исходный код skills находится [здесь](https://github.com/rolldown/tsdown/tree/main/skills).

## Примеры запросов

После установки вы можете просить агентов помочь с различными задачами tsdown:

```
Настрой tsdown для сборки моей TypeScript библиотеки в форматах ESM и CJS
```

```
Настрой tsdown для генерации файлов деклараций типов и сборки для браузеров
```

```
Добавь поддержку React в мою конфигурацию tsdown с Fast Refresh
```

```
Настрой сборку монорепозитория с поддержкой workspace в tsdown
```

## Skill для миграции

Для проектов, переходящих с tsup, вместе с `rolldown/tsdown` также устанавливается отдельный skill для миграции. При необходимости его можно установить отдельно:

```bash
npx skills add rolldown/tsdown --skill tsdown-migrate
```

Этот skill помогает AI-агентам выполнять миграцию с tsup на tsdown и включает:

- Полное соответствие опций между tsup и tsdown
- Различия значений по умолчанию и способы сохранить поведение tsup
- Неподдерживаемые опции и их альтернативы
- Правила миграции `package.json` (dependencies, scripts, поля конфигурации)
- Новые возможности, доступные только в tsdown, которые стоит предложить после миграции

### Примеры запросов

```
Migrate my tsup project to tsdown
```

```
Convert my tsup.config.ts to tsdown format
```

```
What are the differences between tsup and tsdown options?
```

Исходный код migration skill находится [здесь](https://github.com/rolldown/tsdown/tree/main/skills/tsdown-migrate).

## Что включено

Skill tsdown предоставляет знания о:

- Форматах файлов конфигурации, опциях и поддержке workspace
- Точках входа, форматах вывода и файлах деклараций типов
- Обработке зависимостей и автоматической экстернализации
- Поддержке фреймворков (React, Vue, Solid, Svelte)
- Плагинах, хуках и программном API
- Командах CLI и паттернах использования

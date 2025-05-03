# Формат вывода

По умолчанию `tsdown` генерирует JavaScript-код в формате [ESM](https://nodejs.org/api/esm.html) (ECMAScript Module). Однако вы можете указать желаемый формат вывода с помощью опции `--format`:

```bash
tsdown --format esm # по умолчанию
```

### Доступные форматы

- [`esm`](https://nodejs.org/api/esm.html): формат ECMAScript Module, идеально подходит для современных JavaScript-окружений, включая браузеры и Node.js.
- [`cjs`](https://nodejs.org/api/modules.html): формат CommonJS, часто используемый в проектах Node.js.
- [`iife`](https://developer.mozilla.org/ru/docs/Glossary/IIFE): Immediately Invoked Function Expression (немедленно вызываемое функциональное выражение), подходит для встраивания в теги `<script>` или автономного использования в браузере.

### Пример

```bash
# Генерирует вывод в формате ESM (по умолчанию)
tsdown --format esm

# Генерирует вывод как в ESM, так и в CJS форматах
tsdown --format esm --format cjs

# Генерирует вывод в формате IIFE для использования в браузере
tsdown --format iife
```

> [!TIP]
> Вы можете указать несколько форматов в одной команде для генерации выходных файлов для разных окружений. Например, комбинирование `esm` и `cjs` обеспечивает совместимость как с современными, так и с устаревшими системами.

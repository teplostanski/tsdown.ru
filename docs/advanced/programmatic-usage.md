# Программный API

Вы можете использовать `tsdown` напрямую в вашем JavaScript или TypeScript коде. Это удобно для создания собственных скриптов сборки, интеграций или сложной автоматизации.

## Пример

```ts
import { build } from 'tsdown'

await build({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  // ...любые другие опции
})
```

Все опции командной строки доступны как свойства в объекте настроек. Полный список можно найти в разделе [Параметры конфигурации](../reference/config-options.md).

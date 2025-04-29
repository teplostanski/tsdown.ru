# 处理依赖

在使用 `tsdown` 打包时，依赖会被智能处理，以确保您的库保持轻量且易于使用。以下是 `tsdown` 如何处理不同类型的依赖以及如何自定义此行为。

## 默认行为

### `dependencies` 和 `peerDependencies`

默认情况下，`tsdown` **不会打包** 在 `package.json` 中列为 `dependencies` 和 `peerDependencies` 的依赖：

- **`dependencies`**：这些依赖会被视为外部依赖，不会包含在打包文件中。相反，当用户安装您的库时，npm（或其他包管理器）会自动安装这些依赖。
- **`peerDependencies`**：这些依赖同样被视为外部依赖。使用您的库的用户需要手动安装这些依赖，尽管某些包管理器可能会自动处理。

### 其他依赖

以下依赖类型会默认被打包到您的库中：

- **`devDependencies`**：在 `package.json` 中列为 `devDependencies` 的依赖。
- **幻影依赖（Phantom Dependencies）**：存在于 `node_modules` 文件夹中但未明确列在 `package.json` 中的依赖。

## 自定义依赖处理

`tsdown` 提供了两个选项来覆盖默认行为：

### `external`

`external` 选项允许您显式将某些依赖标记为外部依赖，确保它们不会被打包到您的库中。例如：

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  external: ['lodash', /^@my-scope\//],
})
```

在此示例中，`lodash` 和所有 `@my-scope` 命名空间下的包将被视为外部依赖。

### `noExternal`

`noExternal` 选项允许您强制将某些依赖打包，即使它们被列为 `dependencies` 或 `peerDependencies`。例如：

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  noExternal: ['some-package'],
})
```

在这里，`some-package` 将被打包到您的库中。

## 声明文件中的依赖处理

对于声明文件，`tsdown` 默认**不会打包任何依赖**。这确保 `.d.ts` 文件保持简洁，仅专注于您的库的类型。

### 自定义类型解析

您可以使用 `dts.resolve` 选项显式包含某些依赖的类型定义：

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    resolve: ['lodash', /^@types\//],
  },
})
```

在此示例中，`lodash` 和所有 `@types` 命名空间下的包的类型定义将被包含在 `.d.ts` 文件中。

## 总结

- **默认行为**：
  - `dependencies` 和 `peerDependencies` 被视为外部依赖，不会被打包。
  - 其他依赖（`devDependencies` 和幻影依赖）会被打包。
- **自定义选项**：
  - 使用 `external` 将特定依赖标记为外部依赖。
  - 使用 `noExternal` 强制将特定依赖打包。
- **声明文件**：
  - 默认不打包依赖。
  - 使用 `dts.resolve` 将特定依赖的类型定义包含在 `.d.ts` 文件中。

通过理解和自定义依赖处理，您可以确保您的库在体积和可用性之间达到最佳平衡。

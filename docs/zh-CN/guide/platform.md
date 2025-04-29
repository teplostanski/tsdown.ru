# 运行平台（Platform）

运行平台指定了打包后 JavaScript 代码的目标运行环境。

默认情况下，`tsdown` 针对 `node` 运行时进行打包，但您可以通过 `--platform` 选项自定义目标平台：

```bash
tsdown --platform node    # 默认
tsdown --platform browser
tsdown --platform neutral
```

### 可用平台

- **`node`:** 针对 [Node.js](https://nodejs.org/) 运行时。这是默认平台，Node.js 内置模块（如 `fs`、`path`）会被自动解析。适合工具链或服务端项目。
- **`browser`:** 针对 Web 浏览器（如 Chrome、Firefox）。适用于前端项目。如果您的代码使用了 Node.js 内置模块，将会显示警告，您可能需要使用 polyfill 或 shim 来确保兼容性。
- **`neutral`:** 一个与平台无关的构建目标，不预设任何特定的运行时环境。如果您的代码需要在多个环境中运行，或者您希望完全掌控运行时行为，可以选择此选项。特别适合用于 Node.js 和浏览器环境的库或共享代码。

### 示例

```bash
# 针对 Node.js 打包（默认）
tsdown --platform node

# 针对浏览器打包
tsdown --platform browser

# 针对中立平台打包
tsdown --platform neutral
```

> [!TIP]
> 选择正确的平台可以确保您的代码针对目标运行时进行了优化。例如，前端项目使用 `browser`，服务端应用使用 `node`，而通用库使用 `neutral`。

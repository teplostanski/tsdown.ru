# 输出格式

默认情况下，`tsdown` 会生成 [ESM](https://nodejs.org/api/esm.html)（ECMAScript 模块）格式的 JavaScript 代码。不过，您可以通过 `--format` 选项指定所需的输出格式：

```bash
tsdown --format esm # 默认
```

### 可用格式

- [`esm`](https://nodejs.org/api/esm.html)：ECMAScript 模块格式，适用于包括浏览器和 Node.js 在内的现代 JavaScript 环境。
- [`cjs`](https://nodejs.org/api/modules.html)：CommonJS 格式，常用于 Node.js 项目。
- [`iife`](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)：立即调用函数表达式，适合嵌入 `<script>` 标签或独立的浏览器使用场景。

### 示例

```bash
# 生成 ESM 格式输出（默认）
tsdown --format esm

# 同时生成 ESM 和 CJS 格式输出
tsdown --format esm --format cjs

# 生成适用于浏览器的 IIFE 格式输出
tsdown --format iife
```

> [!TIP]
> 您可以在单个命令中指定多个格式，以生成适用于不同环境的输出。例如，结合使用 `esm` 和 `cjs` 格式可以确保同时兼容现代和传统系统。

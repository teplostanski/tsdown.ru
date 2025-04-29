# Handling Dependencies

When bundling with `tsdown`, dependencies are handled intelligently to ensure your library remains lightweight and easy to consume. Here's how `tsdown` processes different types of dependencies and how you can customize this behavior.

## Default Behavior

### `dependencies` and `peerDependencies`

By default, `tsdown` **does not bundle dependencies** listed in your `package.json` under `dependencies` and `peerDependencies`:

- **`dependencies`**: These are treated as external and will not be included in the bundle. Instead, they will be installed automatically by npm (or other package managers) when your library is installed.
- **`peerDependencies`**: These are also treated as external. Users of your library are expected to install these dependencies manually, although some package managers may handle this automatically.

### Other Dependencies

All other dependencies, including:

- **`devDependencies`**: Dependencies listed under `devDependencies` in your `package.json`.
- **Phantom Dependencies**: Dependencies that exist in your `node_modules` folder but are not explicitly listed in your `package.json`.

These will be bundled into your library by default.

## Customizing Dependency Handling

`tsdown` provides two options to override the default behavior:

### `external`

The `external` option allows you to explicitly mark certain dependencies as external, ensuring they are not bundled into your library. For example:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  external: ['lodash', /^@my-scope\//],
})
```

In this example, `lodash` and all packages under the `@my-scope` namespace will be treated as external.

### `noExternal`

The `noExternal` option allows you to force certain dependencies to be bundled, even if they are listed in `dependencies` or `peerDependencies`. For example:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  noExternal: ['some-package'],
})
```

Here, `some-package` will be bundled into your library.

## Handling Dependencies in Declaration Files

For declaration files, `tsdown` **does not bundle any dependencies by default**. This ensures that your `.d.ts` files remain clean and focused on your library's types.

### Customizing Type Resolution

You can use the `dts.resolve` option to explicitly include type definitions for certain dependencies:

```ts [tsdown.config.ts]
import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    resolve: ['lodash', /^@types\//],
  },
})
```

In this example, type definitions for `lodash` and all packages under the `@types` namespace will be bundled into the `.d.ts` files.

## Summary

- **Default Behavior**:
  - `dependencies` and `peerDependencies` are treated as external and not bundled.
  - All other dependencies (`devDependencies` and phantom dependencies) are bundled.
- **Customization**:
  - Use `external` to mark specific dependencies as external.
  - Use `noExternal` to force specific dependencies to be bundled.
- **Declaration Files**:
  - Dependencies are not bundled by default.
  - Use `dts.resolve` to include specific dependency types in `.d.ts` files.

By understanding and customizing dependency handling, you can ensure your library is optimized for both size and usability.

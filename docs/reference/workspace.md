# Interface: Workspace

Defined in: [types.ts:47](https://github.com/rolldown/tsdown/blob/b2453d085741771a389c70fb326a0e04a8352056/src/options/types.ts#L47)

## Properties

### config?

> `optional` **config**: `string` \| `boolean`

Defined in: [types.ts:63](https://github.com/rolldown/tsdown/blob/b2453d085741771a389c70fb326a0e04a8352056/src/options/types.ts#L63)

Path to the workspace configuration file.

***

### exclude?

> `optional` **exclude**: `Arrayable`\<`string`\>

Defined in: [types.ts:58](https://github.com/rolldown/tsdown/blob/b2453d085741771a389c70fb326a0e04a8352056/src/options/types.ts#L58)

Exclude directories from workspace.
Defaults to all `node_modules`, `dist`, `test`, `tests`, `temp`, and `tmp` directories.

***

### include?

> `optional` **include**: `Arrayable`\<`string`\>

Defined in: [types.ts:53](https://github.com/rolldown/tsdown/blob/b2453d085741771a389c70fb326a0e04a8352056/src/options/types.ts#L53)

Workspace directories. Glob patterns are supported.
- `auto`: Automatically detect `package.json` files in the workspace.

#### Default

```ts
'auto'
```

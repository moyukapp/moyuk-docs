---
sidebar_position: 3
---

# TypeScript in Moyuk

Moyuk's TypeScript aims to be as compatible as possible with Deno's. (Not fully compatible yet.)

## tsconfig.json

Moyuk doesn't support customizing compiler options yet.
The tsconfig.json set by Moyuk looks like this:

```json
{
	"compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "inlineSourceMap": true,
    "isolatedModules": true,
    "module": "esnext",
    "moduleDetection": "force",
    "strict": true,
    "target": "esnext",
    "useDefineForClassFields": true
	}
}
```

:::info

Moyuk's compiler options are basically same as [Deno's](https://deno.land/manual/advanced/typescript/configuration).

:::

## Import

You can import modules from `https:` or `npm:` URLs just like in Deno.
Moyuk currently doesn't support importing TypeScript files directly, but you can use CDNs that support [X-TypeScript-Types header](https://deno.land/manual/advanced/typescript/types#using-x-typescript-types-header) to import pre-compiled modules.

## Using npm packages

### Importing npm packages with npm specifiers

Moyuk supports importing modules from npm packages via `npm:` URL.

```ts
import { marked } from 'npm:marked@^4.2';
```

:::note

Moyuk uses [esm.sh](https://esm.sh/) internally to resolve npm specifiers.

:::

### Importing npm packages with CDNs

Moyuk supports importing modules from CDNs that support [X-TypeScript-Types header](https://deno.land/manual/advanced/typescript/types#using-x-typescript-types-header) via `https:` URL.

```ts
import { marked } from 'https://esm.sh/marked@4.2.12';
```

Here is the list of the CDNs that support `X-TypeScript-Types`:

- [esm.sh](https://esm.sh/)
- [Skypack](https://www.skypack.dev/)

## TypeScript version

You can check the TypeScript version in the **App Info** tab.
Moyuk uses the latest TypeScript version.
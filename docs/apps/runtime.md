---
sidebar_position: 4
---

# JS Runtime

Moyuk's apps are executed in a sandboxed environment. The runtime consists of [iframe sandbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox), [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

## Browser requirements

Moyuk only tested on the latest versions of Chrome.

- Firefox is not supported yet. The runtime depends on dynamic module import and [Firefox doesn't support it in worker yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility).
- Safari seems to work, but it's not tested.

## Available APIs

Because the runtime is based on Web Worker, you can use all the [APIs that are available in the Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).
However, there are some restrictions.

### Eliminated APIs

Moyuk's runtime eliminates some APIs that are unnecessary for Moyuk's apps.
The APIs that are eliminated are:

- The APIs only for the browsers.

:::note

- Eliminating APIs is not for security reasons, but for the future compatibility.
- Although Moyuk's runtime is currently based on Web Worker, we may change the implementation in the future.

:::

## Network access

You can use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to access the network.
However, there are some restrictions.

### Permissions

The runtime denies all network accesses by default. The users must explicitly grant the permissions to the apps. This feature imitates [Deno's allow-net permissions](https://deno.land/manual/basics/permissions#network-access).

:::tip

This feature is achieved by [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). The runtime dynamically generates the CSP header based on the permissions users granted.

:::

### CORS

The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy may affect the network access. The destination server must provide `Access-Control-Allow-Origin: *` header to allow the access.

:::note

Maybe we will provide a proxy server to bypass the CORS policy in the future.

:::

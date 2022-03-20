# deno_kroki

encode-diagram deno client/library from [Kroki](https://docs.kroki.io/kroki/)

## package registry

### deno
https://deno.land/x/deno_kroki@v0.2.1

### npm
https://www.npmjs.com/package/deno_encode_kroki

## usage

```ts:usage.ts
// npm(esmodule)
// import { encodeKroki } from "deno_encode_kroki";

// deno
import { encodeKroki } from "https://deno.land/x/deno_kroki@v0.2.1/lib/encode_kroki.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "svg";
console.log(`https://kroki.io/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`);

// https://kroki.io/graphviz/svg/eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
```

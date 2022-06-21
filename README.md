# deno_kroki

encode-diagram deno client/library from [Kroki](https://docs.kroki.io/kroki/)

## package registry

### deno

https://deno.land/x/deno_kroki@v0.7.0

### npm(esmodule)

https://esm.sh/deno_encode_kroki@0.7.0
https://esm.sh/deno_encode_kroki@0.7.0/types/mod.d.ts

## usage

```ts:usage.ts
// npm(esmodule)
// import { encodeKroki } from "deno_encode_kroki";

// deno
import { encodeKrokiURL, convertKroki, DiagramType, OutputFormat } from "./lib/mod.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

//example: https://kroki.io
const baseURL = Deno.env.get("KROKI_URL");

const diagramType = DiagramType.Graphviz; // "graphviz";

console.log(encodeKrokiURL(baseURL!, diagramType, OutputFormat.Png, diagramSource));
convertKroki(encodeKrokiURL(baseURL!, diagramType, OutputFormat.Png, diagramSource), "./hello.png");
convertKroki(encodeKrokiURL(baseURL!, diagramType,  OutputFormat.Svg, diagramSource), "./hello.svg");

// https://kroki.io/graphviz/png/eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
```

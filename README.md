# deno_kroki

encode-diagram deno client/library from [Kroki](https://docs.kroki.io/kroki/)

## usage

```ts:usage.ts
import { encodeKroki } from "./lib/encode_kroki.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "svg";
console.log(`https://kroki.io/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`);

// https://kroki.io/graphviz/svg/eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
```
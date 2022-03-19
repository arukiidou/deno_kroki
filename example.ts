import { encodeKroki } from "./lib/encode_kroki.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

console.log(encodeKroki(diagramSource));
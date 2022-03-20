// "type": "module",
import { encodeKroki } from "deno_encode_kroki";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "svg";
console.log(`https://kroki.io/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`);

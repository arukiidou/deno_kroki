import { encodeKroki } from "https://deno.land/x/deno_kroki@v0.2.1/lib/encode_kroki.ts";
import { convertKroki } from "https://deno.land/x/deno_kroki@v0.2.1/lib/fetch_kroki.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "svg";
console.log(`https://kroki.io/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`);

const path = "./hello.svg";
convertKroki(diagramtype, fotmat, diagramSource, path);

import { encodeKroki } from "https://deno.land/x/deno_kroki@v0.3.0/lib/encode_kroki.ts";
import { convertKroki } from "https://deno.land/x/deno_kroki@v0.3.0/lib/fetch_kroki.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "png";
console.log(
  `https://kroki.io/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`,
);

const path = "./hello.png";
convertKroki(diagramtype, fotmat, diagramSource, path);

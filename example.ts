import { encodeKrokiURL } from "./lib/encode_kroki.ts";
import { convertKroki } from "./lib/fetch_kroki.ts";
import { baseURL } from "./kroki.config.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

const diagramtype = "graphviz";
const fotmat = "png";
console.log(encodeKrokiURL(baseURL!, diagramtype, fotmat, diagramSource));

const path = "./hello.png";
convertKroki(encodeKrokiURL(baseURL!, diagramtype, fotmat, diagramSource), path);

const fotmatsvg = "svg";
console.log(encodeKrokiURL(baseURL!, diagramtype, fotmatsvg, diagramSource));

const pathsvg= "./hello.svg";
convertKroki(encodeKrokiURL(baseURL!, diagramtype, fotmatsvg, diagramSource), pathsvg);
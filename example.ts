import {
  convertKroki,
  DiagramType,
  encodeKrokiURL,
  OutputFormat,
} from "./lib/mod.ts";

const diagramSource = `digraph G {
    Hello->World
}`;

//example: https://kroki.io
const baseURL = Deno.env.get("KROKI_URL");

const diagramType = DiagramType.Graphviz; // "graphviz";

console.log(
  encodeKrokiURL(baseURL!, diagramType, OutputFormat.Png, diagramSource),
);
convertKroki(
  encodeKrokiURL(baseURL!, diagramType, OutputFormat.Png, diagramSource),
  "./hello.png",
);
convertKroki(
  encodeKrokiURL(baseURL!, diagramType, OutputFormat.Svg, diagramSource),
  "./hello.svg",
);

// also run
// convertKroki(
//   encodeKrokiURL(baseURL!, DiagramType.Structurizr, OutputFormat.Png, diagramSource, new URLSearchParams({"view-key": "Containers"})),
//   "./params.png",
// );

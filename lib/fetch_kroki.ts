import { encodeKroki } from "./encode_kroki.ts";

const baseURL = Deno.env.get("KROKI_URL");

export function fetchKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
): Promise<Response> {
  return fetch(
    `${baseURL}/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`,
  )
    .then((response) => response);
}

export function convertKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
  path: string,
) {
  const exportBehavior = (res: Response) =>
    res.text().then((dia) => Deno.writeTextFile(path, dia));
  fetchKroki(diagramtype, fotmat, diagramSource).then(exportBehavior);
}

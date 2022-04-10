import { encodeKroki } from "./encode_kroki.ts";
import { baseURL } from "./kroki.config.ts"
import { writeAllSync } from "https://deno.land/std@0.134.0/streams/mod.ts";

/**
 * fetch kroki diagrams.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramtype kroki diagram type
 * @param {string} fotmat image fotmat string(svg | png | pdf...)
 * @param {string} diagramSource The source string for Kroki diagram
 * @returns {Promise<Response>} The response diagram files.
 */
export function fetchKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
): Promise<Response> {
  return fetch(
    `${baseURL}/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`,
  );
}

/**
 * convert kroki diagrams and write file.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramtype kroki diagram type
 * @param {string} fotmat image fotmat string(svg | png | pdf...)
 * @param {string} diagramSource The source string for Kroki diagram
 * @param {string} path file path
 */
export function convertKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
  path: string,
): void {
  const file: Deno.FsFile = Deno.openSync(path, { create: true, write: true });

  fetchKroki(diagramtype, fotmat, diagramSource)
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) => writeAllSync(file, new Uint8Array(arrayBuffer)))
    .catch((e) => console.error(e));

  Deno.close(file.rid);
}

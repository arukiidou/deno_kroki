import { writableStreamFromWriter } from "https://deno.land/std@0.137.0/streams/mod.ts";

/**
 * convert kroki diagrams and write file.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramtype kroki diagram type
 * @param {string} fotmat image fotmat string(svg | png | pdf...)
 * @param {string} diagramSource The source string for Kroki diagram
 * @param {string} path file path
 */
export function convertKroki(
  url: URL,
  path: string,
): void {
  fetch(url)
    .then((res) => res.body!.pipeTo(writableStreamFromWriter(Deno.createSync(path))))
    .catch((error) => console.error(error));
}

import { writableStreamFromWriter } from "https://deno.land/std@0.141.0/streams/mod.ts";

 export function fetchKroki(
  url: URL,
  dest: WritableStream<Uint8Array>, 
  options?: PipeOptions | undefined
): void {
  fetch(url.toString())
    .then((res) => res.body!.pipeTo(dest, options))
    .catch(console.error);
}

/**
 * convert kroki diagrams and write file.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {URL} url kroki url
 * @param {string} path file path
 */
export function convertKroki(
  url: URL,
  path: string,
): void {
  fetchKroki(url, writableStreamFromWriter(Deno.createSync(path)));
}

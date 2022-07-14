import { writableStreamFromWriter } from "https://deno.land/std@0.148.0/streams/mod.ts";

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
  const writableStream: WritableStream<Uint8Array> = writableStreamFromWriter(
    Deno.createSync(path),
  );
  convertKrokiByStream(url, writableStream);
}

/**
 * convert kroki diagrams and write file.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {URL} url kroki url
 * @param {WritableStream<Uint8Array>} writableStream writable stream
 */
export function convertKrokiByStream(
  url: URL,
  writableStream: WritableStream<Uint8Array>,
): void {
  fetch(url.toString())
    .then((res) => res.body!)
    .then((body) => body.pipeTo(writableStream))
    .catch(console.error);
}

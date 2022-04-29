import zlib from "https://deno.land/std@0.137.0/node/zlib.ts";
import { encode } from "https://deno.land/std@0.137.0/encoding/base64url.ts";

/**
 * encoded in the URL using a deflate + base64 algorithm.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramSource The source string for Kroki diagram
 * @returns {string} The base64 encoded string
 *
 * Example:
 *
 * ```ts
 * import { encodeKroki } from "https://deno.land/x/deno_kroki@v0.2.1/lib/encode_kroki.ts";
 *
 * const diagramSource = `digraph G {
 *   Hello->World
 * }`;
 *
 * // result: eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
 * console.log(encodeKroki(diagramSource));
 * ```
 */
export function encodeKroki(diagramSource: string): string {
  const compressed: Uint8Array = zlib.deflateSync(diagramSource, {
    level: zlib.constants.Z_BEST_COMPRESSION,
  });
  return encode(compressed);
}

/**
 * encoded in the full URL using a deflate + base64 algorithm.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramtype kroki diagram type
 * @param {string} fotmat image fotmat string(svg | png | pdf...)
 * @param {string} diagramSource The source string for Kroki diagram
 * @returns {Promise<Response>} The response diagram files.
 *
 * Example:
 *
 * ```ts
 * import { encodeKroki } from "https://deno.land/x/deno_kroki@v0.2.1/lib/encode_kroki.ts";
 *
 * const diagramSource = `digraph G {
 *   Hello->World
 * }`;
 *
 * // result: eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
 * console.log(encodeKroki(diagramSource));
 * ```
 */
export function encodeKrokiURL(
  baseURL: string,
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
): URL {
  return new URL(`${baseURL}/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`)
}
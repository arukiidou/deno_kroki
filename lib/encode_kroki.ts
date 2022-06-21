import { deflate } from "https://esm.sh/pako@2.0.4";
import { encode } from "https://deno.land/std@0.141.0/encoding/base64url.ts";
import { DiagramType, OutputFormat } from "./models/index.ts";

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
  const Z_BEST_COMPRESSION = 9
  const compressed: Uint8Array = deflate(diagramSource, {level: Z_BEST_COMPRESSION})
  return encode(compressed)
}

/**
 * encoded in the full URL using a deflate + base64 algorithm.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} baseURL kroki instance url
 * @param {DiagramType} diagramType kroki diagram type
 * @param {OutputFormat} outputFormat image fotmat string(svg | png | pdf...)
 * @param {string} diagramSource The source string for Kroki diagram
 * @returns {URL} kroki url
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
 * const baseURL = "https://kroki.io";
 * 
 * const diagramtype = "graphviz";
 * const fotmat = "png";
 * 
 * // result: eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
 * console.log(encodeKrokiURL(baseURL!, diagramtype, fotmatsvg, diagramSource));
 * ```
 */
export function encodeKrokiURL(
  baseURL: string,
  diagramType: DiagramType,
  outputFormat: OutputFormat,
  diagramSource: string,
): URL {
  return new URL(`${baseURL}/${diagramType}/${outputFormat}/${encodeKroki(diagramSource)}`)
}

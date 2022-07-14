import { encode } from "./encode.ts";
import { DiagramType, OutputFormat } from "./models/index.ts";

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
  queryString: URLSearchParams = new URLSearchParams(),
): URL {
  return new URL(
    `/${diagramType}/${outputFormat}/${
      encode(diagramSource)
    }?${queryString.toString()}`,
    baseURL,
  );
}

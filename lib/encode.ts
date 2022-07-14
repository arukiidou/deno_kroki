import { deflate } from "https://esm.sh/pako@2.0.4";
import { encode as base64url } from "https://deno.land/std@0.148.0/encoding/base64url.ts";

/**
 * encoded in the URL using a deflate + base64 algorithm.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramSource The source string for Kroki diagram
 * @returns {string} The base64 encoded string
 *
 * Example:
 *
 * ```ts
 * import { encode } from "https://deno.land/x/deno_kroki@v0.8.0/lib/encode.ts";
 *
 * const diagramSource = `digraph G {
 *   Hello->World
 * }`;
 *
 * // result: eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla
 * console.log(encode(diagramSource));
 * ```
 */
export function encode(diagramSource: string): string {
  const Z_BEST_COMPRESSION = 9;
  const compressed: Uint8Array = deflate(diagramSource, {
    level: Z_BEST_COMPRESSION,
  });
  return base64url(compressed);
}

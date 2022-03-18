import STATUS from "https://deno.land/x/compress@v0.4.5/zlib/zlib/status.ts";
import { deflate } from "https://deno.land/x/compress@v0.4.5/mod.ts";
import { encode } from "https://deno.land/std@0.130.0/encoding/base64url.ts";

/**
 * encoded in the URL using a deflate + base64 algorithm.
 * @link https://docs.kroki.io/kroki/setup/encode-diagram/
 * @param {string} diagramSource The source string for kroki diagram
 *
 * Example:
 *
 * ```ts
 * import { encodeKroki } from "./lib/encode_kroki.ts";
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
  const encoded: Uint8Array = new TextEncoder().encode(diagramSource);
  const compressed: Uint8Array = deflate(encoded, {
    level: STATUS.Z_BEST_COMPRESSION,
  });
  return encode(compressed);
}

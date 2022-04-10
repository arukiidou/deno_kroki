import { encodeKroki } from "./encode_kroki.ts";
import {
  copy,
  readerFromStreamReader,
} from "https://deno.land/std@0.134.0/streams/mod.ts";

const baseURL = Deno.env.get("KROKI_URL");

export function fetchKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
): Promise<Response> {
  return fetch(`${baseURL}/${diagramtype}/${fotmat}/${encodeKroki(diagramSource)}`);
}

export async function convertKroki(
  diagramtype: string,
  fotmat: string,
  diagramSource: string,
  path: string,
) {
  const writer: Deno.FsFile = await Deno.open(path, { create: true, write: true })

  fetchKroki(diagramtype, fotmat, diagramSource)
    .then(res => readerFromStreamReader(res.body!.getReader()))
    .then(dr => copy(dr, writer))
    .catch(e => console.error(e))
    .finally(() => writer.close());
}

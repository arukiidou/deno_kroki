import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { encode } from "./encode.ts";

const graphviz = `digraph G {
    Hello->World
}`;

const mermaid = `graph TD
  A[ Anyone ] -->|Can help | B( Go to github.com/yuzutech/kroki )
  B --> C{ How to contribute? }
  C --> D[ Reporting bugs ]
  C --> E[ Sharing ideas ]
  C --> F[ Advocating ]
`;

const plantuml = `skinparam monochrome true
skinparam ranksep 20
skinparam dpi 150
skinparam arrowThickness 0.7
skinparam packageTitleAlignment left
skinparam usecaseBorderThickness 0.4
skinparam defaultFontSize 12
skinparam rectangleBorderThickness 1

rectangle "Main" {
  (main.view)
  (singleton)
}
rectangle "Base" {
  (base.component)
  (component)
  (model)
}
rectangle "<b>main.ts</b>" as main_ts

(component) ..> (base.component)
main_ts ==> (main.view)
(main.view) --> (component)
(main.view) ...> (singleton)
(singleton) ---> (model)
`;

const actdiag = `actdiag {
  write -> convert -> image

  lane user {
    label = "User"
    write [label = "Writing text"];
    image [label = "Get diagram image"];
  }
  lane Kroki {
    convert [label = "Convert text to image"];
  }
}
`;

const seqdiag = `seqdiag {
  browser  -> webserver [label = "GET /seqdiag/svg/base64"];
  webserver  -> processor [label = "Convert text to image"];
  webserver <-- processor;
  browser <-- webserver;
}
`;

class Helper {
  constructor(readonly input: string, readonly expect: string) {}
}

export const testSetString = new Map([
  [
    "graphviz",
    new Helper(graphviz, "eNpLyUwvSizIUHBXqOZSAAKP1JycfF278PyinBSuWgCRBQla"),
  ],
  [
    "mermaid",
    new Helper(
      mermaid,
      "eNpNzr0OgjAcBPCdp7hRB-QNNHz4Masb6VBK0zZg_6S2GhTf3cJgnH93l1OODxrXKgHyGrkdyUowpOl2KrmFlv2ACcUKR4InKON1aDaCbtkYXsFLobPOUWewjgvF3EP5xomec1qQ9c40MbbDJ3q5eFXjLAdy3liFJqg72M_2NS6au1lMK_k_HeK99kGCLz2WfAHnUzg5",
    ),
  ],
  [
    "plantuml",
    new Helper(
      plantuml,
      "eNplj0FPwzAMhe_5FVZP7LCwTiAuWyV24MaJ3ZGbelvUxKmSlEkg_jttVU0uuz37-bOfU2u5w4gefOBgLjF4ghx7UunmROQ2UQfbjWg2nYXyWXYwxnA9XqxpmVKCjX4RZoemxTMdbXb06uyZPXEGR6cshvpEBhMdQmwoyk1P8jCdsHf5LXD-sN8E5VZGJZORz-5uR6nUzYPiHS0X8KMAHvwg9Zel62qskh0HcuCV-pXAYYg1A_UgtQm-Czy8MFHLyoeG3D9-V1fToZx2j3VVACYY68-clBI4aF3dX5gnYb-vFnmFhvW6WuSQnp62iteEHsCRnDP_AQF1sq0",
    ),
  ],
  [
    "actdiag",
    new Helper(
      actdiag,
      "eNpVTjkOwjAQ7P2KkXtegKChoKBGFIjCJCtrRWJLy0KQUP4eHwlHt3PtjGu0ZefxNsAgrITVFk0MTxLNJ_fOk0li5wLhcScp1oyv1GEDe0ycLVTNnz_KKWEOHkovtZd18ZR_P549KfIAcX3VqnFcGg8SbzxXLrO-6d3M5AZo_P8wmglDyEOK",
    ),
  ],
  [
    "seqdiag",
    new Helper(
      seqdiag,
      "eNorTi1MyUxMV6jmUlBIKsovL04tUlDQtVMoT00CMsuAvOicxKTUHAVbBSV31xAF_WKIBv3isnT9pMTiVDMTpVhroGaEBpD2gqL85NTi4nxk7c75eUDpEoWS1Aogka-QmZuYnoqu2UZXF6HZGslRIAm4MmuuWi4Aczo9Ww",
    ),
  ],
]);

Deno.test("[lib/encode_kroki] testBase64EncodeString", () => {
  for (const [type, test] of testSetString) {
    const actual = encode(test.input);
    assertEquals(
      actual,
      test.expect,
      `${type}- failed encoding ${test.input}, expect ${test.expect} but ${actual}`,
    );
  }
});

import { build, emptyDir } from "https://deno.land/x/dnt@0.22.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./lib/encode_kroki.ts"],
  outDir: "./npm/encode_kroki",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  typeCheck: false,
  package: {
    // package.json properties
    name: "deno_encode_kroki",
    version: Deno.args[0],
    description:
      "encode-diagram deno client/library from [Kroki](https://docs.kroki.io/kroki/)",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/arukiidou/deno_kroki.git",
    },
    bugs: {
      url: "https://github.com/arukiidou/deno_kroki/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/encode_kroki/LICENSE");
Deno.copyFileSync("README.md", "npm/encode_kroki/README.md");

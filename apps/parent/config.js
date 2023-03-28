const esbuild = require("esbuild");
const path = require("node:path");

esbuild.build({
  bundle: true,
  entryPoints: [path.resolve(__dirname, "src", "index.tsx")],
  outdir: path.resolve(__dirname, "build"),
  loader: {
    ".css": "css",
  },
  sourcemap: "inline",
});

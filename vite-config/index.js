const typescript = require("@rollup/plugin-typescript");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { sveltePreprocess } = require("svelte-preprocess/dist/autoProcess");

// @ts-ignore
const emitDeclarationTypescriptPluginOptions = typescript({
  emitDeclarationOnly: true,
  declaration: true,
  allowSyntheticDefaultImports: true,
  exclude: ["node_modules", "build", "tests", "vite.config.ts"],
  module: "esnext",
});

module.exports.emitDeclarationTypescriptPluginOptions =
  emitDeclarationTypescriptPluginOptions;
/**
 * @type {import('vite').UserConfigExport}
 */
module.exports.libConfig = {
  build: {
    outDir: "build",
    lib: {
      entry: "src/index.ts",
      name: "quadtree",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [emitDeclarationTypescriptPluginOptions],
    },
    emptyOutDir: true,
  },
};

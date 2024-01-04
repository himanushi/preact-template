import path from "path";
import { defineConfig } from "vite";
import { importToCDN } from "vite-plugin-external-cdn";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    tsconfigPaths(),
    importToCDN({
      modules: [
        {
          name: "preact",
          var: "preact",
          path: "https://cdnjs.cloudflare.com/ajax/libs/preact/10.19.3/preact.umd.min.js",
        },
        // {
        //   name: "@preact/signals",
        //   var: "preactSignals",
        //   path: "https://cdn.jsdelivr.net/npm/@preact/signals@1.2.2/dist/signals.module.min.js",
        // },
        {
          name: "preact-router",
          var: "preactRouter",
          path: "https://unpkg.com/preact-router@4.1.1/dist/preact-router.umd.js",
        },
        {
          name: "marked",
          var: "marked",
          path: "https://cdn.jsdelivr.net/npm/marked@11.1.1/lib/marked.umd.min.js",
        },
      ],
    }),
  ],
});

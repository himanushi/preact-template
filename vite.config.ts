import path from "path";
import { defineConfig } from "vite";
import { importToCDN } from "vite-plugin-external-cdn";
import { VitePWA } from "vite-plugin-pwa";
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
          path: "https://unpkg.com/preact@10.19.3/dist/preact.umd.js",
        },
        {
          name: "preact/hooks",
          var: "preactHooks",
          path: "https://unpkg.com/preact@10.19.3/hooks/dist/hooks.umd.js",
        },
        {
          name: "@preact/signals-core",
          var: "preactSignalsCore",
          path: "https://unpkg.com/@preact/signals-core@1.3.1/dist/signals-core.min.js",
        },
        {
          name: "@preact/signals",
          var: "preactSignals",
          path: "https://unpkg.com/@preact/signals@1.2.2/dist/signals.min.js",
        },
        {
          name: "preact-router",
          var: "preactRouter",
          path: "https://unpkg.com/preact-router@4.1.1/dist/preact-router.umd.js",
        },
      ],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [],
      manifest: {
        name: "App",
        short_name: "App",
        description: "App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*"],
      },
    }),
  ],
});

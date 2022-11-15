import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      common: path.resolve(__dirname, "./src/common"),
      components: path.resolve(__dirname, "./src/components"),
      config: path.resolve(__dirname, "./src/config"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});

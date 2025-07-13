import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./lib"],
  outDir: "./dist",
  dts: true,
  shims: true,
  target: "es5",
  tsconfig: "./tsconfig.build.json",
});

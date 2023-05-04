import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
      },
    ],
    external: ["react", "react-dom"],
    plugins: [nodeResolve(), typescript(), commonjs()],
  },
];

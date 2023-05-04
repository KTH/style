import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
    ],
    plugins: [typescript()],
  },
];

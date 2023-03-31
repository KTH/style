import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "style",
  globalStyle: "src/global/app.scss",
  plugins: [sass()],
  outputTargets: [
    // This is required if we intend to ship Web Components in a CDN
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },

    // This generates all Web Components separately, so they can be imported
    // without any extras.
    // Works better for importing in React Apps
    {
      type: "dist-custom-elements",
      generateTypeDeclarations: true,
      customElementsExportBehavior: "single-export-module",
    },
    reactOutputTarget({
      componentCorePackage: "@kth/style",
      customElementsDir: "dist/components",
      proxiesFile: "../style-react/lib/components/index.ts",
      includeImportCustomElements: true,
    }),
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};

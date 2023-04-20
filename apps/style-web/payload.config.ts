import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import { Examples } from "./cms/Examples";
import { Components } from "./cms/Components";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Examples, Components],
  localization: {
    locales: ["en", "sv"],
    defaultLocale: "en",
  },
  typescript: {
    outputFile: "./cms/payload-types.ts",
  },
  telemetry: false,
  debug: true,
});

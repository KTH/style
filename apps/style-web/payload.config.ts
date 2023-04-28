import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import { ComponentGuidelines } from "./cms/ComponentGuidelines";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [ComponentGuidelines],
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

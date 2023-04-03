import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import { Examples } from "./cms/Examples";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Examples],
  typescript: {
    outputFile: "./cms/payload-types.ts",
  },
});

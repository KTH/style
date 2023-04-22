/**
 * Vite configuration.
 *
 * It is only used when running or building Storybook
 * See  https://vitejs.dev/config/
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

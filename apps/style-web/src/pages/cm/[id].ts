/**
 * This file is NOT shipped in production
 *
 * Use this file to mock/proxy endpoints under "https://intra.kth.se/cm/" to
 * fetch Cortina blocks so they are available locally without CORS problems
 */
import type { APIContext } from "astro";

const CORTINA_ROOT_URL = process.env.CORTINA_ROOT_URL ?? "https://intra.kth.se";

// Set the IDs of the blocks you want to have available
const BLOCK_LIST = [
  "1.575942",
  "1.575949",
  "1.1067969",
  "1.1067508",
  "1.1069791",
  "1.1067196",
  "1.575952",
];

export async function GET({ params, request }: APIContext) {
  const blockContent = await fetch(
    `${CORTINA_ROOT_URL}/cm/${params.id}?l=en`,
  ).then((r) => r.text());

  return new Response(blockContent);
}

export function getStaticPaths() {
  return BLOCK_LIST.map((id) => ({
    params: { id },
  }));
}

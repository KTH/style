/**
 * This file is NOT shipped in production
 *
 * Mock/proxy Intranet "cm" endpoints to fetch Cortina blocks when building the
 * app so they are available statically
 */
import type { APIContext } from "astro";

export async function GET({ params, request }: APIContext) {
  const blockContent = await fetch(`https://intra.kth.se/cm/${params.id}`).then(
    (r) => r.text(),
  );

  return new Response(blockContent);
}

export function getStaticPaths() {
  return [
    { params: { id: "1.575942" } },
    { params: { id: "1.575949" } },
    { params: { id: "1.1067969" } },
    { params: { id: "1.1067196" } },
    { params: { id: "1.575952" } },
  ];
}

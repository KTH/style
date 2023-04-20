import { Component } from "@/cms/payload-types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import payload from "payload";

function renderRichText(richText: unknown) {
  return "this is rich text";
}

// TODO: Get language from user preference
const LANGUAGE = "sv";

export default function ComponentPage({ page }: { page: Component }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>{page.title}</h1>
      <h2>Syfte</h2>
      {page.purpose}
      <h2>When to use</h2>
      {renderRichText(page.whenToUse)}
      <h2>When not to use</h2>
      {renderRichText(page.whenNotToUse)}
      <h2>How to use</h2>
      {renderRichText(page.howToUse)}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const pageQuery = await payload.find({
    collection: "components",
    where: {
      id: {
        equals: slug,
      },
    },
    locale: LANGUAGE,
  });

  return {
    props: {
      page: JSON.parse(JSON.stringify(pageQuery.docs[0])),
    },
  };
};

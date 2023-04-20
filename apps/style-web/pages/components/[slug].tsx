import { Component } from "@/cms/payload-types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import payload from "payload";

// TODO: Get language from user preference
const LANGUAGE = "sv";

export default function ComponentPage({ page }: { page: Component }) {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Hello from a component {slug}</div>;
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

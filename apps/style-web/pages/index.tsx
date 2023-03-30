import { Example } from "@/cms/payload-types";
import { GetServerSideProps } from "next";
import payload from "payload";

export default function Home({ page }: { page: Example }) {
  return (
    <main>
      <h1>Hello from Next.js</h1>
      <h2>Here we have a message from the CMS</h2>
      {page.title}
      <h2>Here we have a message from the md file</h2>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pageQuery = await payload.find({
    collection: "examples",
  });

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};

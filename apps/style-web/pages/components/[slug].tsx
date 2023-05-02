import { ComponentGuideline } from "@/cms/payload-types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import payload from "payload";
import React from "react";
import { Descendant, Element, Text } from "slate";

declare module "slate" {
  interface CustomTypes {
    Element: {
      type: "h1" | "h2" | "p" | "ol" | "ul" | "li";
      children: Descendant[];
    };
    Text: {
      text: string;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      code?: boolean;
    };
  }
}

function renderRichText(richText: unknown): React.ReactNode {
  if (Array.isArray(richText)) {
    return richText.map((element, i) => (
      <React.Fragment key={i}>{renderRichText(element)}</React.Fragment>
    ));
  }

  if (Text.isText(richText)) {
    const { text, bold, italic, underline, code } = richText;

    if (bold) {
      const { bold, ...etc } = richText;
      return <strong>{renderRichText(etc)}</strong>;
    }

    if (italic) {
      const { italic, ...etc } = richText;
      return <em>{renderRichText(etc)}</em>;
    }

    if (underline) {
      const { underline, ...etc } = richText;
      return <u>{renderRichText(etc)}</u>;
    }

    if (code) {
      const { code, ...etc } = richText;
      return <code>{renderRichText(etc)}</code>;
    }

    return text;
  }

  if (Element.isElement(richText)) {
    switch (richText.type) {
      case "ul":
        return <ul>{renderRichText(richText.children)}</ul>;
      case "li":
        return <li>{renderRichText(richText.children)}</li>;
      case "h1":
        return <h3>{renderRichText(richText.children)}</h3>;
      case "h2":
        return <h4>{renderRichText(richText.children)}</h4>;
      case "ol":
        return <ol>{renderRichText(richText.children)}</ol>;
      default:
        return <p>{renderRichText(richText.children)}</p>;
    }
  }

  return <></>;
}

// TODO: Get language from user preference
const LANGUAGE = "en";

export default function ComponentPage({ page }: { page: ComponentGuideline }) {
  const router = useRouter();

  return (
    <main style={{ margin: "auto", maxWidth: "64rem", padding: "4rem" }}>
      <h1>{page.title}</h1>
      <p className="lead">{page.purpose}</p>
      <iframe
        src="/storybook/index.html?path=/story/kth-style-content-tabs--primary"
        style={{ width: "100%", aspectRatio: "16/9" }}
      ></iframe>
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
    collection: "component-guidelines",
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

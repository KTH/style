// @ts-nocheck
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import ourPlugin from "../index.js";

const input =
  "<blockquote><p>[!Note] <strong>Bla bla bla</strong></p></blockquote>";

const output = await unified()
  .use(rehypeParse, { fragment: true })
  .use(ourPlugin)
  .use(rehypeStringify)
  .process(input);

console.log(String(output));

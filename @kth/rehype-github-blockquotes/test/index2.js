// @ts-nocheck
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import ourPlugin from "../index.js";

const input = "> [!Note] Bla bla bla";

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(ourPlugin)
  .use(rehypeStringify);

const output = await processor.process(input);

console.log(String(output));

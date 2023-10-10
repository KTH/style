/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 */
import { visit, SKIP } from "unist-util-visit";

const LIST_OF_ANNOTATIONS = ["note"];
const REGEX = /\s*?\[\!(\w+)\](.*)/;

/**
 * Returns the annotation in a string and the rest of the string
 * if found. `undefined` otherwise
 *
 * @param {string} text
 * @returns {string | undefined}
 */
function detectText(text) {
  const [, innerText, outerText] = text.match(REGEX) || [];

  if (innerText && LIST_OF_ANNOTATIONS.includes(innerText.toLowerCase())) {
    return innerText.toLowerCase();
  }
}

/**
 * Gets the first element that is not an empty text
 * @param {ElementContent[]} children
 */
function firstNonEmpty(children) {
  return children.find(
    (child) => child.type !== "text" || child.value.trim() !== "",
  );
}

/**
 * Detects the annotation in a node. If found, returns its text
 * @param {ElementContent} node
 * @returns {string | undefined}
 */
function detectAnnotation(node) {
  if (node.type === "element" && node.tagName === "blockquote") {
    const paragraph = firstNonEmpty(node.children);

    if (
      paragraph &&
      paragraph.type === "element" &&
      paragraph.tagName === "p"
    ) {
      const text = firstNonEmpty(paragraph.children);

      if (text && text.type === "text") {
        return detectText(text.value);
      }
    }
  }
}

/**
 * Returns the actual title given the found annotation
 * @param {string} text
 */
function buildTitle(text) {
  if (text === "note") {
    return "Note";
  }
  return "";
}

/**
 * Transforms a text node removing the annotation from it
 * @param {string} text
 */
function transformText(text) {
  const [, innerText, outerText] = text.match(REGEX) || [];

  if (innerText) {
    return outerText;
  }

  return text;
}

/**
 * Transforms a paragraph by removing the annotation from it
 * @param {ElementContent} node
 */
function transformParagraph(node) {
  if (node.type === "element" && node.tagName === "p") {
    const firstChild = node.children[0];

    if (firstChild.type === "text") {
      firstChild.value = transformText(firstChild.value);
    }
  }

  return node;
}

/**
 * Retuns a new `div`
 * @param {string} suffix
 * @param {ElementContent[]} children
 * @returns {Element}
 */
function buildDiv(suffix, children) {
  return {
    type: "element",
    tagName: "div",
    properties: {
      class: `markdown-alert ${suffix}`,
    },
    children: [
      {
        type: "element",
        tagName: "div",
        properties: {
          class: "markdown-alert-title",
        },
        children: [
          {
            type: "text",
            value: buildTitle(suffix),
          },
        ],
      },
      {
        type: "element",
        tagName: "div",
        properties: {
          class: "markdown-alert-content",
        },
        children: children.map(transformParagraph),
      },
    ],
  };
}

/**
 * Plugin to enhance headings.
 *
 * @type {import('unified').Plugin}
 */
export default function rehypeGithubBlockquotes() {
  return (tree, file) => {
    visit(tree, (node, index, parent) => {
      if (index !== undefined && parent && node.type === "element") {
        const t = detectAnnotation(node);

        if (t) {
          const newDiv = buildDiv(t, node.children);
          parent.children.splice(index, 1, newDiv);
          return [SKIP, index];
        }
      }
    });
  };
}

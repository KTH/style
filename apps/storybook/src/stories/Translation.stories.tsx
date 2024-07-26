import { Translation } from "@kth/ui-components";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Translation/Translation",
  component: Translation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Translation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutHref: Story = {
  args: {
    panelCloseText: "Close",
    noTranslationLabel: "This page does not have any translations",
    panelHref: "/en",
    panelLinkLabel: "Start page in English",
    linkLabel: "English",
  },
};

export const WithHref: Story = {
  args: {
    panelCloseText: "Close",
    noTranslationLabel: "This page does not have any translations",
    panelHref: "/en",
    panelLinkLabel: "Start page in English",
    linkLabel: "English",
    linkHref: "/link",
  },
};

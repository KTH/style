import type { Meta, StoryObj } from "@storybook/react";
import "../../../../node_modules/@kth/style/scss/components/Button.scss";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Empty: Story = {
  args: {
    appearance: "primary",
    size: "medium",
    label: "Hello world",
  },
};

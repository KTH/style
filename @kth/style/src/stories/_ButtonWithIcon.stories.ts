import type { Meta, StoryObj } from "@storybook/react";

import { ButtonWithIcon } from "../components/XBaseButton";
import "../../scss/reset.scss";
import "../../scss/components/Button.scss";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/ButtonWithIcon",
  component: ButtonWithIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {};

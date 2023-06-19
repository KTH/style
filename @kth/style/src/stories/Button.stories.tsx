import type { Meta, StoryObj } from "@storybook/react";
import { Button, BackButton, ForwardButton } from "../components/Button";

import "../../scss/globals.scss";
import "../../scss/components/button.scss";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "Primary button",
  },
};

export const Back: StoryObj = {
  render() {
    return <BackButton>Back to Previous Step</BackButton>;
  },
};

export const Forward: StoryObj = {
  render() {
    return <ForwardButton>Preview</ForwardButton>;
  },
};

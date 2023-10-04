import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconCheck } from "../react";

import "../../scss/globals.scss";
import "../../scss/components/inline-icon.scss";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Icons",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CheckIcon: StoryObj = {
  render: () => (
    <p>
      This is a paragraph with an <IconCheck className="kth-inline-icon" /> icon
      in the middle
    </p>
  ),
};

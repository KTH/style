import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterTabs, Radio } from "../components/Radio";

import "../../scss/globals.scss";
import "../../scss/components/filter-tabs.scss";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Filter Tabs",
  component: FilterTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    value: "1",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {},
    children: [
      <Radio key="1" value="1" label="Radio 1" />,
      <Radio key="2" value="2" label="Radio 2" />,
    ],
  },
};

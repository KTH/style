import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tab, NavigationTabs } from "../components/Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Tabs",
  component: NavigationTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <Tab>Tab 1</Tab>,
  },
};

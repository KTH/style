import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TabContainer, TabList, TabPanel } from "../components/Tabs";
import "../../scss/reset.scss";

const meta = {
  title: "Test/Tabs",
  component: TabContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof TabContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShortList: Story = {
  args: {
    children: (
      <>
        <TabList
          tabs={[
            { id: "tab1", label: "Tab 1" },
            { id: "tab2", label: "Tab 2" },
          ]}
        />
        <TabPanel id="tab1">This is a tab 1</TabPanel>
        <TabPanel id="tab2">This is a tab 2</TabPanel>
      </>
    ),
  },
};

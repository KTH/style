import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TabContainer, TabList, TabPanel } from "../components/Tabs";
import "../../scss/reset.scss";
import "../../scss/components/Tabs.scss";

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
          appearance="secondary"
          size="medium"
          tabs={[
            { id: "tab1", label: "Innehåll och lärandemål" },
            { id: "tab2", label: "Förberedelser inför kursstart" },
            { id: "tab3", label: "Examination och slutförande" },
            { id: "tab4", label: "Ytterligare information" },
            { id: "tab5", label: "Kontakter" },
          ]}
        />
        <TabPanel id="tab1">This is a tab 1</TabPanel>
        <TabPanel id="tab2">This is a tab 2</TabPanel>
        <TabPanel id="tab3">This is a tab 3</TabPanel>
        <TabPanel id="tab4">This is a tab 4</TabPanel>
        <TabPanel id="tab5">This is a tab 5</TabPanel>
      </>
    ),
  },
};

export const Tertiary: Story = {
  args: {
    children: (
      <>
        <TabList
          appearance="tertiary"
          size="small"
          tabs={[
            { id: "tab1", label: "Innehåll och lärandemål" },
            { id: "tab2", label: "Förberedelser inför kursstart" },
            { id: "tab3", label: "Examination och slutförande" },
            { id: "tab4", label: "Ytterligare information" },
            { id: "tab5", label: "Kontakter" },
          ]}
        />
        <TabPanel id="tab1">This is a tab 1</TabPanel>
        <TabPanel id="tab2">This is a tab 2</TabPanel>
        <TabPanel id="tab3">This is a tab 3</TabPanel>
        <TabPanel id="tab4">This is a tab 4</TabPanel>
        <TabPanel id="tab5">This is a tab 5</TabPanel>
      </>
    ),
  },
};

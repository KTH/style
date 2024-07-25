import { Alert } from "@kth/ui-components";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Information/Alert",
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["info", "warning", "success"],
      control: "select",
    },
    headingLevel: {
      options: [2, 3, 4],
      control: "select",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {
    variant: "info",
    children: <p>Informative alert</p>,
  },
};

export const InfoWithTitle: Story = {
  args: {
    variant: "info",
    title: "H2 title",
    headingLevel: 2,
    children: <p>Informative alert</p>,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: <p>Warning alert</p>,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: <p>Success alert</p>,
  },
};

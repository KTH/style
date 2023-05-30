import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select, Option, OptionGroup } from "../components/Select";

import "../../scss/globals.scss";
import "../../scss/components/select.scss";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "KTH Style/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithDescriptions: Story = {
  args: {
    name: "example-select",
    label: "Favorite dessert",
    description:
      "Select your favorite dessert. You can choose a healthy option or a sweet one. There are many options to choose from.",
    value: "none",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {},
    children: [
      <Option value="none">Select an option</Option>,
      <Option value="ice">Ice cream</Option>,
      <Option value="tiramisu">Tiramisu</Option>,
      <Option value="cinnamon">Cinammon rolls</Option>,
      <Option value="cake">Cake</Option>,
      <Option value="sushi">Sushi</Option>,
      <Option value="chocolate">Chocolate</Option>,
      <OptionGroup label="Healty options">
        <Option value="apple">Apple</Option>
        <Option value="carrot">Carrot</Option>
        <Option value="sushi">Sushi</Option>
      </OptionGroup>,
    ],
  },
};

export const WithoutDescriptions: Story = {
  args: {
    name: "example-select",
    label: "Favorite dessert",
    value: "none",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {},
    children: [
      <Option value="none">Select an option</Option>,
      <Option value="ice">Ice cream</Option>,
      <Option value="tiramisu">Tiramisu</Option>,
      <Option value="cinnamon">Cinammon rolls</Option>,
      <Option value="cake">Cake</Option>,
      <Option value="sushi">Sushi</Option>,
      <Option value="chocolate">Chocolate</Option>,
    ],
  },
};

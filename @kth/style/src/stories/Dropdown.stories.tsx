import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, DropdownGroup } from "../components/Dropdown";
import { LinkLi } from "../components/LinkList";
import "../../scss/reset.scss";
import "../../scss/components/Button.scss";
import "../../scss/components/Dropdown.scss";

const meta = {
  title: "Test/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    id: "alla-kursrum",
    label: "Alla kursrum",
    appearance: "primary",
    size: "medium",
    children: (
      <>
        <DropdownGroup id="alla-kursrum-2023" label="2023">
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
        </DropdownGroup>
        <DropdownGroup id="alla-kursrum-2022" label="2022">
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
          <LinkLi href="#">Link 1</LinkLi>
        </DropdownGroup>
      </>
    ),
  },
};

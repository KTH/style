import React from "react";
import type { Meta } from "@storybook/react";

import { Dropdown, DropdownGroup, DropdownLink } from "../components/Dropdown";
import "../../scss/reset.scss";
import "../../scss/components/Button.scss";
import "../../scss/components/Dropdown.scss";

const meta = {
  title: "Test/Dropdown",
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Example1 = {
  render() {
    return (
      <Dropdown>
        <DropdownGroup label="2023">
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
        </DropdownGroup>
        <DropdownGroup label="2022">
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 1</DropdownLink>
        </DropdownGroup>
      </Dropdown>
    );
  },
};

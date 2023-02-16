import React from "react";
import type { Meta } from "@storybook/react";

import { Dropdown, DropdownGroup } from "../components/Dropdown";
import { LinkLi } from "../components/LinkList";
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
      <div>
        <Dropdown
          id="alla-kursrum"
          label="Alla kursrum"
          size="medium"
          appearance="primary"
        >
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
        </Dropdown>
      </div>
    );
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LinkUl, LinkLi } from "../components/LinkList";
import "../../scss/reset.scss";
import "../../scss/components/Button.scss";
import "../../scss/components/Dropdown.scss";

const meta = {
  title: "Test/LinkList",
  component: LinkUl,
  tags: ["autodocs"],
} satisfies Meta<typeof LinkUl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShortList: Story = {
  args: {
    children: (
      <>
        <LinkLi href="#">Home</LinkLi>
        <LinkLi href="#">Education</LinkLi>
        <LinkLi href="#">What is KTH</LinkLi>
        <LinkLi href="#">Architecture programme at KTH</LinkLi>
        <LinkLi href="#">Om</LinkLi>
        <LinkLi href="#">SF1624</LinkLi>
      </>
    ),
    size: "medium",
  },
};

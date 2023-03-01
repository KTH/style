import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Undervisning } from "./Undervisning";
import "../../../scss/reset.scss";

const meta = {
  title: "Patterns/KPM Undervisning",
  component: Undervisning,
} satisfies Meta<typeof Undervisning>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};

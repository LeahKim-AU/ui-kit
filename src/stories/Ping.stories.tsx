import type { Meta, StoryObj } from "@storybook/react";
import { Ping } from "./Ping";

const meta: Meta<typeof Ping> = {
  title: "Core/Ping",
  component: Ping,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Ping>;

export const Default: Story = {};

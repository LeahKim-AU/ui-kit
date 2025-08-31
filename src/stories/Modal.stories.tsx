import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

const meta: Meta<typeof Modal> = {
  title: "Core/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
          <p>이건 모달 내용이에요.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal>
      </>
    );
  },
};

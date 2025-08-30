import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Core/Input",
  component: Input,
  parameters: { layout: "centered" },
  args: {
    placeholder: "이메일을 입력하세요",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    helperText: "회사 이메일을 권장합니다.",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "이메일 형식이 올바르지 않습니다.",
    defaultValue: "abc@",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    disabled: true,
    defaultValue: "readonly_user",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

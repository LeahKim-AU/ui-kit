import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

type User = {
  name: string;
  age: number;
  email: string;
};

const columns = [
  { key: "name", label: "이름" },
  { key: "age", label: "나이" },
  { key: "email", label: "이메일" },
] as const;

const data: User[] = [
  { name: "홍길동", age: 28, email: "hong@test.com" },
  { name: "김영희", age: 24, email: "kim@test.com" },
  { name: "이철수", age: 31, email: "lee@test.com" },
];

const meta: Meta<typeof Table<User>> = {
  title: "Core/Table",
  component: Table<User>,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Table<User>>;

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};

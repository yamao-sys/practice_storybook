import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { BaseBox } from ".";

type Props = {
  children: ReactNode;
};

export default {
  title: "atoms/BaseBox/BaseBox",
  component: BaseBox,
  tags: ["autodocs"],
  args: {
    "\\tchildren": "ここにchildrenの内容が表示されます。",
  },
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof BaseBox>;

export const Default: Story = {
  render: (args: Props) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    return <BaseBox {...args} />;
  },
};

export const Title: Story = {
  args: {
    children: <div>hoge</div>
  }
}

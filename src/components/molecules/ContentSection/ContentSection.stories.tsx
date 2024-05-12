import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { ContentSection } from ".";
import { BaseBox } from "@/components/atoms/BaseBox";
import { BaseButton } from "@/components/atoms/BaseButton";

type Props = {
  children: ReactNode;
};

export default {
  title: "molecules/ContentSection/ContentSection",
  component: ContentSection,
  tags: ["autodocs"],
  args: {
    "\\tchildren": "ここにchildrenの内容が表示されます。",
  },
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof ContentSection>;

export const Default: Story = {
  render: (args: Props) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    return <ContentSection {...args} />;
  },
};

export const NormalPrimaryContent: Story = {
	args: {
    children: 
    <>
      <BaseBox>NormalPrimaryContent</BaseBox>
      <BaseButton title="ボタン" />
    </>
	},
};

export const NormalGrayContent: Story = {
	args: {
    children: 
    <>
      <BaseBox>NormalGrayContent</BaseBox>
      <BaseButton title="ボタン" backgroundColor="normalGray" />
    </>
	},
};

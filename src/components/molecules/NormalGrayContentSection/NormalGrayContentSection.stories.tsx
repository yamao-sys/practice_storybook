import { Meta, StoryObj } from "@storybook/react";
import { NormalGrayContentSection } from ".";

export default {
  title: "molecules/NormalGrayContentSection/NormalGrayContentSection",
  component: NormalGrayContentSection,
  tags: ["autodocs"],
  args: {}
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof NormalGrayContentSection>;

export const Default: Story = {
  args: {},
};

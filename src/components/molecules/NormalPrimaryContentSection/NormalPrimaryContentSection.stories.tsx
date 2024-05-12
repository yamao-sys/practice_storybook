import { Meta, StoryObj } from "@storybook/react";
import { NormalPrimaryContentSection } from ".";

export default {
  title: "molecules/NormalPrimaryContentSection/NormalPrimaryContentSection",
  component: NormalPrimaryContentSection,
  tags: ["autodocs"],
  args:{},
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof NormalPrimaryContentSection>;

export const Default: Story = {
  args: {},
};

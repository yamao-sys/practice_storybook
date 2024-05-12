import { Meta, StoryObj } from "@storybook/react";
import { BaseButton } from ".";
import { fn } from "@storybook/test";

type CssProps = {
  width?: "threeQuarters" | "quarter" | "full";
  backgroundColor?: "normalPrimary" | "normalGray";
  fontSize?: "p24" | "p16";
  hoveredBackgroundColor?: "subtlePrimary" | "subtleGray";
};
type Props = JSX.IntrinsicElements["button"] & CssProps;

export default {
  title: "atoms/BaseButton/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  args: {} as Props,
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof BaseButton>;

export const NormalPrimaryButton: Story = {
	args: {
		onClick: fn(),
		title: 'ボタン',
		width: 'threeQuarters',
		backgroundColor: 'normalPrimary',
		fontSize: 'p24',
		hoveredBackgroundColor: 'subtlePrimary',
	},
};

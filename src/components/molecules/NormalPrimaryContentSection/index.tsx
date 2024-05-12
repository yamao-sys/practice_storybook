import { BaseBox } from "@/components/atoms/BaseBox";
import { BaseButton } from "@/components/atoms/BaseButton";
import { ContentSection } from "../ContentSection";

export const NormalPrimaryContentSection = () => {
	return (
		<>
			<h1>NormalPrimary</h1>
			<ContentSection>
				<BaseBox>NormalPrimaryContent</BaseBox>
				<BaseButton title="ボタン" />
			</ContentSection>
		</>
	);
}

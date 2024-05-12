import { BaseBox } from "@/components/atoms/BaseBox";
import { BaseButton } from "@/components/atoms/BaseButton";
import { ContentSection } from "../ContentSection";

export const NormalGrayContentSection = () => {
	return (
		<>
			<h1>NormalGray</h1>
			<ContentSection>
				<BaseBox>NormalGrayContent</BaseBox>
				<BaseButton title="ボタン" backgroundColor="normalGray" />
			</ContentSection>
		</>
	);
}

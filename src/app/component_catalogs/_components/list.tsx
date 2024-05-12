'use client'

import { NormalGrayContentSection } from "@/components/molecules/NormalGrayContentSection";
import { NormalPrimaryContentSection } from "@/components/molecules/NormalPrimaryContentSection";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const List = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<NormalGrayContentSection />
				<NormalPrimaryContentSection />
			</ThemeProvider>
		</>
	);
}
export default List;

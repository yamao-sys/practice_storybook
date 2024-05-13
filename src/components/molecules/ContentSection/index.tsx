import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
	children: ReactNode;
}

export const ContentSection = ({ children }: Props) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	margin: ${({ theme }) => theme.size.p20};
`;
Wrapper.defaultProps = { theme: theme };

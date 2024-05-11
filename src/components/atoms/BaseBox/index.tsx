import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const BaseBox = ({ children }: Props) => {
	return <div style={{ width: '100%' }}>{children}</div>;
};

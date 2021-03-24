import { FC, ReactNode } from 'react';
import { MainContainer } from './styles';

interface IProps {
	id: string;
	children: ReactNode;
	className: string;
}

const Main: FC<IProps> = ({ id, children, className }) => (
	<MainContainer id={id} className={className}>
		{children}
	</MainContainer>
);

export default Main;

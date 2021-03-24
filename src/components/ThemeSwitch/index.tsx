import React from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { BsMoon, BsSun } from 'react-icons/bs';

interface IProps {
	toggleTheme(): void;
}

const ThemeSwitch: React.FC<IProps> = ({ toggleTheme }) => {
	const { title } = React.useContext(ThemeContext);
	return (
		<Container onClick={toggleTheme}>
			{title === 'dark' ? <BsSun /> : <BsMoon />}
		</Container>
	);
};

export default ThemeSwitch;

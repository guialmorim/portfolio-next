import React from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

interface IProps {
	toggleTheme(): void;
}

const ThemeSwitch: React.FC<IProps> = ({ toggleTheme }) => {
	const { title } = React.useContext(ThemeContext);
	return (
		<Container onClick={toggleTheme}>
			{title === 'dark' ? <FiSun /> : <FiMoon />}
		</Container>
	);
};

export default ThemeSwitch;

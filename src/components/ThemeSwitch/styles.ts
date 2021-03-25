import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 45px;
	height: 45px;
	top: 120px;
	left: 30px;
	font-size: 2rem;
	font-family: 'Roboto Mono', monospace !important;
	font-weight: 400 !important;
	color: ${(props) => props.theme.brand.primary};
	z-index: 1000;
	background-color: ${(props) => props.theme.bg.bgProjects};
	padding: 6px;
	border-radius: 1rem;

	svg {
		width: 100%;
		height: 100%;
		color: ${(props) => props.theme.brand.primary};
	}

	&:hover {
		opacity: 0.5;
	}
`;

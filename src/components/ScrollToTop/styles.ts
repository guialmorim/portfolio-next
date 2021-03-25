import styled from 'styled-components';

export const ScrollTop = styled.div`
	width: 45px;
	height: 45px;
	right: 5%;
	position: fixed;
	bottom: 20px;
	align-items: end;
	justify-content: end;
	z-index: 1000;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	opacity: 0.5;
	background-color: ${(props) => props.theme.bg.bgProjects};
	padding: 6px;
	border-radius: 1rem;

	svg {
		width: 100%;
		height: 100%;
		color: ${(props) => props.theme.brand.primary};
	}

	&:hover {
		opacity: 1;
	}
`;

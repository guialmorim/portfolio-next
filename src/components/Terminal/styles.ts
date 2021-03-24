import styled from 'styled-components';

export const Terminal = styled.div`
	border-radius: 0.8rem;
	overflow: hidden;
	position: relative;
	margin: 25px 0;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	width: 95%;
	@media (max-width: ${(props) => props.theme.breakpoints.md}) {
		width: 100%;
	}
`;

export const TerminalTop = styled.div`
	background: #e8e6e8;
	color: black;
	padding: 5px;
	font-size: ${(props) => props.theme.fontSize.md};
`;

export const TerminalTopButtonWrapper = styled.div`
	position: absolute;
	top: 7px;
	left: 5px;
`;

const TerminalTopButton = styled.span`
	width: 12px;
	height: 12px;
	display: inline-block;
	border-radius: 15px;
	margin-left: 2px;
	border-width: 1px;
	border-style: solid;
`;

export const TerminalTopButtonRed = styled(TerminalTopButton)`
	background: #ec6a5f;
	border-color: #d04e42;
`;

export const TerminalTopButtonYellow = styled(TerminalTopButton)`
	background: #f5c04f;
	border-color: #d6a13d;
`;

export const TerminalTopButtonGreen = styled(TerminalTopButton)`
	background: #64cc57;
	border-color: #4ea73b;
`;

export const TerminalTopTitle = styled.div`
	text-align: center;
`;

export const TerminalBody = styled.pre`
	background: black;
	color: #7afb4c;
	padding: 8px;
	overflow: auto;
	font-size: ${(props) => props.theme.fontSize.lg};
`;

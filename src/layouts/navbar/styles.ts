import styled from 'styled-components';
import { NAV_HEIGHT } from '@/src/lib/constants';

export const StyledHeader = styled.header`
	${({ theme }) => theme.mixins.flexBetween};
	position: fixed;
	top: 0;
	z-index: 1000;
	padding: 0px 50px;
	width: 100%;
	height: ${NAV_HEIGHT}px;
	background-color: ${(props) => props.theme.bg.bgProjects};
	filter: none;
	pointer-events: auto;
	user-select: auto;
	transition: ${(props) => props.theme.transitions.default};

	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		padding: 0 40px;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		padding: 0 25px;
	}
`;

export const StyledHeaderBottom = styled.header`
	${({ theme }) => theme.mixins.flexBetween};
	position: fixed;
	top: ${NAV_HEIGHT}px;
	z-index: 10;
	padding: 0px 50px;
	width: 100%;
	height: 5px;
	pointer-events: none !important;
	user-select: none !important;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.7);

	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		padding: 0 40px;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		padding: 0 25px;
	}

	background: linear-gradient(110deg, #7512cb, #e62e83, #451ea4, #ad0050);
	background-size: 600% 600%;
	-webkit-animation: AnimationName 7s ease infinite;
	-moz-animation: AnimationName 7s ease infinite;
	animation: AnimationName 7s ease infinite;

	@-webkit-keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const StyledNav = styled.nav`
	${({ theme }) => theme.mixins.flexBetween};
	position: relative;
	width: 100%;
	color: ${(props) => props.theme.text.default};
	font-family: ${(props) => props.theme.fontFamily.fontMono};
	counter-reset: item 0;
	z-index: 12;
	.logo {
		${({ theme }) => theme.mixins.flexCenter};
		cursor: pointer;
		a {
			color: ${(props) => props.theme.text.default};
			width: auto;
			font-family: 'Roboto Mono', monospace;
			font-weight: 400;
			font-size: ${(props) => props.theme.fontSize.lg};

			&:hover,
			&:focus {
				svg {
					fill: white;
				}
			}

			svg {
				fill: none;
				transition: ${(props) => props.theme.transitions.default};
				user-select: none;
			}
		}
	}
`;

export const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
	}

	ol {
		${({ theme }) => theme.mixins.flexBetween};
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin: 0 5px;
			position: relative;
			counter-increment: item 1;
			font-size: ${(props) => props.theme.fontSize.xs};

			a {
				padding: 10px;

				&:hover,
				&:focus,
				&:active {
					color: ${(props) => props.theme.brand.primary};
					outline: 0;
					&:after {
						width: 100%;
					}
					& > * {
						color: ${(props) => props.theme.brand.primary} !important;
						transition: ${(props) => props.theme.transitions.default};
					}
				}
				&:after {
					content: '';
					display: block;
					width: 0;
					height: 2px;
					position: relative;
					top: 0.2em;
					background-color: ${(props) => props.theme.brand.primary};
					transition: ${(props) => props.theme.transitions.default};
					opacity: 0.5;
				}

				&:before {
					content: '0' counter(item) '.';
					margin-right: 5px;
					color: ${(props) => props.theme.brand.primary};
					font-size: ${(props) => props.theme.fontSize.xs};
					text-align: right;
				}
			}
		}
	}

	.preview-button {
		${({ theme }) => theme.mixins.smallButton};
		display: flex;
		align-items: center;
		margin-left: 15px;
		font-size: ${(props) => props.theme.fontSize.sm};
		svg {
			margin-right: 1rem;
		}
	}
`;

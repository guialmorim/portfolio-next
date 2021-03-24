import styled, { css } from 'styled-components';
import { hexa } from '@/src/utils';
import { circleLoader } from './animations';

export const StyledMainContainer = styled.section`
	width: 100%;
	max-width: 1200px;
	counter-reset: section;
	section {
		margin: 0 auto;
		padding: 40px 0;
	}
`;

export const SectionButton = styled.div`
	${({ theme }) => theme.mixins.flexCenter};
	width: 100%;
	button {
		${({ theme }) => theme.mixins.bigButton};
		display: flex;
		align-items: center;
		svg {
			margin-right: 1rem;
		}
	}
`;

export const NumberedHeading = styled.h2`
	display: flex !important;
	align-items: center !important;
	position: relative !important;
	margin: 10px 0 40px !important;
	width: 100% !important;
	font-size: clamp(26px, 5vw, 4rem) !important;
	font-family: 'Roboto Mono', monospace !important;
	font-weight: 300 !important;
	white-space: nowrap !important;

	&:before {
		position: relative !important;
		bottom: 0px !important;
		counter-increment: section !important;
		content: '0' counter(section) '.' !important;
		margin-right: 1rem !important;
		color: ${(props) => props.theme.brand.primary}!important;
		font-family: ${(props) => props.theme.fontFamily.fontMono}!important;
		font-size: clamp(
			${(props) => props.theme.fontSize.lg},
			3vw,
			${(props) => props.theme.fontSize.xl}
		) !important;
		font-weight: ${(props) => props.theme.fontw.regular}!important;

		@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
			margin-bottom: -3px !important;
			margin-right: 5px !important;
		}
	}

	&:after {
		content: '' !important;
		display: block !important;
		width: 300px !important;
		height: 2px !important;
		position: absolute !important;
		top: 6rem !important;
		left: 0 !important;
		background-color: ${(props) => props.theme.brand.primary}!important;
		opacity: 0.5 !important;
		@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
			width: 200px !important;
		}
		@media (max-width: ${(props) => props.theme.breakpoints.md}) {
			width: 100px !important;
		}
	}

	${({ theme }) =>
		css`
			display: block;
			margin-bottom: 20px;
			color: ${theme.brand.primary};
			font-family: ${theme.fontFamily.fontMono};
			font-size: ${theme.fontSize.md};
			font-weight: 400;

			&:before {
				bottom: 0;
				font-size: ${theme.fontSize.sm};
			}

			&:after {
				display: none;
			}
		`}
`;

export const Gradient = (g1: string, g2: string) =>
	css`
		background-image: radial-gradient(
			ellipse farthest-corner at top left,
			${g1} 0%,
			${g2} 100%
		);
	`;

export const Loader = styled.div`
	${circleLoader({ time: '0.75s' })};
	position: relative;
	width: 4rem;
	height: 4rem;
	margin-left: 0;
	margin-right: 0;
	margin-top: 0;
	margin-bottom: 0;
	border: 2px solid ${(props) => props.theme.brand.primary};
	border-top-color: ${(props) => hexa(props.theme.bg.reverse, 0.2)};
	border-right-color: ${(props) => hexa(props.theme.bg.reverse, 0.2)};
	border-bottom-color: ${(props) => hexa(props.theme.bg.reverse, 0.2)};
	border-radius: 100%;
`;

export const LoaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 80vh;
	justify-content: center;
	align-items: center;
`;

export const TruncatedText = styled.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0; /* or some value */
	p,
	b {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Truncate = () => css`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	min-width: 0;
`;

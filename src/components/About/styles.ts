import styled from 'styled-components';

export const StyledAboutSection = styled.section`
	max-width: 100%;
`;

export const Container = styled.div`
	position: relative;
`;

export const StyledMarkdown = styled.div`
	font-size: ${(props) => props.theme.fontSize.md};
	text-align: center !important;

	img {
		max-width: 100%;
	}
	h1,
	h2,
	h3,
	p {
		text-align: left;
	}

	h1,
	h2,
	h3 {
		font-size: ${(props) => props.theme.fontSize.xl};
		margin: 2rem 0;
	}
	p {
		color: ${(props) => props.theme.text.accent};
		font-size: ${(props) => props.theme.fontSize.lg};
		margin: 0.5rem 0;
		a {
			font-size: ${(props) => props.theme.fontSize.lg};
		}
	}
	a {
		color: ${(props) => props.theme.text.accent};
		font-size: ${(props) => props.theme.fontSize.md};
		transition: ${(props) => props.theme.transitions.default};
		&:hover {
			color: ${(props) => props.theme.brand.primary};
		}
	}

	ul,
	ol {
		display: grid;
		grid-template-columns: 1fr;
		padding: 0;
		margin: 2rem 0;
		overflow: hidden;
		list-style: none;

		li {
			position: relative;
			margin-bottom: 2.5rem;
			padding-left: 20px;
			font-family: ${(props) => props.theme.fontFamily.fontMono};
			font-size: ${(props) => props.theme.fontSize.md};
			color: ${(props) => props.theme.text.accent};

			* {
				font-size: ${(props) => props.theme.fontSize.md};
			}
			p {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				img {
					z-index: -1;
					margin: 0.2rem;
				}
			}
		}
	}
`;

import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledMainContainer = styled.main`
	${({ theme }) => theme.mixins.flexCenter};
	min-height: calc(100vh - 70px);
	flex-direction: column;
	p {
		color: ${prop('theme.accents.a3')};
	}
`;
const StyledTitle = styled.h1`
	color: ${(props) => props.theme.brand.primary};
	font-family: ${(props) => props.theme.fontFamily.fontMono};
	font-size: clamp(100px, 25vw, 200px);
	line-height: 1;
`;
const StyledSubtitle = styled.h2`
	font-size: clamp(30px, 5vw, 50px);
	font-weight: 400;
`;
const StyledHomeButton = styled.a`
	${({ theme }) => theme.mixins.bigButton};
	margin-top: 40px;
`;

const NotFoundPage = () => {
	const router = useRouter();

	const isPreviewPath = router.pathname.includes('preview');
	const isPortfolioPath = router.pathname.includes('portfolio');
	return (
		<StyledMainContainer className="fillHeight">
			<StyledTitle>404</StyledTitle>
			<StyledSubtitle>Page Not Found</StyledSubtitle>
			{isPreviewPath && (
				<p>Please generate your portfolio before previewing it</p>
			)}
			<Link href="/">
				<StyledHomeButton>Go Home</StyledHomeButton>
			</Link>
		</StyledMainContainer>
	);
};

export default NotFoundPage;

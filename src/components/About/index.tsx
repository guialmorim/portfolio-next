import { FC, ReactNode } from 'react';
import { NumberedHeading } from '@/src/common/styles';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { StyledAboutSection, StyledMarkdown, Container } from './styles';
import { User } from '@/src/models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const About: FC<IProps> = ({ user }) => {
	return (
		<StyledAboutSection id="sobre">
			<NumberedHeading>{'sobreMim()'}</NumberedHeading>
			<Container>
				<StyledMarkdown>
					<ReactMarkdownWithHtml unwrapDisallowed allowDangerousHtml>
						{user.readme ?? 'carregando...'}
					</ReactMarkdownWithHtml>
				</StyledMarkdown>
			</Container>
		</StyledAboutSection>
	);
};

export default About;

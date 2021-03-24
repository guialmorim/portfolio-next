import { FC, ReactNode, useEffect, useState } from 'react';
import { NumberedHeading } from '@/src/common/styles';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import fetch from 'isomorphic-unfetch';
import { StyledAboutSection, StyledMarkdown, Container } from './styles';
import { User } from '@/src/models/User';
import { withTheme } from 'styled-components';

interface IProps {
	children?: ReactNode;
	user: User;
}

const About: FC<IProps> = ({ user }) => {
	return (
		<StyledAboutSection id="about">
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

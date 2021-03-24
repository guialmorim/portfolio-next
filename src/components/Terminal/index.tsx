import { FC } from 'react';
import * as Styled from '@/src/components/Terminal/styles';

const Terminal: FC = ({ children }) => {
	return (
		<Styled.Terminal>
			<Styled.TerminalTop>
				<Styled.TerminalTopButtonWrapper>
					<Styled.TerminalTopButtonRed />
					<Styled.TerminalTopButtonYellow />
					<Styled.TerminalTopButtonGreen />
				</Styled.TerminalTopButtonWrapper>
				<Styled.TerminalTopTitle>bash -- 70x32</Styled.TerminalTopTitle>
			</Styled.TerminalTop>
			<Styled.TerminalBody>{children}</Styled.TerminalBody>
		</Styled.Terminal>
	);
};

export default Terminal;

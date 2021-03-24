import { ReactNode, FC } from 'react';
import {
	StyledHeroSection,
	StyledBigTitle,
	StyledPic,
	LeftContainer,
	RightContainer,
	StyledTypedInput,
} from './styles';
import Terminal from '@/src/components/Terminal';
import Typed from 'react-typed';
import { User } from '@/src/models/User';
import { AiOutlineArrowDown } from 'react-icons/ai';

interface IProps {
	children?: ReactNode;
	user: User;
	typedWordArray: Array<string>;
}

const Hero: FC<IProps> = ({ user, typedWordArray }) => {
	return (
		<StyledHeroSection id="hero">
			<LeftContainer>
				<h1>Olá, Mundo! Eu sou</h1>
				<StyledBigTitle>Guilherme Almorim</StyledBigTitle>
				<Terminal>
					<Typed
						strings={typedWordArray}
						typeSpeed={40}
						backSpeed={50}
						attr="value"
						loop
					>
						<StyledTypedInput type="text" />
					</Typed>
				</Terminal>
				<p>{user.bio}</p>

				<a href={`mailto:${user.email}`} className="email-link">
					Conheça um pouco mais sobre mim <AiOutlineArrowDown />
				</a>
			</LeftContainer>
			<RightContainer>
				<StyledPic>
					<div className="wrapper">
						<img
							alt=""
							width={300}
							height={300}
							src={user.avatar}
							className="img"
						/>
					</div>
				</StyledPic>
			</RightContainer>
		</StyledHeroSection>
	);
};

export default Hero;

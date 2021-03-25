import { ReactNode, FC } from 'react';
import { Menu } from '@/src/components';
import {
	StyledHeader,
	StyledNav,
	StyledLinks,
	StyledHeaderBottom,
} from './styles';
import { Link } from '@/src/models/Link';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

interface IProps {
	children?: ReactNode;
	navLinks: Array<Link>;
}

const Nav: FC<IProps> = ({ navLinks }) => {
	return (
		<>
			<StyledHeader>
				<StyledNav>
					<div className="logo">
						<a className="nav-title" data-scroll href="#" aria-label="home">
							{'<Guilherme Almorim/>'}
						</a>
					</div>
					<StyledLinks>
						<ol>
							{navLinks.length > 0 &&
								navLinks.map((link, i) => (
									<li key={i}>
										<ScrollLink
											to={`${link.key}`}
											spy={true}
											smooth={true}
											duration={500}
										>
											{link.value}
										</ScrollLink>
									</li>
								))}
						</ol>
					</StyledLinks>
					<Menu navLinks={navLinks} />
				</StyledNav>
			</StyledHeader>
			<StyledHeaderBottom />
		</>
	);
};

export default Nav;

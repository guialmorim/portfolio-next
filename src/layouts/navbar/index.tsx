import { ReactNode, FC } from 'react';
import { Menu } from '@/src/components';
import {
	StyledHeader,
	StyledNav,
	StyledLinks,
	StyledHeaderBottom,
} from './styles';
import { Link } from '@/src/models/Link';

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
										<a data-scroll target="_blank" href={`#${link.key}`}>
											{link.value}
										</a>
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

/* eslint-disable prefer-destructuring */
import { useState, useEffect, useRef, ReactNode, FC } from 'react';
import { useOnClickOutside } from '@/src/hooks';
import { StyledMenu, StyledHamburgerButton, StyledSidebar } from './styles';
import { Link } from '@/src/models/Link';

interface IProps {
	children?: ReactNode;
	navLinks: Array<Link>;
}

const Menu: FC<IProps> = ({ navLinks }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const buttonRef = useRef(null);
	const navRef = useRef(null);

	useEffect(() => {
		document.body.className = menuOpen ? 'blur' : '';
	}, [menuOpen]);

	const wrapperRef = useRef();

	useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<StyledMenu>
			<div>
				<StyledHamburgerButton
					visible={true}
					onClick={toggleMenu}
					menuOpen={menuOpen}
					ref={buttonRef}
				>
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar
					menuOpen={menuOpen}
					aria-hidden={!menuOpen}
					tabIndex={menuOpen ? 1 : -1}
				>
					<nav ref={navRef}>
						{navLinks.length > 0 && (
							<ol>
								{navLinks.map((link, index) => (
									<li key={index}>
										<a onClick={(e) => {}}>{link.value}</a>
									</li>
								))}
							</ol>
						)}
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	);
};

export default Menu;

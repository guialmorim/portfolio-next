import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { ScrollTop } from './styles';

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 600) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 600) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<ScrollTop className={`${showScroll ? 'fade-in' : 'fade-out'}`}>
			<FaArrowCircleUp onClick={scrollTop} />
		</ScrollTop>
	);
};

export default ScrollArrow;

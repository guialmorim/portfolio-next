export const hexa = (
	hex: string = '',
	alpha: number = 0,
	isCssVar?: string
) => {
	let hexCopy = hex;
	try {
		if (isCssVar && typeof document !== 'undefined') {
			hexCopy = hexCopy.replace('var(', '').replace(')', '');
			hexCopy = document.documentElement.style.getPropertyValue(hexCopy);
		}
		const r = parseInt(hexCopy.slice(1, 3), 16);
		const g = parseInt(hexCopy.slice(3, 5), 16);
		const b = parseInt(hexCopy.slice(5, 7), 16);

		if (alpha >= 0) {
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		}
		return `rgb(${r}, ${g}, ${b})`;
	} catch (error) {
		return '';
	}
};

export const formatPostDate = (date: string) => {
	if (!date) return '';
	const formattedDate = new Date(date).toLocaleDateString();
	return formattedDate;
};

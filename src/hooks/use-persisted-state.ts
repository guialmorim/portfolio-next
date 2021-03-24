import React, { Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
	const [state, set] = React.useState(() => {
		const ISSERVER = typeof window === 'undefined';
		if (!ISSERVER) {
			console.log('value', initialState);
			const storageValue = localStorage.getItem(key);

			if (storageValue) {
				console.log('value', storageValue);
				return JSON.parse(storageValue);
			} else {
				return initialState;
			}
		} else {
			return initialState;
		}
	});

	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, set];
}

export default usePersistedState;

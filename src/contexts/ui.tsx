/* eslint-disable react/prop-types */
import {
	createContext,
	useCallback,
	useContext,
	useState,
	useMemo,
	FC,
} from 'react';
import { Ui } from '@/src/models/Ui';

const initialData = {
	isEditable: false,
	mainFullHeight: true,
	showNavbar: true,
	showDeployButton: false,
	showCustomizer: false,
};

export const UIContext = createContext<Ui>(initialData);

export const useUIContext = () => useContext(UIContext);

const UIContextProvider: FC = ({ children }) => {
	const [value, setValue] = useState(initialData);

	const updateValue = useCallback((next) => {
		setValue((last) => {
			const newValue = { ...last, ...next };
			return newValue;
		});
	}, []);

	const restartValues = () => setValue(initialData);

	const initialValue = useMemo(
		() => ({
			...value,
			updateValue,
			restartValues,
		}),
		[value, updateValue]
	);

	return (
		<UIContext.Provider value={initialValue}>{children}</UIContext.Provider>
	);
};

export default UIContextProvider;

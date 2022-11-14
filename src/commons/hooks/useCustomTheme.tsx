import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function useCustomTheme() {
	const { theme } = useContext(ThemeContext);
	return theme;
}

export default useCustomTheme;

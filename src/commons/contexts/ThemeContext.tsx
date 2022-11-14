import React from 'react';
import { defaultTheme } from '../../themes';
import { darkTheme } from '../../themes';

/**
 * Use React 16.3+ createContext API.
 */

// NOTE(allen) - switch this back once we properly refactor Toasts to render
// them in the existing DOM tree flow, instead of mounting a new root
// outside of whatever app root an EG consumer is using.
// const ThemeContext = React.createContext(defaultTheme);

type ThemeType = { theme: any; toggleTheme?: (any) => void };
const ThemeContext = React.createContext<ThemeType>({ theme: defaultTheme, toggleTheme: type => {} } as ThemeType);

const ThemeProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = React.useState<any>(defaultTheme);
	const toggleTheme = type => {
		if (type === 'dark') {
			setCurrentTheme(darkTheme);
		}
	};
	return <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const { Consumer: ThemeConsumer } = ThemeContext;

export { ThemeProvider, ThemeConsumer, ThemeContext };

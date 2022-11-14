import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const InternalStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	// const themingStyles = get(theme, `components.FormField`) || {};
	// const primaryTheme = themingStyles.variants.primary;

	const baseStyle = {
		width: 'auto' /* 42px */,
		height: 'auto' /* 16px */,
		fontWeight: 800,
		fontStyle: 'normal',
		fontFamily: `"Nunito Sans", sans-serif`,
		color: `#3c4850`,
		fontSize: 16,
		letterSpacing: 0,
	};
	const sizes = {};

	const variants = {
		horizontal: {
			lineHeight: 1.2,
			_disabled: {
				color: '#aab1b9',
			},
		},
		vertical: {
			lineHeight: 1.2,
			_disabled: {
				color: '#aab1b9',
			},
		},
	};
	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
				variants,
				sizes,
			}),
		[
			theme,
			{
				baseStyle,
				variants,
				sizes,
			},
		]
	);
	return styles;
};
export default InternalStyles;

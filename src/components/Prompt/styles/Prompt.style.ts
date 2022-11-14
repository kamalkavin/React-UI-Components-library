import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const GPromptStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	// const themingStyles = getThemingStyles(theme, `components.GPrompt`) || {};
	// console.log(themingStyles);
	const baseStyle = {};
	const sizes = {};
	const variants = {};
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
export default GPromptStyles;

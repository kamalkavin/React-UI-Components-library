import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { useCustomTheme } from '../../../commons';

const InternalStyles = function () {
	const theme = useCustomTheme();

	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Heading`) || {};

	const baseStyle = {
		fontFamily: themingStyles.baseStyle.fontFamily,
	};

	const variants = {
		h1: {
			fontSize: themingStyles.variants.h1.fontSize,
			lineHeight: themingStyles.variants.h1.lineHeight,
			letterSpacing: themingStyles.variants.h1.letterSpacing,
		},
		h2: {
			fontSize: themingStyles.variants.h2.fontSize,
			lineHeight: themingStyles.variants.h2.lineHeight,
			letterSpacing: themingStyles.variants.h2.letterSpacing,
		},
		h3: {
			fontSize: themingStyles.variants.h3.fontSize,
			lineHeight: themingStyles.variants.h3.lineHeight,
			letterSpacing: themingStyles.variants.h3.letterSpacing,
		},
		h4: {
			fontSize: themingStyles.variants.h4.fontSize,
			lineHeight: themingStyles.variants.h4.lineHeight,
		},
		h5: {
			fontSize: themingStyles.variants.h5.fontSize,
			lineHeight: themingStyles.variants.h5.lineHeight,
		},
		h6: {
			fontSize: themingStyles.variants.h6.fontSize,
			lineHeight: themingStyles.variants.h6.lineHeight,
		},
	};

	const sizes = {
		light: {
			fontWeight: themingStyles.sizes.light.fontWeight,
		},
		bold: {
			fontWeight: themingStyles.sizes.bold.fontWeight,
		},
	};

	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
				sizes,
				variants,
			}),
		[
			theme,
			{
				baseStyle,
				sizes,
				variants,
			},
		]
	);
	return styles;
};
export default InternalStyles;

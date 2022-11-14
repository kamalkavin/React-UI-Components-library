import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';

const InternalStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Hyperlink`) || {};

	const baseStyle = {
		width: 'auto' /* 70px */,
		height: 'auto' /* 19px */,
		whiteSpace: 'pre',
		overflow: 'visible',
		fontStyle: 'normal',
		fontFamily: 'Nunito Sans, sans-serif',
		letterSpacing: 0,
		lineHeight: 1.2,
		textDecoration: 'none',
	};
	const sizes = {};
	const variants = {
		primary: {
			_base: {
				color: themingStyles.styelVar._base.color,
				fontWeight: themingStyles.baseStyle.fontWeight,
				textDecoration: 'none',
			},
			_hover: {
				color: themingStyles.styelVar._hover.color,
				fontWeight: themingStyles.baseStyle.fontWeight,
				textDecoration: 'underline',
			},
			_active: {
				color: themingStyles.styelVar._active.color,
				fontWeight: themingStyles.baseStyle.fontWeight,
				textDecoration: 'underline',
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

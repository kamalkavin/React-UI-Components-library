import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const TextAreaStyles = function ({ themingStyles, theme }) {
	const primaryTheme = themingStyles.variants.primary;
	const baseStyle = {
		border: 'none',
		MozAppearance: 'none',
		outline: 'none',
		textDecoration: 'none',
		WebkitAppearance: 'none',
		WebkitFontSmoothing: 'antialiased',
		minHeight: 80,
		paddingX: 14,
		paddingY: 9,
		borderRadius: '6px!important',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: 400,
		fontFamily: `"Nunito Sans", sans-serif`,
		lineHeight: '1rem',
		_placeholder: {
			height: 'auto',
			flexShrink: 0,
			whiteSpace: 'pre',
			letterSpacing: 0,
		},
	};
	const sizes = {};
	const variants = {
		primary: {
			borderColor: primaryTheme.borderColor,
			boxShadow: primaryTheme.boxShadow + '!important',
			backgroundColor: primaryTheme.backgroundColor,
			color: primaryTheme.color,
			_placeholder: {
				color: primaryTheme._placeholder.color,
			},
			_errorInactivePlaceholder: {
				color: primaryTheme._errorInactivePlaceholder.color,
			},
			_errorInactive: {
				boxShadow: primaryTheme._errorInactive.boxShadow + '!important',
			},
			_errorActivePlaceholder: {
				color: primaryTheme._errorActivePlaceholder.color,
			},
			_errorActive: {
				boxShadow: primaryTheme._errorActive.boxShadow + '!important',
				border: primaryTheme._errorActive.border + '!important',
			},
			_placeholderDisabled: {
				color: primaryTheme._placeholderDisabled.color,
			},
			_disabled: {
				cursor: primaryTheme._disabled.cursor,
				color: primaryTheme._disabled.color + '!important',
				boxShadow: primaryTheme._disabled.boxShadow + '!important',
				backgroundColor: primaryTheme._disabled.backgroundColor + '!important',
			},
			_placeholderActive: {
				color: primaryTheme._placeholderActive.color,
			},
			_active: {
				boxShadow: primaryTheme._active.boxShadow + '!important',
				border: primaryTheme._active.border + '!important',
			},
		},
		transparent: {
			_placeholder: {
				color: primaryTheme._placeholder.color,
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
export default TextAreaStyles;

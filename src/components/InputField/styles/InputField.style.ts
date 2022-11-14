import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const InternalStyles = function ({ themingStyles, theme }) {
	const primaryTheme = themingStyles.variants.primary;
	const baseStyle = {
		boxSizing: 'border-box',
		width: 'auto',
		height: 36,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: '10px !important',
		paddingRight: '16px !important',
		paddingBottom: '10px !important',
		paddingLeft: '16px !important',
		borderRadius: 6,
		_placeholder: {
			width: 'auto',
			height: 'auto',
			flexShrink: 0,
			whiteSpace: 'pre',
			fontWeight: 400,
			fontStyle: 'normal',
			fontFamily: `"Nunito Sans", sans-serif`,
			fontSize: 16,
			letterSpacing: 0,
			lineHeight: 1,
		},
	};
	const sizes = {};
	const variants = {
		primary: {
			// '!Important' is used to override angular Form styles
			boxShadow: primaryTheme.boxShadow + '!important',
			borderBottomLeftRadius: '6px !important',
			borderBottomRightRadius: '6px !important',
			borderTopLeftRadius: '6px !important',
			borderTopRightRadius: '6px !important',
			border: 'transparent !important',
			color: primaryTheme.color,
			backgroundColor: primaryTheme.backgroundColor,
			fontSize: '16px',
			lineHeight: '1rem',
			outline: '0 none',
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
				color: primaryTheme._placeholderDisabled.color + '!important',
				boxShadow: primaryTheme._disabled.boxShadow + '!important',
				backgroundColor: primaryTheme.backgroundColor + '!important',
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
export default InternalStyles;

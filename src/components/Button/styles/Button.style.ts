import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { useCustomTheme } from '../../../commons';

const InternalStyles = function () {
	const theme = useCustomTheme();

	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Button`) || {};
	const primaryTheme = themingStyles.variants.primary;
	const secondaryTheme = themingStyles.variants.secondary;
	const tertiaryTheme = themingStyles.variants.tertiary;

	const baseStyle = {
		boxSizing: 'borderBox',
		boxShadow: 'inset 0px 0px 0px 0px ' + themingStyles.baseStyle.shadow,
		width: 'auto' /* 118px */,
		height: 36,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		filter: 'brightness(1)',
		overflow: 'visible',
		borderRadius: 36,
		fontSize: 16,
		// transition: '.5s ease',
		paddingLeft: 24,
		paddingRight: 24,
		cursor: 'pointer',
	};

	const variants = {
		primary: {
			backgroundColor: primaryTheme.backgroundColor,
			color: primaryTheme.color,
			border: 'none',
			fontWeight: 800,
			_disabled: {
				color: primaryTheme.disabled.color,
				cursor: 'not-allowed',
			},
			_hover: {
				filter: 'brightness(1)',
				backgroundColor: primaryTheme.hover.background,
				boxShadow: primaryTheme.hover.shadow,
				border: 'none',
				color: primaryTheme.hover.color,
			},
			_active: {
				filter: 'brightness(0.65)',
				backgroundColor: primaryTheme.active.background,
			},
			_loading: {
				backgroundColor: '#3779e5 !important',
			},
		},
		secondary: {
			backgroundColor: secondaryTheme.backgroundColor,
			color: secondaryTheme.color,
			boxShadow: 'inset 0px 0px 0px 0px ' + secondaryTheme.active.shadow,
			border: '3px solid ' + secondaryTheme.border,
			_disabled: {
				color: secondaryTheme.disabled.color,
				cursor: 'not-allowed',
			},
			_hover: {
				boxShadow: 'inset 0px 0px 0px 0px ' + secondaryTheme.hover.shadow,
				border: '3px solid ' + secondaryTheme.hover.shadow,
				color: secondaryTheme.hover.color,
				filter: 'brightness(0.98)',
			},
			_active: {
				boxShadow: secondaryTheme.active.shadow,
				border: '3px solid ' + secondaryTheme.active.border,
				filter: 'brightness(0.9)',
			},
			_hoverAndElement: {
				borderLeftWidth: 0,
			},
			_before: {
				border: '2px solid ' + secondaryTheme.before.borderColor,
				content: ' ',
				position: 'absolute',
				top: 1,
				left: 1,
				right: 1,
				bottom: 1,
				pointerEvents: 'none',
			},
		},
		tertiary: {
			backgroundColor: 'initial',
			border: 'none',
			flexShrink: 0,
			whiteSpace: 'pre',
			overflow: 'visible',
			fontWeight: 400,
			color: tertiaryTheme.color,
			fontSize: 16,
			letterSpacing: 0,
			lineHeight: 1,
			textAlign: 'left',
			_disabled: {
				color: tertiaryTheme.disabled.color,
				cursor: 'not-allowed',
			},
			_hover: {
				color: tertiaryTheme.hover.color,
				textDecoration: 'underline',
			},
			_active: {
				color: tertiaryTheme.color,
				textDecoration: 'underline',
			},
		},
	};

	const sizes = {
		small: {
			height: 28,
			minWidth: 28,
		},
		medium: {
			height: 36,
			minWidth: 36,
		},
		large: {
			height: 42,
			minWidth: 42,
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

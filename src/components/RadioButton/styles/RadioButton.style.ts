import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';

const RadioButtonStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Radio`) || {};
	const primaryTheme = themingStyles.variants.primary;

	const baseStyle = {
		border: '0',
		clip: 'rect(1px, 1px, 1px, 1px)',
		height: '1px',
		overflow: 'hidden',
		padding: '0',
		position: 'absolute',
		whiteSpace: 'nowrap',
		width: '1px',
		opacity: '0',
		display: 'none',
	};
	const sizes = {};
	const variants = {
		primary: {
			_base: {
				color: primaryTheme._base.color,
				background: primaryTheme._base.background,
				boxShadow: primaryTheme._base.boxShadow,
			},
			_disabled: {
				cursor: 'not-allowed',
				color: 'transparent',
				boxShadow: primaryTheme._disabled.boxShadow,
				opacity: 0.5,
			},
			_hover: {
				background: primaryTheme._hover.background,
				boxShadow: primaryTheme._hover.boxShadow,
			},
			_focus: {
				boxShadow: primaryTheme._focus.boxShadow,
			},
			_active: {
				background: primaryTheme._active.background,
				boxShadow: primaryTheme._active.boxShadow,
			},
			_checked: {
				color: primaryTheme._checked.color,
				background: primaryTheme._checked.background,
				boxShadow: primaryTheme._checked.boxShadow,
			},
			_checkedHover: {
				color: primaryTheme._checkedHover.color,
				background: primaryTheme._checkedHover.background,
				boxShadow: primaryTheme._checkedHover.boxShadow,
			},
			_checkedDisabled: {
				color: primaryTheme._checkedDisabled.color,
				background: primaryTheme._checkedDisabled.background,
				boxShadow: primaryTheme._checkedDisabled.boxShadow,
			},
			_checkedActive: {
				color: primaryTheme._checkedActive.color,
				background: primaryTheme._checkedActive.background,
				boxShadow: primaryTheme._checkedActive.boxShadow,
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
export default RadioButtonStyles;

import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';

const SwitchStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Switch`) || {};
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
		'& + div > svg': { display: 'none' },
	};
	const sizes = {};
	const variants = {
		primary: {
			_base: {
				color: 'white',
				backgroundColor: primaryTheme._base.backgroundColor,
			},
			_disabled: {
				cursor: 'not-allowed',
				opacity: 0.5,
				backgroundColor: primaryTheme._disabled.backgroundColor,
			},
			_hover: {
				backgroundColor: primaryTheme._hover.backgroundColor,
			},
			_focus: {
				// boxShadow: (theme) => `0 0 0 3px ${theme.colors.blue100}`,
			},
			_active: {
				backgroundColor: primaryTheme._active.backgroundColor,
			},
			_checked: {
				backgroundColor: primaryTheme._checked.backgroundColor,
				color: 'white',
			},
			_checkedHover: {
				backgroundColor: primaryTheme._checkedHover.backgroundColor,
				color: 'white',
			},
			_checkedActive: {
				backgroundColor: primaryTheme._checkedActive.backgroundColor,
				color: 'white',
			},
			_checkedDisabled: {},
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
export default SwitchStyles;

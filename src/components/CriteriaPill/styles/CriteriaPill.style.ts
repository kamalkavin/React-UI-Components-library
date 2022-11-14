import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';

const InternalStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.CriteriaPill`) || {};
	const primaryTheme = themingStyles.variants.primary;
	const criticalTheme = themingStyles.variants.critical;
	const majorTheme = themingStyles.variants.major;
	const minorTheme = themingStyles.variants.minor;
	const warningTheme = themingStyles.variants.warning;
	const infoTheme = themingStyles.variants.info;
	const validatedTheme = themingStyles.variants.validated;

	const baseStyle = {
		border: '0',
		height: '36px',
		maxWidth: '350px',
		width: 'auto',
		paddingTop: '0px',
		paddingRight: '10px',
		paddingBottom: '0px',
		paddingLeft: '10px',
		borderRadius: '4px',
		display: 'flex',
		alignItems: 'center',
		fontWeight: 400,
		fontSize: '14px',
		letterSpacing: '0px',
		lineHeight: 1.2,
	};

	const variants = {
		primary: {
			background: primaryTheme._base.background,
			_disabled: {
				color: primaryTheme._disabled.color,
				background: primaryTheme._disabled.background,
			},
		},
		critical: {
			background: criticalTheme._base.background,
			_disabled: {
				color: criticalTheme._disabled.color,
				background: criticalTheme._disabled.background,
			},
		},
		major: {
			background: majorTheme._base.background,
			_disabled: {
				color: majorTheme._disabled.color,
				background: majorTheme._disabled.background,
			},
		},
		minor: {
			background: minorTheme._base.background,
			_disabled: {
				color: minorTheme._disabled.color,
				background: minorTheme._disabled.background,
			},
		},
		warning: {
			background: warningTheme._base.background,
			_disabled: {
				color: warningTheme._disabled.color,
				background: warningTheme._disabled.background,
			},
		},
		info: {
			background: infoTheme._base.background,
			_disabled: {
				color: infoTheme._disabled.color,
				background: infoTheme._disabled.background,
			},
		},
		validated: {
			background: validatedTheme._base.background,
			_disabled: {
				color: validatedTheme._disabled.color,
				background: validatedTheme._disabled.background,
			},
		},
	};
	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
				variants,
			}),
		[
			theme,
			{
				baseStyle,
				variants,
			},
		]
	);
	return styles;
};

export default InternalStyles;

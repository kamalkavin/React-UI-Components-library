import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';

const ToasterCreateStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Toaster`) || {};
	const useStyles = createUseStyles({
		collapse: {
			width: '100%',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			paddingBottom: '0px',
			transition: '0.5s ease-out',
		},
		success_min: {
			backgroundColor: themingStyles.variants.success_min.backgroundColor,
			boxShadow: themingStyles.variants.success_min.shadow,
		},
		danger_min: {
			backgroundColor: themingStyles.variants.danger_min.backgroundColor,
			boxShadow: themingStyles.variants.danger_min.shadow,
		},
		crossButton: {
			lineHeight: '1px',
			'&:hover': {
				background: '#edf2f5',
				borderRadius: 4,
				padding: 4,
				transition: '0.1s ease-out',
			},
			'&:active': {
				background: '#a2b3be',
				color: '#ffffff',
				borderRadius: 4,
				padding: 4,
				transition: '0.1s ease-out',
			},
		},
		actionTransition: {
			display: 'none',
			animation: 'hide 0.5s linear',
			animationFillMode: 'forwards',
		},
		container: {
			bottom: 51,
			right: 16,
			position: 'fixed',
			zIndex: '9',
		},
		tosterHead: {
			flexWrap: 'wrap',
			display: 'flex',
		},
		tosterHeadTitle: {
			flexBasis: 'auto',
			width: 'auto',
			margin: '0px 5px',
		},
	});
	return useStyles();
};
const ToasterStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Toaster`) || {};
	const success = themingStyles.variants.success;
	const danger = themingStyles.variants.danger;
	const baseStyle = {
		boxSizing: 'border-box',
		width: '514px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingX: 32,
		paddingY: 24,
		overflow: 'auto',
		boxShadow: themingStyles.baseStyle.shadow,
		backgroundColor: themingStyles.baseStyle.background,
		borderRadius: 16,
		fontFamily: themingStyles.baseStyle.fontFamily,
		fontSize: 16,
	};
	const sizes = {};
	const variants = {
		success: {
			backgroundColor: success.backgroundColor,
		},
		danger: {
			backgroundColor: danger.backgroundColor,
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
export default { ToasterStyles, ToasterCreateStyles };

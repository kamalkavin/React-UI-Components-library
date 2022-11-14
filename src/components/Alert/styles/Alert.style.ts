import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';

const useStyles = createUseStyles({
	container: {
		height: '100vh',
		overflow: 'visible',
		position: 'absolute',
		background: 'rgb(39 42 46 / 65%)',
		width: '100%',
		top: 0,
		left: 0,
		zIndex: 99,
	},
	alertActionBtn: {
		margin: 'auto',
		minWidth: '106px',
		cursor: 'pointer',
	},
	alertTitleStyle: {
		width: 'auto',
		height: 'auto',
		flexShrink: 0,
		whiteSpace: 'pre',
		overflow: 'visible',
		fontWeight: 600,
		fontStyle: 'normal',
		color: `#242b30`,
		fontSize: 20,
		letterSpacing: -0.2,
		lineHeight: 1,
		textAlign: 'left',
	},
	text: {
		height: 'auto',
		width: '100%',
		whiteSpace: 'pre-wrap',
		wordWrap: 'break-word',
		wordBreak: 'break-word',
		overflow: 'hidden',
		fontWeight: 400,
		fontStyle: 'normal',
		color: '#000000',
		fontSize: 16,
		letterSpacing: 0,
		lineHeight: 1.2,
		textAlign: 'left',
	},
	close: {
		cursor: 'pointer',
		color: '#cad6dd',
	},
});

const InternalStyles = function () {
	const theme = useCustomTheme();

	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Alert`) || {};

	const baseStyle = {
		backgroundColor: themingStyles ? themingStyles.baseStyle.background : '#000',
		boxSizing: 'border-box',
		height: 'auto',
		width: 418,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingX: 32,
		paddingY: 24,
		boxShadow: themingStyles.baseStyle.shadow,
		fontFamily: themingStyles.baseStyle.fontFamily,
		overflow: 'visible',
		borderRadius: '16px',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};

	const variants = {
		info: {},
		warning: {},
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

export default { InternalStyles, useStyles };

import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useCustomTheme } from '../../../commons';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';

const UseStyles = createUseStyles({
	rnd: {
		position: 'relative !important',
		transform: 'initial !important',
		display: 'flex !important',
		flexDirection: 'column',
		maxWidth: 'calc(100vw - 225px) !important',
	},
	dialogTitle: {
		width: 'auto',
		height: 'auto',
		flexShrink: 0,
		whiteSpace: 'pre',
		fontWeight: 600,
		fontStyle: 'normal',
		display: 'flex',
		justifyContent: 'space-between',
		color: `#242b30`,
		fontSize: 20,
		letterSpacing: '-0.2px',
		lineHeight: 1,
		textAlign: 'left',
		marginBottom: 16,
	},
	description: {
		boxSizing: 'border-box',
		flexShrink: 0,
		width: '100%',
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: '0px 0px 0px 0px',
		marginBottom: 16,
		height: 'calc(100% - 110px)',
		maxHeight: 'calc(100vh - 225px)',
	},
	textStyle: {
		whiteSpace: 'pre-wrap',
		wordWrap: 'break-word',
		wordBreak: 'break-word',
		overflow: 'hidden',
		fontWeight: 400,
		fontStyle: 'normal',

		color: '#000000',
		fontSize: 16,
		letterSpacing: '0px',
		lineHeight: 1.2,
		textAlign: 'left',
	},
	descriptionWithScroll: {
		maxHeight: '300px',
		overflowY: 'auto',
		flexDirection: 'initial',
		padding: 0,
		marginTop: 16,
	},
	scrollText: {
		width: '100%',
		height: 'fit-content',
	},
	separator: {
		width: '100%',
		flexShrink: 0,
		height: 3,
		backgroundColor: '#edf2f5',
		overflow: 'visible',
		marginBottom: '19px',
	},
	footer: {
		width: '100%',
	},
	footerButtons: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexGrow: 1,
	},
});

const InternalStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Dialog`) || {};
	const primaryTheme = themingStyles.variants.primary;
	const loginTheme = themingStyles.variants.login;

	const baseStyle = {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		paddingX: '32px',
		paddingY: '24px',
		boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.15)',
		overflow: 'auto',
		borderRadius: 16,
		height: '100%',
		width: '100%',
	};
	const sizes = {};
	const variants = {
		primary: {
			backgroundColor: primaryTheme.backgroundColor,
		},
		login: {
			backgroundColor: loginTheme.backgroundColor,
		},
	};
	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
				variants,
				sizes,
			}),
		[theme, { baseStyle, variants, sizes }]
	);
	return styles;
};
export { InternalStyles, UseStyles };

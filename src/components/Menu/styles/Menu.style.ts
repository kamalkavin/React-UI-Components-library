import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';
import { getThemingStyles } from '../../../utils/utils';

const MenuSearchStyles = function () {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Menu`) || {};
	const UseStyles = createUseStyles({
		searchInput: {
			boxSizing: 'border-box',
			flexShrink: 0,
			outline: 'none !important',
			height: 36,
			backgroundColor: themingStyles.searchInput.backgroundColor,
			color: themingStyles.searchInput.color,
			overflow: 'visible',
			border: 'none !important',
			boxShadow: 'none !important',
			'&:focus': {
				border: 'none !important',
				outline: 'none !important',
				boxShadow: 'none !important',
			},
			padding: '0px 0px 5px 0px !important',
		},
		searchContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: '0px 7px 10px 7px',
			width: '100%',
		},
		searchIcon: {
			color: themingStyles.searchIcon.color,
			marginRight: '8px',
		},
	});
	return UseStyles();
};

const MenuStyles = createUseStyles((theme: any) => ({
	container: {
		background: theme.colorPrimary,
	},
	selectedIcon: {
		display: 'inline-flex !important',
		marginRight: 10,
	},
	divider: {
		marginBottom: 10,
	},
}));

const MenuContainerStyles = function (passedTheme: any) {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Menu`) || {};
	return {
		baseStyle: {
			boxSizing: 'border-box',
			width: 'auto',
			height: 'auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			boxShadow: '0px 1px 10px 0px ' + themingStyles.baseStyle.boxShadow,
			overflow: 'hidden',
			borderRadius: 8,
			paddingLeft: 14,
			paddingRight: 14,
			paddingTop: 8,
			paddingBottom: 8,
			position: 'absolute',
			zIndex: 1000,
			backgroundColor: themingStyles.baseStyle.backgroundColor,
		},
	};
};
const MenuItemStyles = function (passedTheme: any) {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Menu`) || {};
	return {
		baseStyle: {
			boxSizing: 'border-box',
			width: '100%',
			flexShrink: 0,
			height: 36,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 8,
			paddingBottom: 0,
			marginBottom: 10,
			overflow: 'visible',
			borderRadius: 4,
			color: themingStyles.menuItem.color,
			outlineColor: themingStyles.menuItem.outlineColor,
			cursor: 'pointer',
			_hover: {
				boxSizing: 'border-box',
				width: '100%',
				flexShrink: 0,
				height: 36,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: 8,
				backgroundColor: themingStyles.menuItem.hover.backgroundColor,
				overflow: 'visible',
				borderRadius: 4,
			},
			_disabled: {
				backgroundColor: `${themingStyles.menuItem.disable.backgroundColor} !important`,
				color: themingStyles.menuItem.disable.color,
				cursor: 'not-allowed',
			},
		},
	};
};

const MenuHeaderStyles = function (passedTheme: any) {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Menu`) || {};
	return {
		baseStyle: {
			width: 'auto' /* 92px */,
			flexShrink: 0,
			height: 16,
			whiteSpace: 'pre',
			overflow: 'visible',
			fontWeight: 500,
			fontStyle: 'normal',
			color: themingStyles.menuHeader.color,
			fontSize: 12,
			letterSpacing: -0.3,
			// lineHeight: 16,
			textTransform: 'uppercase',
			textAlign: 'left',
			paddingBottom: 26,
		},
	};
};

export { MenuStyles, MenuContainerStyles, MenuItemStyles, MenuHeaderStyles, MenuSearchStyles };

import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';
import { getThemingStyles } from '../../../utils/utils';

const DropdownStyles = createUseStyles((theme: any) => ({
	container: {
		background: theme.colorPrimary,
	},
}));

const DropdownContainerStyles = function () {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Dropdown`) || {};
	return {
		baseStyle: {
			zIndex: 1000,
			backgroundColor: themingStyles.baseStyle.backgroundColor,
			color: themingStyles.baseStyle.color,
		},
	};
};
const DropdownItemStyles = function () {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Dropdown`) || {};
	return {
		baseStyle: {
			boxSizing: 'border-box',
			width: '100%',
			flexShrink: 0,
			height: 36,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingBottom: '0px',
			overflow: 'visible',
			borderRadius: 4,
			color: themingStyles.baseStyle.color,
		},
	};
};

export { DropdownStyles, DropdownContainerStyles, DropdownItemStyles };

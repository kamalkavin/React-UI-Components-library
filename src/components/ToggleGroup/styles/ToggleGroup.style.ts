import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';
import { getThemingStyles } from '../../../utils/utils';

const ToggleGroupStyles = createUseStyles(function (passedTheme: any) {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.ToggleGroup`) || {};
	return {
		container: {
			background: theme.colorPrimary,
			fontSize: '16px !important',
			color: themingStyles.baseStyle.color,
		},

		active: {
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: themingStyles.baseStyle.backgroundColor,
			overflow: 'visible',
			color: themingStyles.baseStyle.color,
		},
	};
});

export default ToggleGroupStyles;

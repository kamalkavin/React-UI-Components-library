import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	customUnitClass: {
		alignSelf: 'flex-start',
		marginTop: '6px',
	},
});

const InternalStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	// const themingStyles = get(theme, `components.FormField`) || {};
	// const primaryTheme = themingStyles.variants.primary;

	const baseStyle = {
		display: 'flex',
	};
	const sizes = {};

	const variants = {
		horizontal: {
			flexDirection: 'row',
		},
		vertical: {
			flexDirection: 'column',
			height: 'auto',
			flexShrink: 0,
			width: '85%',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			backgroundColor: '#ffffff',
			overflow: 'visible',
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
export default { InternalStyles, useStyles };

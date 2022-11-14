import { useCustomTheme } from '../../../commons';
import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const InternalStyles = function () {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Tooltip`) || {};

	// Get the component style object from the theme
	const baseStyle = {
		marginTop: '2px',
		marginLeft: '2px',
		marginRight: '2px',
		marginBottom: '2px',
		borderRadius: '4px',
		boxShadow: '0px 0px 0px 3px rgba(90, 155, 255, 0.1)',
		maxWidth: '270px',
	};

	const variants = {
		text: {
			backgroundColor: themingStyles.variants.text.backgroundColor,
			color: themingStyles.variants.text.color,
		},
		infotext: {
			backgroundColor: themingStyles.variants?.infotext?.backgroundColor,
			color: themingStyles?.variants?.infotext?.color,
			borderRadius: 8,
			boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
		},
		propertyTip: {
			backgroundColor: themingStyles?.variants?.propertyTip?.backgroundColor,
			color: themingStyles?.variants?.propertyTip?.color,
			maxWidth: '340px',
			borderRadius: 8,
			boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.25)',
		},
		error: {
			backgroundColor: themingStyles.variants?.error?.backgroundColor,
			borderRadius: 8,
			color: themingStyles?.variants?.error?.color,
			paddingLeft: '8px',
			paddingRight: '8px',
			paddingTop: '4px',
			paddingBottom: '4px',
			boxShadow: 'none',
		},
		other: {
			backgroundColor: themingStyles?.variants?.other?.backgroundColor,
			color: themingStyles?.variants?.other?.color,
			paddingTop: themingStyles.variants.other.paddingTop,
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

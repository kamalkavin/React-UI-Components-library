import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

const InternalStyles = function () {
	const theme = useCustomTheme();
	const baseStyle = {
		elevation: '3',
		overflow: 'hidden',
		minWidth: '200px',
	};

	const variants = {
		primary: {
			backgroundColor: 'white',
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

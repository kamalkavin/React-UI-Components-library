import { getThemingStyles, resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';

const PillInputLayoutStyles = function () {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.PillInput`) || {};
	const UseStyles = createUseStyles({
		container: { minWidth: 180, width: 'auto' },
		multiselection: {
			boxSizing: 'border-box',
			flexShrink: 0,
			width: 'auto',
			minWidth: 180,
			height: 36,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '0px 8px 0px 5px',
			boxShadow: themingStyles.baseStyle.containerBoxShadow,
			backgroundColor: themingStyles.baseStyle.backgroundColor,
			overflow: 'hidden',
			borderRadius: 6,
		},
		row: {
			whiteSpace: 'nowrap',
			flexWrap: 'nowrap',

			boxSizing: 'border-box',
			width: 'calc(100% - 43px)',
			height: 'auto',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'left',
			alignItems: 'center',
			padding: '5px 0px 5px 2px',
			overflow: 'hidden',
		},
		placeHolder: {
			content: 'attr(data-text)',
			color: themingStyles.baseStyle.row.color,
			marginLeft: 10,
		},

		moreCount: {
			flexShrink: 0,
			minWidth: 17,
			height: 'auto',
			marginRight: 12,
			color: themingStyles.baseStyle.count.color,
		},
		pillSelection: {
			boxSizing: 'border-box',
			flexShrink: 0,
			width: 'auto',
			display: 'flex',
			height: '24px',
			flexDirection: 'row',
			justifyContent: 'left',
			alignItems: 'center',
			marginRight: '5px',
			borderRadius: 2,

			overflow: 'hidden',
		},
		chevron: {
			width: 16,
			paddingTop: 5,
			marginRight: 6,
			'&:hover': {
				cursor: 'pointer',
			},
		},
		dropdown: {
			marginTop: 1,

			width: 'auto',
			position: 'relative',
		},

		dropdownMenu: {
			width: '100%',
			padding: '16px 14px 0px 14px',
			top: 7,
		},
		DropdownToTop: {
			position: 'absolute',
			display: 'flex',
			flexDirection: 'column',
			bottom: 45,
			top: 'auto',
		},
		optionsGroup: {
			maxHeight: 250,
			overflowY: 'auto',
			width: '100%',
		},
	});
	return UseStyles();
};

const PillInputStyles = function () {
	const theme = useCustomTheme();

	const baseStyle = {};
	const sizes = {};
	const variants = {};
	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
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
export default { PillInputStyles, PillInputLayoutStyles };

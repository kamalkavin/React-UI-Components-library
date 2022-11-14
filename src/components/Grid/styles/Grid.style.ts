import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme: any) => ({
	row: {
		display: 'flex',
		flexFlow: 'row wrap',
		maxWidth: '75rem',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	expanded: { maxWidth: 'none' },
	'flex-start': { justifyContent: 'flex-start' },
	center: { justifyContent: 'center' },
	'flex-end': { justifyContent: 'flex-end' },
	'space-between': { justifyContent: 'space-between' },
	'space-around': { justifyContent: 'space-around' },
	'space-evenly': { justifyContent: 'space-evenly' },
	'align-center': { alignItems: 'center' },
	column: {
		flex: '1 1 0px',
		paddingLeft: '0.9375rem',
		paddingRight: '0.9375rem',
		boxSizing: 'border-box',
		'> row': { marginLeft: '-0.9375rem', marginRight: '-0.9375rem' },
	},
	collapse: { display: 'none' },
	'sm-1': { flex: '0 0 8.33333%', maxWidth: '8.33333%' },
	'sm-2': { flex: '0 0 16.66667%', maxWidth: '16.66667%' },
	'sm-3': { flex: '0 0 25%', maxWidth: '25%' },
	'sm-4': { flex: '0 0 33.33333%', maxWidth: '33.33333%' },
	'sm-5': { flex: '0 0 41.66667%', maxWidth: '41.66667%' },
	'sm-6': { flex: '0 0 50%', maxWidth: '50%' },
	'sm-7': { flex: '0 0 58.33333%', maxWidth: '58.33333%' },
	'sm-8': { flex: '0 0 66.66667%', maxWidth: '66.66667%' },
	'sm-9': { flex: '0 0 75%', maxWidth: '75%' },
	'sm-10': { flex: '0 0 83.33333%', maxWidth: '83.33333%' },
	'sm-11': { flex: '0 0 91.66667%', maxWidth: '91.66667%' },
	'sm-12': { flex: '0 0 100%', maxWidth: '100%' },
	// '@media screen and (min-width: 32em)': {},
	// '@media (min-width: 40em)': {
	'md-1': { flex: '0 0 8.33333%', maxWidth: '8.33333%' },
	'md-2': { flex: '0 0 16.66667%', maxWidth: '16.66667%' },
	'md-3': { flex: '0 0 25%', maxWidth: '25%' },
	'md-4': { flex: '0 0 33.33333%', maxWidth: '33.33333%' },
	'md-5': { flex: '0 0 41.66667%', maxWidth: '41.66667%' },
	'md-6': { flex: '0 0 50%', maxWidth: '50%' },
	'md-7': { flex: '0 0 58.33333%', maxWidth: '58.33333%' },
	'md-8': { flex: '0 0 66.66667%', maxWidth: '66.66667%' },
	'md-9': { flex: '0 0 75%', maxWidth: '75%' },
	'md-10': { flex: '0 0 83.33333%', maxWidth: '83.33333%' },
	'md-11': { flex: '0 0 91.66667%', maxWidth: '91.66667%' },
	'md-12': { flex: '0 0 100%', maxWidth: '100%' },
	// },
	// '@media screen and (min-width: 64em)': {
	'lg-1': { flex: '0 0 8.33333%', maxWidth: '8.33333%' },
	'lg-2': { flex: '0 0 16.66667%', maxWidth: '16.66667%' },
	'lg-3': { flex: '0 0 25%', maxWidth: '25%' },
	'lg-4': { flex: '0 0 33.33333%', maxWidth: '33.33333%' },
	'lg-5': { flex: '0 0 41.66667%', maxWidth: '41.66667%' },
	'lg-6': { flex: '0 0 50%', maxWidth: '50%' },
	'lg-7': { flex: '0 0 58.33333%', maxWidth: '58.33333%' },
	'lg-8': { flex: '0 0 66.66667%', maxWidth: '66.66667%' },
	'lg-9': { flex: '0 0 75%', maxWidth: '75%' },
	'lg-10': { flex: '0 0 83.33333%', maxWidth: '83.33333%' },
	'lg-11': { flex: '0 0 91.66667%', maxWidth: '91.66667%' },
	'lg-12': { flex: '0 0 100%', maxWidth: '100%' },
}));

export const GridStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	// const themingStyles = getThemingStyles(theme, `components.Grid`) || {};

	const baseStyle = {};
	const sizes = {};
	const variants = {};
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

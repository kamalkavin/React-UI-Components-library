import { createUseStyles } from 'react-jss';

const TagsInputStyles = createUseStyles((theme: any) => ({
	container: {
		width: '100%',
		height: 'auto',
		maxHeight: '150px',
		overflow: 'scroll',
		borderRadius: '3px ',
		boxShadow: `0px 0px 0px 3px ${theme.colors.solitude}`,
		padding: '0px 7px 6px 0px',
		display: 'flex',
		flexFlow: 'wrap',
	},
	tag: {
		boxSizing: 'border-box',
		width: 'auto',
		height: 'auto',
		background: theme.colors.pillBackground,
		borderRadius: 2,
		margin: '6px 0px 0px 7px',
		padding: '2px 2px 2px 8px',
		color: theme.colors.pillColor,
	},
	tagText: {
		color: ({ theme }: any) => `${theme.colors.pillTextColor}`,
		fontSize: '14px',
	},
	crossIcon: { padding: '4px 4px 4px 8px', height: 'auto', position: 'relative', top: '2px' },
	inputField: {
		borderBottom: 'none !important',
		margin: '6px 0px 0px 7px',
		padding: '2px !important',
		height: '26px',
	},
	widAuto: { width: 'auto' },
	widInherit: { width: 'inherit' },
	error: {
		border: `1px solid ${theme.colors.dangerRedColor}`,
		boxShadow: `0px 0px 0px 3px ${theme.colors.errorShadow}`,
	},
	errorText: {
		color: 'rgba(255, 76, 62)',
	},
}));

export default TagsInputStyles;

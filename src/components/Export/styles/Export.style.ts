import { createUseStyles } from 'react-jss';

const ExportStyles = createUseStyles((theme: any) => ({
	container: {
		background: theme.colorPrimary,
	},
	exportBtn: {
		marginLeft: '16px !important',
		margin: '0px !important',
	},
	exportIcon: { marginLeft: '8px' },
	rightArrow: {
		fontWeight: '400',
		fontSize: '16px',
		margin: '0px 10px',
	},
	disabled: {
		pointerEvents: 'none',
	},
}));

export default ExportStyles;

import { createUseStyles } from 'react-jss';

const Styles = createUseStyles((theme: any) => ({
	tableRow: {
		minWidth: '100%',
		height: '52px !important',
		backgroundColor: theme.colors.white,
		'&:hover': {
			backgroundColor: theme.colors.gigaGrey4,
		},
	},
	cellContent: {
		whiteSpace: 'nowrap',
		fontSize: '16px',
		backgroundColor: 'inherit',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		borderBottom: '1px solid #e1e8ed',
		color: '#3c4850',
		padding: '0.3rem !important',
		"& input[type='checkbox']": {
			borderRadius: '2px',
			height: '14px',
			width: '14px',
			border: `10px solid ${theme.colors.gigaGrey5}`,
		},
		'& > div': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			width: '100%',
		},
		'& button': {
			boxShadow: 'none',
			color: 'inherit',
			backgroundImage: 'none',
		},
	},
	cellContentOuter: {
		boxSizing: 'border-box',
		height: '42px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: '0px 8px 0px 16px',
		'& > div': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	},
	cellContentData: {
		flexShrink: '0',
		fontWeight: '400',
		fontStyle: 'normal',
		fontFamily: 'Nunito Sans, sans-serif',
		color: '#3c4850',
		fontSize: '16px',
		letterSpacing: '0px',
		lineHeight: '1',
		textAlign: 'left',
	},
	headerCellContent: {
		padding: '0px',
		overflow: 'visible',
		'&:last-child': {
			overflow: 'visible',
		},
	},
	menuContentData: {
		paddingLeft: `0px !important`,
	},
	selectContentData: {
		padding: '0px 8px 0px 8px !important',
	},
	headerSelectMenuContent: {
		paddingLeft: '0px !important',
	},
	tooltipMessage: {
		display: 'block',
		fontSize: '11px',
		color: '#ffffff',
		textAlign: 'left',
		padding: `5px`,
		'&:empty': {
			display: 'none',
		},
	},
}));

export default Styles;

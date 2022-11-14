import { createUseStyles } from 'react-jss';

export default createUseStyles({
	dialogFooterContainer: {
		display: 'flex',
		flexDirection: 'row-reverse',
		alignItems: 'center',
		alignContent: 'flex-end',
		'& button': {
			marginLeft: '16px',
		},
	},
	popupBodyContainer: {
		width: '100%',
		padding: '16px 0px',
		borderBottom: '3px',
		borderBottomStyle: 'solid',
		borderColor: ({ theme }: any) => theme.colors.gigaGrey1,
	},
});

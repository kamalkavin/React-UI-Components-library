import { createUseStyles } from 'react-jss';

const header = createUseStyles({
	formContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto',
		padding: '0px 16px',
		fontFamily: ({ theme }: any) => theme.fontFamilies.Nunito,
	},

	headerStack: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		alignContent: 'center',
		alignItems: 'center',
		minHeight: 56,
		borderStyle: 'solid',
		borderTopWidth: '0px',
		borderBottomWidth: '1px',
		borderLeftWidth: '0px',
		borderRightWidth: '0px',
		borderColor: ({ theme }: any) => theme.colors.solitude,
	},
	headingStack: {
		fontStyle: 'normal',
		fontSize: '18px',
		fontWeight: '700',
		color: ({ theme }: any) => theme.colors.lightSlateGrey,
		boxSizing: 'border-box',
		'flex-shrink': 0,
		width: '100%',
		height: 'auto',
		display: 'flex',
		'flex-direction': 'row',
		'justify-content': 'flex-start',
		'align-items': 'center',
		padding: '8px 16px',
		'min-height': 56,
	},

	container: {
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
});

export default header;

import { createUseStyles } from 'react-jss';

const BannerStyles = createUseStyles((theme: any) => ({
	banner: {
		border: 'none',
		margin: '8px 0px',
		fontSize: 14,
		lineHeight: 1.4,
		borderRadius: 8,
		padding: 16,
	},
	bannerPrimary: {
		backgroundColor: theme.colors.bannerBackground,
		color: theme.colors.black,
	},
	bannerDanger: {
		backgroundColor: theme.colors.dangerRedColor,
		color: theme.colors.white,
		padding: '16px',
	},
	bannerContainer: {
		width: 'auto',
		justifyContent: 'space-between',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
	},
	bannerLeft: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
	},
	bannerRight: {
		display: 'inline-flex',
		cursor: 'pointer',
		justifyContent: 'center',
		marginLeft: 16,
	},
	bannerBody: {
		width: 'auto',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: 400,
		margin: '0px 16px',
	},
	crossIcon: {
		verticalAlign: 'middle',
		display: 'flex',
		width: '16px',
		height: '16px',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '1px',
	},
}));

export default BannerStyles;

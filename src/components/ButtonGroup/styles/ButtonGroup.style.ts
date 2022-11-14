import { createUseStyles } from 'react-jss';

const ButtonGroupStyles = createUseStyles((theme: any) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	container: {
		background: theme.colorPrimary,
	},
}));

export default ButtonGroupStyles;

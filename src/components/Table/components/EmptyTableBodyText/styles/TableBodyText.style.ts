import { createUseStyles } from 'react-jss';

const Styles = createUseStyles((theme: any) => ({
	emptyTable: {
		position: 'absolute',
		top: '45%',
		opacity: '0.75',
		fontSize: '1.5em',
		width: '100%',
		textAlign: 'center',
		zIndex: '1',
	},
}));

export default Styles;

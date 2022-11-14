import { createUseStyles } from 'react-jss';

const TooltipStatelessStyles = createUseStyles((theme: any) => ({
	infoBoxStack: {
		padding: '10px 16px',
		margin: '-1px',
		maxWidth: '270px',
		fontSize: '14px',
		fontWeight: 400,
	},
}));

export default TooltipStatelessStyles;

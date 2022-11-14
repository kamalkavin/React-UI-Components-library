import { createUseStyles } from 'react-jss';

const PopoverStyles = createUseStyles({
	popover_container: {
		boxSizing: 'border-box',
		width: 350,
		padding: '24px 24px 16px 24px',
		boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.15)',
		backgroundColor: 'var(--token-11c09ce9-d9c1-41c9-a8fc-03f14209f320, #ffffff)',
		border: 'transparent !important',
		borderRadius: 16,
	},
});

export default PopoverStyles;

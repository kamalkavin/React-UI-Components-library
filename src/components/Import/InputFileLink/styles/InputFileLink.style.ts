import { createUseStyles } from 'react-jss';

const InputFileLinkStyle = createUseStyles((theme: any) => ({
	link: {
		color: theme.colors.allPorts,
		textDecoration: 'none',
		cursor: 'pointer',
		'&:hover': {
			color: theme.colors.hyperLinkHover,
			textDecoration: 'underline',
		},
		'&:active': {
			color: theme.colors.allPorts,
			textDecoration: 'underline',
		},
		paddingLeft: '5px',
	},
}));

export default InputFileLinkStyle;

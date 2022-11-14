import variables from '../tokens';

const baseStyle = {
	color: `${variables.colors.dark}`,
	fontFamily: `${variables.fontFamilies.Nunito}`,
};

const sizes = {
	light: {
		fontWeight: 300,
	},
	bold: {
		fontWeight: 600,
	},
};

const variants = {
	h1: {
		fontSize: '42px',
		lineHeight: 1.2,
		fontWeight: 400,
		letterSpacing: '-1px',
	},
	h2: {
		fontSize: '36px',
		lineHeight: 1.17,
		fontWeight: 400,
		letterSpacing: '-0.75px',
	},
	h3: {
		fontSize: '32px',
		lineHeight: 1.13,
		fontWeight: 200,
		letterSpacing: '-0.5px',
	},
	h4: {
		fontSize: '28px',
		lineHeight: 1.07,
	},
	h5: {
		fontSize: '24px',
		lineHeight: 1.25,
	},
	h6: {
		fontSize: '24px',
		lineHeight: 1.25,
		fontWeight: 400,
	},
};

export default {
	baseStyle,
	variants,
	sizes,
};

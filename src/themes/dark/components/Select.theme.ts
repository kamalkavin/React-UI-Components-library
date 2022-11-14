import variables from '../tokens';

const baseStyle = {
	fontFamily: `${variables.fontFamilies.Nunito}`,
};

const sizes = {
	small: {
		height: 24,
		fontSize: '12px',
		lineHeight: 1.07,
	},
	medium: {
		height: 32,
		fontSize: '12px',
		lineHeight: 1.07,
	},
	large: {
		height: 40,
		fontSize: '14px',
		lineHeight: 1.17,
	},
};

const variants = {
	primary: {
		backgroundColor: 'white',
		border: `1px solid #E6E8F0`,
		color: '#474d66',

		_disabled: {
			cursor: 'not-allowed',
			color: '#c1c4d6',
			borderColor: '#E6E8F0',
		},

		_hover: {
			borderColor: '#8f95b2',
			backgroundColor: '#FAFBFF',
		},

		_focus: {
			boxShadow: 'shadows.focusRing',
		},

		_active: {
			backgroundColor: '#F4F5F9',
		},
	},
};

export default {
	baseStyle,
	variants,
	sizes,
};

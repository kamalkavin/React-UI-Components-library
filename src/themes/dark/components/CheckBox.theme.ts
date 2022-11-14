// import tokens from '../tokens';
const baseStyle = {};

const variants = {
	primary: {
		_base: {
			color: 'transparent',
			background: '#cad6dd',
		},
		_disabled: {
			cursor: 'not-allowed',
			background: '#e2e5e7',
		},
		_hover: {
			// boxShadow: (theme) => `inset 0 0 0 1px ${tokens.colorScales.gray600}`,
		},
		_focus: {
			// boxShadow: (theme) => `0 0 0 2px ${tokens.colorScales.blue100}`,
		},
		_active: {
			background: '#F4F5F9',
		},
		_checked: {
			color: 'white',
			background: 'rgb(55, 121, 229)',
		},
		_checkedHover: {
			color: 'white',
			background: '#3779e5',
		},
		_checkedActive: {
			color: 'white',
		},
		_checkedDisabled: {
			color: 'white',
			background: '#3779e5',
		},
	},
};
const sizes = {};

export default {
	baseStyle,
	variants,
	sizes,
};

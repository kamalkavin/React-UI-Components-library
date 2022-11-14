const baseStyle = {};

const variants = {
	primary: {
		_base: {
			color: 'white',
			backgroundColor: '#cad6dd',
		},
		_disabled: {
			cursor: 'not-allowed',
			opacity: 0.5,
			backgroundColor: '#e0e4e8',
		},
		_hover: {
			backgroundColor: 'colors.gray500',
		},
		_focus: {
			// boxShadow: (theme) => `0 0 0 3px ${theme.colors.blue100}`,
		},
		_active: {
			backgroundColor: 'rgb(55, 121, 229)',
		},
		_checked: {
			backgroundColor: 'rgb(55, 121, 229)',
			color: 'white',
		},
		_checkedHover: {
			backgroundColor: 'rgb(55, 121, 229)',
			color: 'white',
		},
		_checkedActive: {
			backgroundColor: 'rgb(55, 121, 229)',
			color: 'white',
		},
		_checkedDisabled: {},
	},
};

const sizes = {};

export default {
	baseStyle,
	variants,
	sizes,
};

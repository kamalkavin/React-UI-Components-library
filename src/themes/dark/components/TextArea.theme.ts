const baseStyle = {};
const variants = {
	primary: {
		borderColor: 'transparent',
		boxShadow: '0px 0px 0px 3px #edf2f5',
		backgroundColor: '#ffffff',
		_placeholder: {
			color: '#a2b3be',
		},
		_errorInactivePlaceholder: {
			color: 'rgba(168, 51, 44, 0.4)',
		},
		_errorInactive: {
			boxShadow: '0px 0px 0px 3px rgba(255, 76, 62, 0.1)',
		},
		_errorActivePlaceholder: {
			color: 'rgba(168, 51, 44, 0.4)',
		},
		_errorActive: {
			border: `1px solid #ff4c3e`,
			boxShadow: '0px 0px 0px 3px rgba(255, 76, 62, 0.1)',
		},
		_placeholderDisabled: {
			color: '#bbc2c9',
		},
		_disabled: {
			cursor: 'not-allowed',
		},
		_placeholderActive: {
			color: '#3c4850',
		},
		_active: {
			boxShadow: '0px 0px 0px 3px #e1e8ed',
			border: '1px solid #3779e5',
		},
	},
};
const sizes = {};
export default {
	baseStyle,
	variants,
	sizes,
};

const baseStyle = {};
const variants = {
	primary: {
		borderColor: 'transparent',
		boxShadow: '0px 0px 0px 3px #e1e8ed',
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
			color: 'rgba(168, 51, 44, 0.3)',
		},
		_placeholderDisabled: {
			color: '#bbc2c9',
		},
		_disabled: {
			cursor: 'not-allowed',
			boxShadow: '0px 0px 0px 3px  #edf2f5',
		},
		_placeholderActive: {
			color: '#3c4850',
		},
		_active: {
			boxShadow: '0px 0px 0px 3px rgba(90, 155, 255, 0.1)',
			border: '1px solid #3779e5',
		},
	},
	transparent: {
		border: 'none',
		boxShadow: 'none',
		_placeholder: {
			color: '#8a919a',
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
			color: '#8a919a',
		},
		_active: {
			boxShadow: 'none',
			border: 'none',
		},
	}
};
const sizes = {};
export default {
	baseStyle,
	variants,
	sizes,
};

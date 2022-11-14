const baseStyle = {
	shadow: 'rgba(0, 0, 0, 0.1)',
};

const variants = {
	primary: {
		backgroundColor: '#edf2f5',
		color: '#3c4850',
		disabled: {
			color: '#b5c4cd',
		},
		hover: {
			background: '#3779e5',
			shadow: 'rgba(0, 0, 0, 0.15)',
			color: '#fff',
		},
		active: {
			background: '#3779e5',
		},
	},
	secondary: {
		backgroundColor: 'initial',
		color: '#3c4850',
		border: '#edf2f5',
		disabled: {
			color: '#b5c4cd',
		},
		hover: {
			background: 'initial',
			shadow: '#edf2f5',
			border: ' #d5dfe5',
			color: '#3c4850',
		},
		active: {
			shadow: '#edf2f5',
			border: '#edf2f5',
		},
		before: {
			borderColor: '#fff',
		},
	},

	tertiary: {
		color: '#136b91',
		hover: {
			color: '#2b9cdd',
		},
		disabled: {
			color: '#b5c4cd',
		},
	},
};

export default {
	baseStyle,
	variants,
};

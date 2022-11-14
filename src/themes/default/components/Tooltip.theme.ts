const baseStyle = {
	// shadow: 'rgba(0, 0, 0, 0.1)',
};

const variants = {
	text: {
		backgroundColor: 'black',
		color: 'white',
	},
	infotext: {
		backgroundColor: '#3c4850',
		color: '#f9fbfc',
	},
	propertyTip: {
		backgroundColor: 'white',
		color: 'black',
		paddingTop: '5px',
	},
	error: {
		backgroundColor: '#ff4c3e',
		color: '#ffffff',
	},
	other: {
		backgroundColor: 'white',
		color: 'black',
		paddingTop: '5px',
	},
};

const tooltipArrow = {
	before: {
		border: '10px solid transparent',
		text: {
			borderColor: 'transparent',
		},
		infotext: {
			borderColor: {
				bottom: '#3c4850',
				top: '#3c4850',
				right: '#3c4850',
				left: '#3c4850',
			},
		},
		propertyTip: {
			borderColor: {
				bottom: 'transparent transparent white transparent',
				top: 'white transparent transparent transparent',
				right: 'transparent white transparent transparent',
				left: 'transparent transparent transparent white',
			},
		},
		error: {
			borderColor: {
				bottom: '#ff4c3e',
				top: '#ff4c3e',
				right: '#ff4c3e',
				left: '#ff4c3e',
			},
		},
		other: {
			borderColor: {
				bottom: 'transparent transparent white transparent',
				top: 'white transparent transparent transparent',
				right: 'transparent white transparent transparent',
				left: 'transparent transparent transparent white',
			},
		},
	},
	after: {
		border: '9px solid transparent',
		text: {
			borderColor: 'transparent',
		},
		infotext: {
			borderColor: {
				bottom: '#3c4850',
				top: '#3c4850',
				right: '#3c4850',
				left: '#3c4850',
			},
		},
		propertyTip: {
			borderColor: {
				bottom: 'transparent transparent white transparent',
				top: 'white transparent transparent transparent',
				right: 'transparent white transparent transparent',
				left: 'transparent transparent transparent white',
			},
		},
		error: {
			borderColor: {
				bottom: '#ff4c3e',
				top: '#ff4c3e',
				right: '#ff4c3e',
				left: '#ff4c3e',
			},
		},
		other: {
			borderColor: {
				bottom: 'transparent transparent black transparent',
				top: 'black transparent transparent transparent',
				right: 'transparent black transparent transparent',
				left: 'transparent transparent transparent black',
			},
		},
	},
	// border: 'transparent',
	// text: {
	// 	borderColor: 'transparent',
	// },
	// other: {
	// 	borderColor: {
	// 		bottom: 'transparent transparent black transparent',
	// 		top: 'black transparent transparent transparent',
	// 		right: 'transparent black transparent transparent',
	// 		left: 'transparent transparent transparent black',
	// 	},
	// },
};

export default {
	baseStyle,
	variants,
	tooltipArrow,
};

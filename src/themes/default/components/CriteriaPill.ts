// import tokens from '../tokens';
const baseStyle = {};

const variants = {
	primary: {
		_base: {
			color: '#1e3c75',
			background: `rgba(182, 207, 252, 0.4)`,
			filterBackGround: '#ffffff',
		},
		_disabled: {
			color: 'rgba(31, 60, 117, 0.74)',
			background: 'rgba(182, 207, 252, 0.15)',
		}
	},
	critical: {
		_base: {
			color: '#A8332C',
			background: 'rgba(255, 188, 182, 0.4)',
		},
		_disabled: {
			color: 'rgba(168, 51, 44, 0.6)',
			background: 'rgba(255, 188, 182, 0.15)',
		}
	},
	major: {
		_base: {
			color: '#B83700',
			background: 'rgba(255, 194, 167, 0.4)',
		},
		_disabled: {
			color: 'rgba(165, 64, 19, 0.6)',
			background: 'rgba(255, 194, 167, 0.15)',
		}
	},
	minor: {
		_base: {
			color: '#964400',
			background: 'rgba(255, 199, 155, 0.4)',
		},
		_disabled: {
			color: 'rgba(150, 68, 0, 0.6)',
			background: 'rgba(255, 199, 155, 0.15)',
		}
	},
	warning: {
		_base: {
			color: '#705600',
			background: 'rgba(251, 238, 201, 0.6)',
		},
		_disabled: {
			color: 'rgba(160, 124, 4, 0.7)',
			background: 'rgba(251, 238, 201, 0.25)',
		}
	},
	info: {
		_base: {
			color: '#314893',
			background: 'rgba(182, 207, 252, 0.4)',
		},
		_disabled: {
			color: 'rgba(31, 60, 117, 0.6)',
			background: 'rgba(182, 207, 252, 0.15)',
		}
	},
	validated: {
		_base: {
			color: '#145B3E',
			background: 'rgba(174, 211, 197, 0.3)',
		},
		_disabled: {
			color: 'rgba(20, 91, 62, 0.6)',
			background: 'rgba(174, 211, 197, 0.1)',
		}
	}

};
const sizes = {};

export default {
	baseStyle,
	variants,
	sizes,
};

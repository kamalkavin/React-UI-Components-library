// import tokens from '../tokens';
const baseStyle = {};

const variants = {
	primary: {
		_base: {
			color: 'transparent',
			background: 'rgb(205, 211, 216)',
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
			background: `#F4F5F9`,
		},
		_checked: {
			color: 'white',
			background: `rgb(55, 121, 229)`,
		},
		_checkedHover: {
			color: 'white',
			background: `#2952CC`,
		},
		_checkedActive: {
			color: 'white',
			background: `#1F3D99`,
		},
		_checkedDisabled: {
			color: 'white',
			// background: '#94b4eb',
			opacity: 0.5
		},
	},
};
const sizes = {};

export default {
	baseStyle,
	variants,
	sizes,
};

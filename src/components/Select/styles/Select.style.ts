import { useCustomTheme } from '../../../commons';
import { resolveThemeTokens } from '../../../utils/utils';
import { useMemo } from 'react';

export const colourStyles = {
	container: (styles) => ({
		...styles,
		width: '100%',
	}),
	control: (styles, { data, isDisabled, selectProps }) => ({
		...styles,
		backgroundColor: 'white',
		borderColor: selectProps?.error ? '#ff4c3e' : 'transparent',
		boxShadow: selectProps?.error
			? '0px 0px 0px 3px #ffeeec'
			: !isDisabled
			? '0px 0px 0px 3px #e1e8ed'
			: '0px 0px 0px 3px #edf2f5',
		color: '#a2b3be',
		fontSize: '16px',
		minWidth: '150px',
		borderRadius: '6px',
		':hover': {
			borderColor: selectProps?.error ? '#ff4c3e' : 'transparent',
		},
		pointerEvents: 'auto',
		cursor: !isDisabled ? 'default' : 'not-allowed',
	}),
	valueContainer: (styles) => ({
		...styles,
		paddingLeft: '3px',
		paddingRight: '3px',
		maxHeight: '100px',
		overflow: 'auto',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected, isMulti }) => {
		return {
			...styles,
			fontSize: '16px',
			padding: '6px 8px 6px 8px',
			marginTop: 4,
			marginBottom: 4,
			left: '6px',
			zIndex: '2',
			borderRadius: '4px',
			backgroundColor: isDisabled ? undefined : isSelected && !isMulti ? '#3779e5' : undefined,
			cursor: isDisabled ? 'not-allowed' : 'default',
			pointerEvents: 'auto',
			color: isDisabled ? '#ccc' : isSelected && !isMulti ? 'white' : '#3c4850',

			':hover': {
				color: '#3c4850',
				backgroundColor: 'rgba(90, 155, 255, 0.1)',
			},
			':active': {
				...styles[':active'],
				color: '#000000',
				backgroundColor: !isDisabled ? (isSelected ? data.color : 'white') : undefined,
			},
			input: (styles) => ({
				...styles,
				input: {
					width: 'auto',
				},
			}),
			placeholder: (styles) => ({ ...styles, fontSize: '14px' }),
			singleValue: (styles, { data }) => ({ ...styles }),
			multiValue: (styles, { data }) => {
				return {
					...styles,
					paddingLeft: '8px',
					backgroundColor: '#b6cffc66',
				};
			},
		};
	},
	input: (styles, { isDisabled }) => ({
		...styles,
		margin: '0px',
		marginLeft: '12px',
		input: {
			width: 'auto',
			cursor: isDisabled ? 'not-allowed' : 'default',
		},
	}),
	placeholder: (styles, { isDisabled, selectProps }) => ({
		...styles,
		fontSize: '16px',
		paddingLeft: '10px',
		color: selectProps?.error ? 'rgba(168, 51, 44, 0.4)' : !isDisabled ? '#aab1b9' : '#aab1b9',
	}),
	multiValue: (styles, { data }) => {
		return {
			...styles,
			margin: '3px',
			backgroundColor: '#b6cffc66',
		};
	},
	singleValue: (styles, { data }) => ({
		...styles,
		paddingLeft: 10,
	}),
	multiValueLabel: (styles, { data, isDisabled }) => ({
		...styles,
		color: '#1f3c75',
		fontSize: 14,
		paddingLeft: 8,
		paddingRight: !isDisabled ? 'unset' : 8,
	}),
	indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
	dropdownIndicator: (styles, { isDisabled }) => ({
		...styles,
		color: isDisabled ? '#ccc' : '#000000',
		':hover': {
			color: null,
		},
	}),
	menuList: (styles) => ({
		...styles,
		paddingLeft: '8px',
		paddingRight: '8px',
		paddingTop: '4px',
		paddingBottom: '4px',
	}),
	menu: (provided, state) => ({
		...provided,
		borderRadius: '8px',
		boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.25)',
		zIndex: 2,
	}),

	multiValueRemove: (styles, { data }) => ({
		...styles,
		color: '#1f3c75',
		padding: '4px 6px 4px 4px',
		':hover': {
			backgroundColor: null,
			color: null,
		},
	}),
};

const SelectStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	// const themingStyles = getThemingStyles(theme, `components.Select`) || {};

	// console.log(themingStyles, 'getThemingStyles SelectStyles');

	const baseStyle = {
		minWidth: '150px',
		boxSizing: 'border-box',
		width: 'auto' /* 157px */,
		height: 36,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: '6px',
	};
	const sizes = {};
	const variants = {};
	const styles = useMemo(
		() =>
			resolveThemeTokens(theme, {
				baseStyle,
				variants,
				sizes,
			}),
		[
			theme,
			{
				baseStyle,
				variants,
				sizes,
			},
		]
	);
	return styles;
};
export default SelectStyles;

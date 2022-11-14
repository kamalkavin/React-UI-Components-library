/**
 *
 * RadioButton component
 *
 */

import React, { memo, forwardRef, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import Label from '../Typography/Label';
import useInternalStyles from './styles/RadioButton.style';

interface CircleIconProps {
	fill?: string;
	size?: number;
}
const CircleIcon = memo(({ fill = 'currentColor', size, ...props }: CircleIconProps) => {
	return (
		<svg width={size} height={size} viewBox='0 0 10 10' {...props}>
			<circle fill={fill} cx='5' cy='5' r='5' />
		</svg>
	);
});

const noop = () => {};

const pseudoSelectors = {
	_base: '& + div',
	_disabled: '&[disabled] + div',
	_hover: '&:not([disabled]):hover + div',
	_focus: '&:not([disabled]):focus + div',
	_active: '&:not([disabled]):active + div',
	_checked: '&:checked + div, &[type=checkbox]:indeterminate + div',
	_checkedHover: '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div',
	_checkedActive:
		'&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div',
	_checkedDisabled: '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div',
};

export interface RadioButtonProps extends BoxProps<any> {
	id: string;
	name: string;
	label?: string;
	labelPosition?: 'left' | 'right';
	disabled?: boolean;
	isInvalid?: boolean;
	checked?: boolean;
	onChange?: () => void;
	value?: string;
	size?: 'large' | 'default';
	isRequired?: boolean;
	variant?: string;
	register?: any;
	rules?: any;
	labelPositionSize?: 'normal' | 'bold';
}

const RadioButton: FC<RadioButtonProps> = memo(
	forwardRef(function RadioButton(
		{
			id,
			name,
			label,
			labelPosition = 'left',
			disabled,
			isInvalid = false,
			checked,
			onChange = noop,
			value,
			size = 'default',
			isRequired = false,
			variant = 'primary',
			labelPositionSize = 'normal',
			...rest
		}: RadioButtonProps,
		ref
	) {
		let internalStyles = useInternalStyles();

		const radioSize: number = size === 'default' ? 16 : 20;

		const pseudeoBaseStyles = {
			[pseudoSelectors._base]: {
				WebkitFontSmoothing: 'antialiased',
				textDecoration: 'none',
				WebkitAppearance: 'none',
				MozAppearance: 'none',
				border: 'none',
				outline: 'none',
				cursor: 'pointer',
			},
		};
		internalStyles = { ...internalStyles, pseudeoBaseStyles };

		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box display='flex' alignItems='center'>
				{labelPosition === 'left' && label && (
					<Label
						marginRight={radioSize === 12 ? 8 : 10}
						size={radioSize === 12 ? 300 : 400}
						fontSize={16}
						fontWeight={800}
						color={disabled ? 'muted' : 'default'}
						data-cy={`${name}-label`}
						forId={id}>
						{label}
					</Label>
				)}
				<Box
					is='label'
					ref={ref}
					cursor={disabled ? 'not-allowed' : 'pointer'}
					position='relative'
					display='flex'
					data-cy={name}
					marginY={radioSize === 12 ? 8 : 12}
					{...rest}>
					<Box
						is='input'
						className={themedClassName}
						id={id}
						type='radio'
						name={name}
						value={value}
						checked={checked}
						onChange={onChange}
						disabled={disabled}
						aria-invalid={isInvalid}
						{...boxProps}
						required={isRequired}
						ref={rest.register && rest.register(rest.rules)}
					/>
					<Box
						boxSizing='border-box'
						borderRadius={9999}
						display='flex'
						flex='none'
						alignItems='center'
						justifyContent='center'
						marginTop={2}
						width={20}
						height={20}>
						<CircleIcon size={10} />
					</Box>
					{/* {label && (
					<Span
						marginLeft={size === 12 ? 8 : 10}
						size={size === 12 ? 300 : 400}
						color={disabled ? 'muted' : 'default'}>
						{label}
					</Span>
				)} */}
				</Box>
				{labelPosition === 'right' && label && labelPositionSize === 'bold' && (
					<Label
						marginLeft={radioSize === 12 ? 8 : 10}
						size={radioSize === 12 ? 300 : 400}
						fontSize={16}
						fontWeight={800}
						color={disabled ? 'muted' : 'default'}
						data-cy={`${name}-label`}
						forId={id}>
						{label}
					</Label>
				)}
				{labelPosition === 'right' && label && labelPositionSize === 'normal' && (
					<Label
						marginLeft={radioSize === 12 ? 8 : 10}
						size={radioSize === 12 ? 300 : 400}
						color={disabled ? 'muted' : 'default'}
						data-cy={`${name}-label`}
						forId={id}>
						{label}
					</Label>
				)}
			</Box>
		);
	})
);

// Radio.propTypes = {
// 	/**
// 	 * Composes some Box APIs.
// 	 */
// 	...spacing.propTypes,
// 	...position.propTypes,
// 	...layout.propTypes,
// 	...dimensions.propTypes,

// 	/**
// 	 * The id attribute of the radio.
// 	 */
// 	id: PropTypes.string,

// 	/**
// 	 * The name attribute of the radio.
// 	 */
// 	name: PropTypes.string,

// 	/**
// 	 * Label of the radio.
// 	 */
// 	label: PropTypes.node,

// 	/**
// 	 * The value attribute of the radio.
// 	 */
// 	value: PropTypes.string,

// 	/**
// 	 * Function called when state changes
// 	 * Signature:
// 	 * ```
// 	 * function(event: object, checked: boolean) => void
// 	 * ```
// 	 */
// 	onChange: PropTypes.func,

// 	/**
// 	 * When true, the radio is disabled.
// 	 */
// 	disabled: PropTypes.bool,

// 	/**
// 	 * When true, the radio is checked.
// 	 */
// 	checked: PropTypes.bool,

// 	/**
// 	 * The size of the radio circle. This also informs the text size and spacing.
// 	 */
// 	size: PropTypes.oneOf([12, 16]),

// 	/**
// 	 * When true, the radio get the required attribute.
// 	 */
// 	isRequired: PropTypes.bool,

// 	/**
// 	 * When true, the aria-invalid attribute is true.
// 	 * Used for accessibility.
// 	 */
// 	isInvalid: PropTypes.bool,

// 	/**
// 	 * The appearance of the checkbox.
// 	 * The default theme only comes with a default style.
// 	 */
// 	appearance: PropTypes.string,
// };

export default RadioButton;

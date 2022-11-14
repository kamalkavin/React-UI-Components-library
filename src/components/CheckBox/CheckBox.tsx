/**
 *
 * CheckBox
 *
 */

import React, { memo, forwardRef, useEffect, useState, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import { useMergedRef, useStyleConfig } from '../../commons';
import { Span } from '..';
import useInternalStyles from './styles/CheckBox.style';

interface CheckIconProps {
	fill?: string;
}
const CheckIcon = ({ fill = 'currentColor', ...props }: CheckIconProps) => (
	<svg width={10} height={7} viewBox='0 0 10 7' {...props}>
		<path
			fill={fill}
			fillRule='evenodd'
			d='M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z'
		/>
	</svg>
);

interface MinusIconProps {
	fill?: string;
}

const MinusIcon = ({ fill = 'currentColor', ...props }: MinusIconProps) => (
	<svg width={16} height={16} viewBox='0 0 16 16' {...props}>
		<path fill={fill} fillRule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' />
	</svg>
);

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

type CheckboxVariants = 'primary';
export interface CheckboxProps extends BoxProps<any> {
	variant?: CheckboxVariants;
	disabled?: boolean;
	id?: string;
	name: string;
	label?: string;
	isInvalid?: boolean;
	checked?: boolean;
	onChange?: any;
	value?: any;
	indeterminate?: boolean;
	labelPosition?: 'left' | 'right';
}

const CheckBox: FC<CheckboxProps> = memo(
	forwardRef(function Checkbox(props: CheckboxProps, forwardedRef) {
		const [ref, setRef] = useState<any>(null);
		const callbackRef = useMergedRef(setRef, forwardedRef);
		let internalStyles = useInternalStyles();
		const variant = props.variant || 'primary';
		const labelPosition = props.labelPosition || 'left';

		const pseudeoBaseStyles = {
			[pseudoSelectors._base]: {
				outline: 'none',
				cursor: 'pointer',
			},
		};
		internalStyles = { ...internalStyles, pseudeoBaseStyles };

		useEffect(() => {
			if (ref) {
				ref.indeterminate = props.indeterminate;
			}
		}, [ref, props.indeterminate]);

		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box
				is='label'
				cursor={props.disabled ? 'not-allowed' : 'pointer'}
				position='relative'
				display='flex'
				// marginY={16}
				{...props.rest}>
				{labelPosition === 'left' && props.label && (
					<Span marginRight={10} fontWeight={800} color={props.disabled ? '#aab1b9' : '#3c4850'}>
						{props.label}
					</Span>
				)}
				<Box
					className={themedClassName}
					is='input'
					id={props.id}
					type='checkbox'
					name={props.name}
					data-cy={props.name}
					value={props.value}
					checked={props.checked || props.indeterminate}
					onChange={props.onChange}
					disabled={props.disabled}
					aria-invalid={props.isInvalid}
					defaultChecked={props.defaultChecked}
					{...boxProps}
					ref={callbackRef}
				/>
				<Box
					boxSizing='border-box'
					borderRadius={3}
					display='flex'
					flex='none'
					alignItems='center'
					justifyContent='center'
					width={20}
					height={20}>
					{props.indeterminate ? <MinusIcon /> : <CheckIcon />}
				</Box>
				{labelPosition === 'right' && props.label && (
					<Span
						data-cy={`${props.label}-label`}
						marginLeft={10}
						size={300}
						color={props.disabled ? 'muted' : 'default'}>
						{props.label}
					</Span>
				)}
			</Box>
		);
	})
);

export default CheckBox;

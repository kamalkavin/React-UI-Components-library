/**
 *
 * RadioGroupButton component
 *
 */

import React, { memo, forwardRef, FC } from 'react';
import { BoxProps } from 'ui-box';
import Div from '../Layers/Div';
import Span from '../Typography/Span';
import RadioButton from '../RadioButton/RadioButton';

const noop = () => {};
const emptyArray = [];

export interface RadioGroupButtonProps extends BoxProps<any> {
	name: string;
	label: string;
	labelPosition?: 'left' | 'right';
	disabled: boolean;
	isInvalid: boolean;
	checked: boolean;
	onChange: () => void;
	value: string;
	size: 'large' | 'default';
	isRequired: boolean;
	variant: string;
	defaultValue: string;
	options: any;
}

const RadioGroupButton: FC<RadioGroupButtonProps> = memo(
	forwardRef(function RadioGroup(
		{
			size = 'default',
			name,
			label,
			defaultValue,
			value,
			options = emptyArray,
			onChange = noop,
			checked,
			disabled,
			isRequired = false,
			labelPosition = 'right',
			...rest
		}: RadioGroupButtonProps,
		ref
	) {
		// const name = useId('RadioGroup')
		const selected = value || defaultValue || options[0].value;

		return (
			<Div aria-label={label} {...rest}>
				{label && (
					<Span color='muted' fontWeight={500}>
						{label}
					</Span>
				)}
				{options.map((item) => (
					<RadioButton
						id={item.value}
						key={item.value}
						size={size}
						name={name}
						value={item.value}
						label={item.label}
						checked={selected === item.value}
						disabled={item.isDisabled}
						onChange={onChange}
						isRequired={isRequired}
						labelPosition={labelPosition}
						{...rest}
					/>
				))}
			</Div>
		);
	})
);

export default RadioGroupButton;

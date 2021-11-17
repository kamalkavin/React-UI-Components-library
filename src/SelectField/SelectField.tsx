/**
 *
 * SelectField
 *
 */
import React, { FC } from 'react';
import cx from 'classnames';
import { ValidationRules, UseFormMethods, Controller } from 'react-hook-form';
import Select, { Props as SelectProps, components } from 'react-select';

interface formProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	options: any;
	control?: any;
}

export interface SelectFieldProps extends Omit<SelectProps, ''>, Omit<formProps, ''> {
	value?: any;
}

const SelectField: FC<SelectFieldProps> = (props: SelectFieldProps) => {
	// convert options from {a:1} to [{label=a,value=1}]
	const optionsComputed: any = [];
	for (const [value, label] of Object.entries(props.options)) optionsComputed.push({ label, value });

	let defaultValueComputed;

	const Input = (inputProps) => {
		// add attribues to the component below
		inputProps = {
			...inputProps,
			'data-cy': props.name,
		};
		return <components.Input {...inputProps} />;
	};
	let customComponents = { Input: Input };
	if (props.components) {
		customComponents = { ...customComponents, ...props.components };
	}
	// convert defaultValue from [1] to [{label=a,value=1}]
	const defaultValue =
		props.control &&
		props.control.defaultValuesRef &&
		props.control.defaultValuesRef.current &&
		props.control.defaultValuesRef.current[props.name]
			? props.control?.defaultValuesRef?.current[props.name]
			: [];
	if (defaultValue) {
		defaultValueComputed = [];
		for (const value of defaultValue)
			defaultValueComputed = [
				...defaultValueComputed,
				...props.options
					.filter((option) => String(option.value) === String(value.value))
					.map((item) => ({ label: item.label, value: item.value })),
			];
	}
	return (
		<>
			{props.control ? (
				<>
					<Controller
						control={props.control}
						name={props.name}
						render={({ onChange, value }) => (
							<Select
								id={props.name}
								placeholder={props.placeHolder}
								name={props.name}
								className={cx(
									'select-field',
									`select-${props.name}`,
									props.className && props.className,
									defaultValueComputed.length === 0 && (!value || value.length === 0) && 'no-border',
									props.errors && props.errors[props.name] && 'is-danger'
								)}
								innerRef={props.register && props.register(props.rules)}
								value={
									Array.isArray(value)
										? props.options.filter((c) => value.includes(c.value))
										: props.options.find((c) => c.value === value)
								}
								onChange={(val) => {
									onChange(val.value);
									props.onChange && props.onChange(val.value);
								}}
								{...props}
							/>
						)}
						data-cy={props.name}
						defaultValue={props.defaultValue}
						passRef={true}
						rules={{ required: true }}
						{...props}
					/>
					{props.errors &&
					props.errors[props.name] &&
					props.errors &&
					props.errors[props.name].type === 'required' ? (
						<div>
							<span className='text-danger'>{props.name + ' is required'}</span>
						</div>
					) : null}
				</>
			) : (
				<Select
					id={props.name}
					placeholder={props.placeHolder}
					name={props.name}
					components={customComponents}
					className={cx(
						'select-field',
						`select-${props.name}`,
						defaultValueComputed.length === 0 && (!props.value || props.value.length === 0) && 'no-border',
						props.className && props.className
					)}
					{...(props.onChange ? { onChange: (val) => props.onChange(val) } : {})}
					{...props}
				/>
			)}
		</>
	);
};
export default SelectField;

/**
 *
 * FormSelect component
 *
 */

import React, { FC } from 'react';
import Select from './Select';
import { ValidationRules, UseFormMethods, Controller } from 'react-hook-form';
import { Props as SelectProps } from 'react-select';
interface formProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	options: any;
	control?: any;
	variant?: 'primary';
}
export interface FormSelectProps extends Omit<SelectProps, ''>, Omit<formProps, ''> {
	value?: any;
}

const FormSelect: FC<FormSelectProps> = (props: FormSelectProps) => {
	return (
		<Controller
			as={
				<Select
					error={props.errors}
					control={props.control}
					is={props.is}
					name={props.name}
					options={props.options}
				/>
			}
			name={props.name}
			control={props.control}
			rules={props.rules}
		/>
	);
};

export default FormSelect;

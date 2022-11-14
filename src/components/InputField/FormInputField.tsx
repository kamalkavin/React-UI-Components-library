/**
 *
 * FormInputField
 *
 */
import React, { FC, memo, forwardRef } from 'react';
import InputField, { InputFieldProps } from './InputField';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';
interface FormInputFieldProps extends InputFieldProps, Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
}
const FormInputField: FC<FormInputFieldProps> = memo(
	forwardRef((props: FormInputFieldProps, ref) => {
		return (
			<>
				<InputField
					className={cx('input-field', props.errors && props.errors[props.name] && 'is-danger')}
					width='100%'
					isInvalid={props.errors && props.errors[props.name] ? true : false}
					data-cy={props.name}
					ref={props.register && props.register(props.rules)}
					onChange={() => props.onChange}
					{...props}
				/>
			</>
		);
	})
);

export default FormInputField;

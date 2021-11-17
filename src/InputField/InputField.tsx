/**
 *
 * TextField
 *
 */

import React, { FC } from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';

interface FormProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
	type: string;
	placeHolder?: string;
	control?: any;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	defaultValue?: any;
}

export interface InputProps extends Omit<FormControlProps, 'type'>, Omit<FormProps, ''> {}

const InputField: FC<InputProps> = (props: InputProps) => {
	const { name, register, control, errors, rules, placeHolder, defaultValue, ...rest } = props;
	return (
		<>
			{register ? (
				<>
					<FormControl
						placeholder={placeHolder}
						className={cx('input', errors && errors[name] && 'is-danger')}
						aria-invalid={errors && errors[name] ? 'true' : 'false'}
						id={name}
						data-cy={name}
						name={name}
						ref={register && register(rules)}
						step='any'
						defaultValue={defaultValue}
						{...rest}
					/>
					{errors && errors[name] && (
						<div>
							<span className='text-danger' data-cy='input-field-error-message'>
								{errors && errors[name].message}
							</span>
						</div>
					)}
				</>
			) : (
				<FormControl
					name={name}
					placeholder={placeHolder}
					defaultValue={defaultValue}
					id={name}
					data-cy={name}
					{...rest}
				/>
			)}
		</>
	);
};

export default InputField;

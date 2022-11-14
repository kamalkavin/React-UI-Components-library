/**
 *
 * Switch component
 *
 */

import React, { FC } from 'react';
import Switch from './Switch';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';
import { SwitchProps } from './Switch';

interface FormSwitchProps extends SwitchProps, Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
	errors: any;
	register: any;
	onChange: any;
}

const FormSwitch: FC<FormSwitchProps> = (
	{ errors, name, rules, register, onChange, ...rest }: FormSwitchProps,
	ref
) => {
	return (
		<>
			<Switch
				name={name}
				className={cx('input', errors && errors[name] && 'is-danger')}
				aria-invalid={errors && errors[name] ? 'true' : 'false'}
				onChange={onChange}
				ref={register && register(rules)}
				{...rest}
			/>
			{errors && errors[name] && (
				<div>
					<span data-cy='Switch-error' className='text-danger'>
						{errors && errors[name].message}
					</span>
				</div>
			)}
		</>
	);
};

export default FormSwitch;

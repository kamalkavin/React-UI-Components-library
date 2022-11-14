/**
 *
 * CheckBox
 *
 */

import React, { FC } from 'react';
import { CheckBox } from '..';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';
import { CheckboxProps } from './CheckBox';

interface FormCheckboxProps extends CheckboxProps, Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
}

const FormCheckBox: FC<FormCheckboxProps> = (props: CheckboxProps) => {
	return (
		<>
			<CheckBox
				className={cx('input', props.errors && props.errors[props.name] && 'is-danger')}
				aria-invalid={props.errors && props.errors[props.name] ? 'true' : 'false'}
				type={props.type}
				data-cy={props.name}
				ref={props.register && props.register(props.rules)}
				// label={props.label}
				{...props}
			/>
			{props.errors && props.errors[props.name] && (
				<div>
					<span data-cy='checkbox-error' className='text-danger'>
						{props.errors && props.errors[props.name].message}
					</span>
				</div>
			)}
		</>
	);
};

export default FormCheckBox;

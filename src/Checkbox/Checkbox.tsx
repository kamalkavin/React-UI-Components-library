/**
 *
 * Checkbox
 *
 */

import React, { FC } from 'react';
import { FormCheck, FormCheckProps } from 'react-bootstrap';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';

interface FormProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
	label: string;
	variant?: 'small' | 'medium' | 'large';
}

export interface CheckboxProps extends Omit<FormCheckProps, 'name'>, Omit<FormProps, 'label'> {}

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
	const variant = props.variant || 'small';
	return (
		<>
			{props.register ? (
				<>
					<FormCheck
						className={cx('input', props.errors && props.errors[props.name] && 'is-danger', variant)}
						aria-invalid={props.errors && props.errors[props.name] ? 'true' : 'false'}
						type={props.type}
						data-cy={props.name}
						id={props.name}
						ref={props.register && props.register(props.rules)}
						label={props.label}
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
			) : (
				<FormCheck
					className={cx('input', props.errors && props.errors[props.name] && 'is-danger', variant)}
					aria-invalid={props.errors && props.errors[props.name] ? 'true' : 'false'}
					type={props.type}
					data-cy={props.name}
					id={props.name}
					label={props.label}
					{...props}
				/>
			)}
		</>
	);
};

export default Checkbox;

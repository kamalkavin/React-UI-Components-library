/**
 *
 * FormTextArea
 *
 */
import React, { FC, memo, forwardRef } from 'react';
import TextArea, { TextAreaProps } from './TextArea';
import { UseFormMethods, ValidationRules } from 'react-hook-form';
import cx from 'classnames';
interface FormTextAreaProps extends TextAreaProps, Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
	rules?: ValidationRules;
	name: string;
}
const FormTextArea: FC<FormTextAreaProps> = memo(
	forwardRef((props: FormTextAreaProps, ref) => {
		return (
			<>
				<TextArea
					className={cx('g-text-area', props.errors && props.errors[props.name] && 'is-danger')}
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

export default FormTextArea;

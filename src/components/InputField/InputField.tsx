import React, { forwardRef, memo, FC } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig, useCustomTheme } from '../../commons';
import { getThemingStyles } from '../../utils/utils';
import style from './styles/InputField.style';

const pseudoSelectors = {
	_disabled: '&:disabled',
	_active: '&:not([disabled]):focus',
	_errorInactive: '&:not([disabled])[aria-invalid="true"]:not(:focus)',
	_errorInactivePlaceholder: '&:not([disabled])[aria-invalid="true"]:not(:focus)::placeholder',
	_errorActive: '&:not([disabled])[aria-invalid="true"]:focus',
	_errorActivePlaceholder: '&:not([disabled])[aria-invalid="true"]:focus::placeholder',
	_placeholder: '&:not([disabled])::placeholder',
	_placeholderDisabled: '&:disabled::placeholder',
	// _placeholderHover: '&:not([disabled]):hover::placeholder',
	_placeholderActive: '&:not([disabled]):focus::placeholder',
};

export interface InputFieldProps extends BoxProps<any> {
	name?: string;
	value?: any;
	placeholder?: string;
	variant?: 'primary' | 'transparent';
	className?: string;
	disabled?: boolean;
	required?: boolean;
	isInvalid?: boolean;
	spellCheck?: boolean;
	autoFocus?: boolean;
	onChange?: any;
	type?: 'text' | 'number' | 'password' | 'file';
}

const InputField: FC<InputFieldProps> = memo(
	forwardRef((props: InputFieldProps, ref) => {
		const theme = useCustomTheme();
		// Get the component style object from the theme
		const themingStyles = getThemingStyles(theme, `components.InputField`) || {};
		const internalStyles: any = style({ themingStyles, theme });
		const {
			variant = 'primary',
			name,
			value,
			className,
			disabled,
			isInvalid,
			placeholder,
			required,
			onChange,
			autoFocus,
			spellCheck = true,
			type = 'text',
			...restProps
		} = props;

		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size: restProps.size || 'medium' },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box
				is='input'
				data-cy={name}
				value={value}
				name={name}
				className={cx(themedClassName, className)}
				type={type}
				required={required}
				disabled={disabled}
				placeholder={placeholder}
				spellCheck={spellCheck}
				aria-invalid={isInvalid}
				onChange={onChange}
				autoFocus={autoFocus}
				ref={ref}
				{...boxProps}
				{...restProps}
			/>
		);
	})
);

export default InputField;

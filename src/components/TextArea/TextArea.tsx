/**
 *
 * TextArea component
 *
 */
import React, { FC, memo, forwardRef } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig, useCustomTheme } from '../../commons';
import { getThemingStyles } from '../../utils/utils';
import style from './styles/TextArea.style';

const pseudoSelectors = {
	_disabled: '&:disabled',
	_active: '&:not([disabled]):focus',
	_errorInactive: '&:not([disabled])[aria-invalid="true"]:not(:focus)',
	_errorInactivePlaceholder: '&:not([disabled])[aria-invalid="true"]:not(:focus)::placeholder',
	_errorActive: '&:not([disabled])[aria-invalid="true"]:focus',
	_errorActivePlaceholder: '&:not([disabled])[aria-invalid="true"]:focus::placeholder',
	_placeholder: '&:not([disabled])::placeholder',
	_placeholderDisabled: '&:disabled::placeholder',
	_placeholderHover: '&:not([disabled]):hover::placeholder',
	_placeholderActive: '&:not([disabled]):focus::placeholder',
};

export interface TextAreaProps extends BoxProps<any> {
	className?: string;
	disabled?: boolean;
	grammarly?: boolean;
	height?: string;
	isInvalid?: boolean;
	placeholder?: string;
	required?: boolean;
	spellCheck?: boolean;
	width?: string;
	variant?: 'primary' | 'transparent';
}

const TextArea: FC<TextAreaProps> = memo(
	forwardRef(
		(
			{
				className,
				disabled = false,
				grammarly = false,
				height,
				isInvalid = false,
				placeholder,
				variant = 'primary',
				required,
				spellCheck = true,
				width = '100%',
				...restProps
			}: TextAreaProps,
			ref
		) => {
			const theme = useCustomTheme();
			// Get the component style object from the theme
			const themingStyles = getThemingStyles(theme, `components.TextArea`) || {};
			const internalStyles: any = style({ themingStyles, theme });
			const { className: themedClassName, ...boxProps } = useStyleConfig(
				{ variant: 'primary' },
				pseudoSelectors,
				internalStyles
			);

			return (
				<Box
					is='textarea'
					ref={ref}
					className={cx(themedClassName, className)}
					required={required}
					disabled={disabled}
					placeholder={placeholder}
					spellCheck={spellCheck}
					aria-invalid={isInvalid}
					data-gramm_editor={grammarly}
					variant={variant}
					{...boxProps}
					{...restProps}
				/>
			);
		}
	)
);

export default TextArea;

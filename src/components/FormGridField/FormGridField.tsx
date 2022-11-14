import React, { memo, forwardRef, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import GHorizontalValidationMsg from './HorizontalValidationMsg';
import useInternalStyles from './styles/FormGridField.style';
import { useStyleConfig } from '../../commons';

export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_focusAndActive:
		'&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
	_hover: '&:not([disabled]):hover',
};

interface FormFieldProps extends BoxProps<any> {
	validationMessage?: React.ReactNode;
	sibling?: React.ReactNode;
	isRequired?: boolean;
	disabled?: boolean;
	variant?: 'horizontal' | 'vertical';
	children: React.ReactNode;
}

const FormGridField: FC<FormFieldProps> = memo(
	forwardRef((props: FormFieldProps, ref) => {
		const {
			children,
			isRequired,
			variant = 'horizontal',
			disabled,
			validationMessage,
			sibling,
			...restProps
		} = props;
		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size: restProps.size || 'medium' },
			pseudoSelectors,
			internalStyles
		);

		return (
			<>
				<Box
					{...restProps}
					{...boxProps}
					ref={ref}
					marginBottom={8}
					width='100%'
					display='flex'
					flexDirection='row'
					alignItems='center'>
					<Box width='100%' display='flex' flexDirection='column'>
						{children}
					</Box>

					{typeof validationMessage === 'string' ? (
						<GHorizontalValidationMsg disabled={disabled}>{validationMessage}</GHorizontalValidationMsg>
					) : (
						validationMessage
					)}
				</Box>
			</>
		);
	})
);

export default FormGridField;

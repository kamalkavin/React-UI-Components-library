import React, { memo, forwardRef, FC } from 'react';
import { Paragraph } from '..';
import Box from 'ui-box';
import { ErrorIcon } from '../../icons';

interface FormFieldValidationMsgProps {
	children: React.ReactNode;
	disabled?: boolean;
}

const FormFieldValidationMessage: FC<FormFieldValidationMsgProps> = memo(
	forwardRef(function FormFieldValidationMessage(props: FormFieldValidationMsgProps, ref) {
		const { children, ...restProps } = props;
		return (
			<Box display='flex' paddingTop={10} data-cy='input-error-container'>
				<ErrorIcon width='16px' height='14px' name='errorIcon' color='rgb(255, 76, 62)' />
				<Paragraph
					width='auo'
					height='auto'
					flexShrink='0'
					whiteSpace='pre'
					overflow='visible'
					fontWeight={400}
					fontStyle='normal'
					fontFamily='"Nunito Sans", sans-serif'
					color={props.disabled ? '#aab1b9' : '#3c4850'}
					fontSize={12}
					letterSpacing={0}
					lineHeight={1.2}
					textAlign='left'
					paddingLeft={8}
					marginTop='unset'
					{...props}
					{...restProps}
					ref={ref}>
					{children}
				</Paragraph>
			</Box>
		);
	})
);

export default FormFieldValidationMessage;

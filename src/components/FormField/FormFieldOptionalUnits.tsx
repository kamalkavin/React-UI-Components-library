import React, { memo, forwardRef, FC } from 'react';
import { Paragraph } from '..';
import { BoxProps } from 'ui-box';

interface FormFieldOptionalUnitsProps extends BoxProps<any> {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
}

const FormFieldOptionalUnits: FC<FormFieldOptionalUnitsProps> = memo(
	forwardRef(function FormFieldOptionalUnits(props: FormFieldOptionalUnitsProps, ref) {
		const { disabled, className, ...restProps } = props;
		return (
			<Paragraph
				width='auto'
				height='auto'
				overflow='auto'
				fontWeight='400'
				fontStyle='normal'
				fontFamily='"Nunito Sans", sans-serif'
				color={disabled ? '#aab1b9' : '#3c4850'}
				fontSize={16}
				letterSpacing={0}
				lineHeight={2}
				paddingLeft={8}
				margin='unset'
				disabled={disabled}
				{...restProps}
				className={className}
				ref={ref}
			/>
		);
	})
);

export default FormFieldOptionalUnits;

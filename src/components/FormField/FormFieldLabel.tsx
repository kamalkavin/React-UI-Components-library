import React, { memo, forwardRef, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import { Label, Span, Tooltip, Paragraph } from '..';
import useInternalStyles from './styles/FormFieldLabel.style';
import { useStyleConfig } from '../../commons';
import { InfoIcon } from '../../icons';
import cx from 'classnames';

const pseudoSelectors = {
	_disabled: '&[disabled]',
};

interface FormFieldLabelProps extends BoxProps<any> {
	isAstrixShown?: Boolean;
	variant: string;
	children: React.ReactNode;
	description?: String;
	disabled?: boolean;
	className?: string;
	isOptional?: Boolean;
}

const FormFieldLabel: FC<FormFieldLabelProps> = memo(
	forwardRef(function FormFieldLabel(props: FormFieldLabelProps, ref) {
		const { children, description, isAstrixShown, variant, disabled, className, isOptional, ...restProps } = props;
		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size: restProps.size || 'medium' },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box display='flex' flexDirection={variant === 'horizontal' ? 'row' : 'column'}>
				<Label
					{...restProps}
					{...boxProps}
					className={cx(themedClassName, className)}
					ref={ref}
					disabled={disabled}>
					{children}{' '}
					{isAstrixShown && (
						<Tooltip
							appearance='card'
							variant='infotext'
							position={'right'}
							content={`${children} is mandatory.`}>
							<Span>*</Span>
						</Tooltip>
					)}
					{isOptional && (
						<Span color={disabled ? '#aab1b9' : '#3c4850'} fontWeight={400}>
							(optional)
						</Span>
					)}
				</Label>
				{description && variant === 'horizontal' && (
					<Box marginLeft={8}>
						<InfoIcon width='21px' height='20px' name='infoIconHorizontal' />
					</Box>
				)}
				{description && variant === 'vertical' && (
					<Box display='flex' marginBottom='10px'>
						<InfoIcon width='16px' height='15px' name='infoIconVertical' />
						<Paragraph
							width='auo'
							height='auto'
							overflow='auto'
							fontWeight={400}
							fontStyle='normal'
							fontFamily='"Nunito Sans", sans-serif'
							fontSize={12}
							letterSpacing={0}
							lineHeight={1.2}
							paddingLeft={8}
							margin='unset'
							textAlign='left'
							color={props.disabled ? '#cdd3d8' : '#70838f'}
							ref={ref}>
							{description}
						</Paragraph>
					</Box>
				)}
			</Box>
		);
	})
);

export default FormFieldLabel;

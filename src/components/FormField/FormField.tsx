import React, { memo, forwardRef, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import FormFieldValidationMessage from './FormFieldValidationMessage';
// import GHorizontalValidationMsg from './GHorizontalValidationMsg';
import FormFieldOptionalUnits from './FormFieldOptionalUnits';
import FormFieldLabel from './FormFieldLabel';
import useInternalStyles from './styles/FormField.style';
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
	units?: React.ReactNode;
	label?: React.ReactNode;
	labelId?: String;
	validationMessage?: React.ReactNode;
	sibling?: React.ReactNode;
	description?: String;
	labelFor?: string;
	isRequired?: boolean;
	isOptional?: boolean;
	disabled?: boolean;
	variant?: 'horizontal' | 'vertical';
	children: React.ReactNode;
	customUnitClass?: string;
	childrenWidth?: string | number;
	labelWidth?: string | number;
	alignItems?: string;
	unitWidth?: string | number;
}

const FormField: FC<FormFieldProps> = memo(
	forwardRef((props: FormFieldProps, ref) => {
		const {
			units,
			label,
			labelFor,
			children,
			isRequired,
			isOptional,
			variant = 'horizontal',
			disabled,
			validationMessage,
			sibling,
			description,
			labelId,
			labelWidth,
			childrenWidth,
			alignItems,
			unitWidth,
			...restProps
		} = props;
		const internalStyles = useInternalStyles.InternalStyles();
		const classes = useInternalStyles.useStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size: restProps.size || 'medium' },
			pseudoSelectors,
			internalStyles
		);

		return (
			<>
				{variant === 'horizontal' ? (
					<Box
						{...boxProps}
						ref={ref}
						marginBottom={8}
						width='100%'
						display='flex'
						flexDirection='row'
						alignItems={alignItems || 'center'}
						{...restProps}>
						{/* Form Label */}
						{label && (
							<Box width={labelWidth || '40%'} height='100%'>
								<FormFieldLabel
									variant={variant}
									disabled={disabled}
									htmlFor={labelFor}
									isAstrixShown={isRequired}
									isOptional={isOptional}
									description={description}
									paddingBottom={37}
									data-cy={labelId || `${label}-label`}>
									{label}
								</FormFieldLabel>
							</Box>
						)}
						{/* Form Label */}

						{/* Children component and Validation Message */}
						<Box width={childrenWidth || '40%'} flexDirection='column' display='flex'>
							{/* Child Component */}
							{!sibling ? (
								//Without sibling
								<Box>{children}</Box>
							) : (
								//With sibling
								<Box flexDirection='row' display='flex'>
									<Box flexShrink={1} flexGrow={1}>
										{children}
									</Box>
									<Box flexShrink={0} flexGrow={1}>
										<FormFieldOptionalUnits disabled={disabled}>{sibling}</FormFieldOptionalUnits>
									</Box>
								</Box>
							)}
							{/* Child Component */}

							{/* Validation Message */}
							<Box height={37}>
								{typeof validationMessage === 'string' ? (
									<FormFieldValidationMessage disabled={disabled}>
										{validationMessage}
									</FormFieldValidationMessage>
								) : (
									validationMessage
								)}
							</Box>
							{/* Validation Message */}
						</Box>
						{/* Children component and Units */}

						{/* Units */}
						{units && (
							<Box
								width={unitWidth || '20%'}
								className={props.customUnitClass === 'unitsTopPosition' ? classes.customUnitClass : ''}>
								{/* {typeof validationMessage === 'string' ? (
								<GHorizontalValidationMsg disabled={disabled}>
									{validationMessage}
								</GHorizontalValidationMsg>
							) : (
								validationMessage
							)} TBD for grid inputs*/}
								{typeof units === 'string' ? (
									<FormFieldOptionalUnits disabled={disabled} paddingBottom={37}>
										{units}
									</FormFieldOptionalUnits>
								) : (
									units
								)}
							</Box>
						)}
						{/* Units */}
					</Box>
				) : (
					<Box {...restProps} {...boxProps} ref={ref} marginBottom={8}>
						{/* Form Label */}
						<FormFieldLabel
							variant={variant}
							disabled={disabled}
							htmlFor={labelFor}
							isAstrixShown={isRequired}
							isOptional={isOptional}
							description={description}
							paddingBottom={10}
							data-cy={labelId || `${label}-label`}>
							{label}
						</FormFieldLabel>
						{/* Form Label */}

						{/* Children Component and Units */}
						<Box flexDirection='row' display='flex' width='100%'>
							<Box width={childrenWidth || '80%'}>{children}</Box>
							{units && (
								<Box width='20%'>
									{typeof units === 'string' ? (
										<FormFieldOptionalUnits disabled={disabled}>{units}</FormFieldOptionalUnits>
									) : (
										units
									)}
								</Box>
							)}
						</Box>
						{/* Children Component and Units */}

						{/* Validation Message */}
						<Box height={37}>
							{typeof validationMessage === 'string' ? (
								<FormFieldValidationMessage disabled={disabled}>
									{validationMessage}
								</FormFieldValidationMessage>
							) : (
								validationMessage
							)}
						</Box>
						{/* Validation Message */}
					</Box>
				)}
			</>
		);
	})
);

export default FormField;

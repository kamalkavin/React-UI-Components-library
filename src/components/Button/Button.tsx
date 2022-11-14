import React, { FC, forwardRef, memo, ReactNode } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import useInternalStyles from './styles/Button.style';
import { Loader } from '..';

export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_focusAndActive:
		'&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
	_hover: '&:not([disabled]):hover',
	_hoverAndElement: '.g-button-group:hover+.g-button-group',
	_before: '.g-toggle-group:before',
	_loading: '&[disabled][data-loading]',
};
type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
type ButtonSizes = 'small' | 'medium' | 'large';
export interface ButtonProps extends BoxProps<any> {
	variant?: ButtonVariants;
	size?: ButtonSizes;
	isLoading?: boolean;
	isActive?: boolean;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	disabled?: boolean;
	className?: string;
	children?: any;
	is?: any;
	onClick?: any;
	name: string;
}

const Button: FC<ButtonProps> = memo(
	forwardRef(function Button(
		{
			variant = 'secondary',
			children,
			className,
			disabled,
			iconAfter,
			iconBefore,
			is = 'button',
			isActive = false,
			isLoading,
			name,
			onClick = () => {},
			...restProps
		}: ButtonProps,
		ref
	) {
		const internalStyles: any = useInternalStyles();
		if (restProps.beforeBorder) {
			internalStyles.variants.secondary._before.borderRadius = restProps.beforeBorder;
			delete restProps.beforeBorder;
		}
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size: restProps.size || 'medium' },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box
				is={is}
				ref={ref}
				className={cx(themedClassName, className)}
				data-active={isActive || undefined}
				{...boxProps}
				{...restProps}
				disabled={disabled || isLoading}
				onClick={onClick}
				data-cy={name}
				data-loading={isLoading}>
				{isLoading && <Loader variant={variant}></Loader>}
				{iconBefore && iconBefore}
				{!isLoading && children}
				{iconAfter && (
					<Box height={16} paddingLeft={8}>
						{iconAfter}
					</Box>
				)}
			</Box>
		);
	})
);

export default Button;

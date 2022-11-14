/**
 *
 * Switch component
 *
 */

import React, { FC, memo, forwardRef } from 'react';
import Box, { BoxProps } from 'ui-box';
import useInternalStyles from './styles/Switch.style';
import { useStyleConfig } from '../../commons';
import { createUseStyles } from 'react-jss';
import Span from '../Typography/Span';

const animationEasing = {
	spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
};

const useStyles = createUseStyles({
	handleStyleClass: {
		backgroundColor: '#fff',
		borderRadius: 9999,
		'&:not([disabled]):active:hover': {
			width: 33,
		},
	},
	iconContainerStyleClass: {
		transition: `all 500ms ${animationEasing.spring}`,
		opacity: 0,
		display: 'flex',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 4,
		'&[data-checked="true"]': {
			opacity: 1,
			transform: 'scale(1)',
		},
		'> svg': {
			transition: `all 500ms ${animationEasing.spring}`,
			transform: 'scale(0)',
		},
		'&[data-checked="true"] > svg': {
			transform: 'scale(1)',
		},
	},
	handleContainerStyleClass: {
		transition: 'transform 200ms ease-in-out',
		transform: 'translateX(0%)',
		'&[data-checked="true"]': {
			transform: 'translateX(50%)',
		},
		'&:not([disabled]):active:hover': {
			width: 34,
		},
	},
});

interface CheckIconProps {
	fill?: string;
	size?: number;
	display?: any;
}

const CheckIcon = ({ fill = 'currentColor', size, display, ...props }: CheckIconProps) => {
	return (
		<svg width={10} height={size} viewBox='0 0 10 7' {...props}>
			<path
				fill={fill}
				fillRule='evenodd'
				d='M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z'
			/>
		</svg>
	);
};

const pseudoSelectors = {
	_base: '& + div',
	_disabled: '&[disabled] + div',
	_hover: '&:not([disabled]):hover + div',
	_focus: '&:not([disabled]):focus + div',
	_active: '&:not([disabled]):active + div',
	_checked: '&:checked + div',
	_checkedHover: '&:checked:hover + div',
	_checkedActive: '&:not([disabled]):checked:active + div',
	_checkedDisabled: '&[disabled]:checked + div',
};

export interface SwitchProps extends BoxProps<any> {
	id?: string;
	name: string;
	checked?: boolean;
	onChange?: any;
	disabled?: boolean;
	variant?: 'primary';
	hasCheckIcon?: boolean;
	defaultChecked?: boolean;
	status?: string;
	labelPosition?: 'left' | 'right';
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

const noop = () => {};

const Switch: FC<SwitchProps> = memo(
	forwardRef(function Switch(
		{
			id,
			name,
			size = 'small',
			checked = false,
			onChange = noop,
			disabled = false,
			variant = 'primary',
			hasCheckIcon = false,
			defaultChecked,
			status,
			labelPosition = 'left',
			register,
			control,
			errors,
			className,
			...rest
		}: SwitchProps,
		ref
	) {
		const classes = useStyles();
		let internalStyles = useInternalStyles();
		const height = 32;

		const pseudeoBaseStyles = {
			[pseudoSelectors._base]: {
				transition: 'all 120ms ease-in-out',
			},
		};
		internalStyles = { ...internalStyles, pseudeoBaseStyles };
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		return (
			// <Box display='flex' alignItems='center'>
			// 	<Box is='label' display='block' width={height * 2} position='relative' ref={ref} {...rest}>
			// 		<Box
			// 			is='input'
			// 			id={id}
			// 			name={name}
			// 			{...boxProps}
			// 			className={themedClassName}
			// 			type='checkbox'
			// 			checked={checked}
			// 			disabled={disabled}
			// 			defaultChecked={defaultChecked}
			// 			onChange={onChange}
			// 		/>
			// 		<Box height={height} width={height * 2} borderRadius={9999} cursor='pointer'>
			// 			<Box
			// 				height={height}
			// 				width={height}
			// 				data-checked={checked}
			// 				className={classes.iconContainerStyleClass}>
			// 				{hasCheckIcon && (
			// 					<CheckIcon display={checked ? 'block' : undefined} size={height / 2 - 3} />
			// 				)}
			// 			</Box>
			// 			<Box
			// 				width={height * 2}
			// 				display='flex'
			// 				data-checked={checked}
			// 				className={classes.handleContainerStyleClass}>
			// 				<Box flex={1} padding={2}>
			// 					<Box width={height - 4} height={height - 4} className={classes.handleStyleClass} />
			// 				</Box>
			// 			</Box>
			// 		</Box>
			// 	</Box>
			// 	{status && (
			// 		<Span marginRight={8} size={800} color={disabled ? 'muted' : 'default'}>
			// 			{status}
			// 		</Span>
			// 	)}
			// </Box>
			<Box display='flex' alignItems='center' className={className}>
				<Box is='label' width={54} position='relative' ref={ref} {...rest}>
					<Box
						is='input'
						id={id}
						name={name}
						{...boxProps}
						className={themedClassName}
						type='checkbox'
						checked={checked}
						disabled={disabled}
						defaultChecked={defaultChecked}
						onChange={onChange}
						data-cy={name}
					/>
					<Box height={height} width={54} borderRadius={9999} cursor='pointer'>
						<Box
							height={height}
							data-cy={`${name}-checkIcon`}
							width={height}
							data-checked={checked}
							className={classes.iconContainerStyleClass}>
							{hasCheckIcon && (
								<CheckIcon display={checked ? 'block' : undefined} size={height / 2 - 3} />
							)}
						</Box>
						<Box
							width={44}
							display='flex'
							data-cy={`${name}-handle`}
							data-checked={checked}
							className={classes.handleContainerStyleClass}>
							<Box flex={1} padding={2}>
								<Box width={height - 4} height={height - 4} className={classes.handleStyleClass} />
							</Box>
						</Box>
					</Box>
				</Box>
				{status && (
					<Span
						marginLeft={8}
						size={800}
						color={disabled ? 'muted' : 'default'}
						data-cy={name ? `${name}-switch-status` : 'switch-status'}>
						{status}
					</Span>
				)}
			</Box>
		);
	})
);

export default Switch;

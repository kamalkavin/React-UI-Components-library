/**
 *
 * Dialog component
 *
 */

import React, { FC, memo, forwardRef, useState, useRef } from 'react';
import { InternalStyles, UseStyles } from './styles/Dialog.style';

import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import { Rnd } from 'react-rnd';
import Span from '../Typography/Span';
import Overlay from '../Overlay/Overlay';
import { CrossIcon } from '../../icons';

export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_hover: '&:not([disabled]):hover',
};

type DialogSizes = 'small' | 'medium' | 'large';
type ButtonVariants = 'primary' | 'login';

export interface DialogProps extends BoxProps<any> {
	variant?: ButtonVariants;
	size?: DialogSizes;
	className?: string;
	description: any;
	heading: any;
	footer?: any;
	isDraggingDisabled?: boolean;
	name: string;
	showSeparator?: boolean;
	initialWidth?: number | string;
	initialHeight?: number | string;
	showCloseIcon?: boolean;
	enableScrolling?: boolean;
	closeModal?: any;
	showDialog?: boolean;
	shouldCloseOnClick?: boolean;
	shouldCloseOnEscapePress?: boolean;
}

const Dialog: FC<DialogProps> = memo(
	forwardRef(
		(
			{
				size = 'medium',
				name,
				variant = 'primary',
				enableScrolling = false,
				isDraggingDisabled = true,
				description,
				className,
				is = 'div',
				textOnly = false,
				showDialog = false,
				showSeparator = false,
				heading,
				initialWidth = '45%',
				initialHeight = 'fit-content',
				showCloseIcon = true,
				footer,
				closeCallback,
				shouldCloseOnClick = true,
				shouldCloseOnEscapePress = true,
				...restProps
			}: DialogProps,
			ref
		) => {
			const classes = UseStyles();
			const [enableDialog, setEnableDialog] = useState(showDialog);
			const closeModal = () => {
				if (closeCallback && enableDialog) {
					closeCallback();
				}
				setEnableDialog((state) => !state);
			};

			const internalStyles = InternalStyles();
			const { className: themedClassName, ...boxProps } = useStyleConfig(
				{ variant, size: restProps.size || 'medium' },
				pseudoSelectors,
				internalStyles
			);
			const rnd: any = useRef();
			const initialPos = {
				x: 0,
				y: 0,
				width: initialWidth,
				height: initialHeight,
			};
			return enableDialog ? (
				<Overlay
					name='Dialog Overlay'
					isShown={true}
					shouldCloseOnClick={shouldCloseOnClick}
					shouldCloseOnEscapePress={shouldCloseOnEscapePress}
					onExit={() => {
						closeCallback && closeCallback();
					}}
					display='flex'
					alignItems='center'
					justifyContent='center'>
					<Rnd
						ref={rnd}
						default={initialPos}
						bounds='parent'
						disableDragging={isDraggingDisabled}
						className={classes.rnd}>
						<Box
							{...boxProps}
							{...restProps}
							is={is}
							className={className}
							data-cy={name}
							flex='1'
							overflow='hidden'>
							<Box className={classes.dialogTitle} is='header' daya-cy='g-dialog-title'>
								{heading}

								{showCloseIcon && (
									<Box cursor={'pointer'} onClick={closeModal} data-cy='g-dialog-close'>
										<CrossIcon
											data-cy={'dialog-close'}
											width={'14'}
											height={'14'}
											name='dialog-close'
											icon='Cross-icon'
											color='#26529e'
										/>
									</Box>
								)}
							</Box>
							{!enableScrolling && !textOnly && <Box className={classes.description}>{description}</Box>}
							{!enableScrolling && textOnly && (
								<Box className={classes.description}>
									<Span className={classes.textStyle} data-cy={'dialog-description'}>
										{description}
									</Span>
								</Box>
							)}
							{enableScrolling && (
								<Box className={cx(classes.description, classes.descriptionWithScroll)}>
									<Box className={classes.scrollText} data-cy={'dialog-description'}>
										{description}
									</Box>
								</Box>
							)}
							{showSeparator && <Box className={classes.separator}></Box>}
							<Box className={classes.footer} data-cy={'dialog-footer'}>
								{footer}
							</Box>
						</Box>
					</Rnd>
				</Overlay>
			) : null;
		}
	)
);

export default Dialog;

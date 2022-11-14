import React, { FC, forwardRef, memo, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useCustomTheme } from '../../commons';
import { css } from 'glamor';
import Stack from '../Stack/Stack';
import Portal from '../Portal/Portal';
import preventBodyScroll from '../Common/PreventScroll';
import StackingOrder from '../../constants/StackingOrder';
import { Transition } from 'react-transition-group';

const CSS: any = css;
const noOper = () => {};
const ANIMATION_DURATION = 240;

const fadeInAnimation = CSS.keyframes('fadeInAnimation', {
	from: {
		opacity: 0,
	},
	to: {
		opacity: 0.6,
	},
});

const fadeOutAnimation = CSS.keyframes('fadeOutAnimation', {
	from: {
		opacity: 0.6,
	},
	to: {
		opacity: 0,
	},
});

const animationEasing = {
	standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
	deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
	acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
	sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
	spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
};

const animationStyles = (backgroundColor) => ({
	'&::before': {
		backgroundColor,
		opacity: '0.6',
		left: 0,
		top: 0,
		position: 'fixed',
		display: 'block',
		width: '100%',
		height: '100%',
		content: '" "',
	},
	'&[data-state="entering"]::before, &[data-state="entered"]::before': {
		animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`,
	},
	'&[data-state="exiting"]::before, &[data-state="exited"]::before': {
		animation: `${fadeOutAnimation} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`,
	},
});

export interface OverlayProps extends BoxProps<any> {
	children: any;
	preventBodyScrolling?: boolean;
	shouldCloseOnClick?: boolean;
	shouldCloseOnEscapePress?: boolean;
	onBeforeClose?: () => void;
	onExit?: () => void;
	onExiting?: () => void;
	onExited?: () => void;
	onEnter?: () => void;
	onEntering?: () => void;
	onEntered?: () => void;
	className?: string;
	is?: string;
	name?: string;
	isShown: boolean;
}

const Overlay: FC<OverlayProps> = memo(
	forwardRef(function Overlay(
		{
			children,
			containerProps = {},
			preventBodyScrolling = false,
			shouldCloseOnClick = true,
			shouldCloseOnEscapePress = true,
			onBeforeClose,
			onExit = noOper,
			onExiting = noOper,
			onExited = noOper,
			onEnter = noOper,
			onEntering = noOper,
			onEntered = noOper,
			isShown,
			...restProps
		}: OverlayProps,
		ref
	) {
		const theme = useCustomTheme();
		const { colors } = theme;
		const [previousActiveElement, setPreviousActiveElement] = useState<any>(null);
		const [status, setStatus] = useState(isShown ? 'entering' : 'exited');
		const containerRef = useRef<any>(null);

		function safeInvoke(fn, ...args) {
			if (typeof fn === 'function') {
				return fn(...args);
			}
		}

		useEffect(() => {
			if (isShown) {
				setStatus('entering');
			}
		}, [isShown]);

		const close = () => {
			const shouldClose = safeInvoke(onBeforeClose);
			if (shouldClose !== false) {
				setStatus('exiting');
			}
		};

		const onEsc = (event) => {
			if (event.key === 'Escape' && shouldCloseOnEscapePress) {
				close();
			}
		};

		useEffect(() => {
			if (status === 'entered') {
				setPreviousActiveElement(document.activeElement);
				bringFocusInsideOverlay();
			}

			if (status === 'entering') {
				document.body.addEventListener('keydown', onEsc, false);
			}

			if (status === 'exiting') {
				document.body.removeEventListener('keydown', onEsc, false);
				bringFocusBackToTarget();
			}
			// These missing deps *should* be okay (adding them would require other changes)
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [status]);

		// ComponentWillUnmount
		useEffect(
			() => () => {
				handleBodyScroll(false);
				document.body.removeEventListener('keydown', onEsc, false);
			},
			// These missing deps *should* be okay (adding them would require other changes)
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[]
		);

		/**
		 * Methods borrowed from BlueprintJS
		 * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
		 */
		const bringFocusInsideOverlay = () => {
			// Always delay focus manipulation to just before repaint to prevent scroll jumping
			return requestAnimationFrame(() => {
				// Container ref may be undefined between component mounting and Portal rendering
				// activeElement may be undefined in some rare cases in IE

				if (
					containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
					document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
					!isShown
				) {
					return;
				}

				const isFocusOutsideModal = !containerRef.current.contains(document.activeElement);
				if (isFocusOutsideModal) {
					// Element marked autofocus has higher priority than the other clowns
					const autofocusElement = containerRef.current.querySelector('[autofocus]');
					const wrapperElement = containerRef.current.querySelector('[tabIndex]');
					const buttonElement = containerRef.current.querySelector('button');

					if (autofocusElement) {
						autofocusElement.focus();
					} else if (wrapperElement) {
						wrapperElement.focus();
					} else if (buttonElement) {
						buttonElement.focus();
					}
				}
			});
		};

		const bringFocusBackToTarget = () => {
			return requestAnimationFrame(() => {
				if (
					previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
					containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
					document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
				) {
					return;
				}

				// Bring back focus on the target.
				const isFocusInsideModal = containerRef.current.contains(document.activeElement);
				if (document.activeElement === document.body || isFocusInsideModal) {
					previousActiveElement.focus();
				}
			});
		};

		const handleBodyScroll = (preventScroll) => {
			if (preventBodyScrolling) {
				preventBodyScroll(preventScroll);
			}
		};

		const handleEnter = (node, isAppearing) => {
			handleBodyScroll(true);
			safeInvoke(onEnter, node, isAppearing);
		};

		const handleEntering = (node, isAppearing) => {
			setStatus('entering');
			safeInvoke(onEntering, node, isAppearing);
		};

		const handleEntered = (node, isAppearing) => {
			setStatus('entered');
			safeInvoke(onEntered, node, isAppearing);
		};

		const handleExit = (node) => {
			handleBodyScroll(false);
			safeInvoke(onExit, node);
		};

		const handleExiting = (node) => {
			setStatus('exiting');
			safeInvoke(onExiting, node);
		};

		const handleExited = (node) => {
			setStatus('exited');
			safeInvoke(onExited, node);
		};

		const handleBackdropClick = (event) => {
			if (event.target !== event.currentTarget || !shouldCloseOnClick) {
				return;
			}

			close();
		};

		if (status === 'exited') {
			// isShown = false;
			return null;
		}

		return (
			<Stack value={StackingOrder.OVERLAY}>
				{(zIndex) => (
					<Portal>
						<Transition
							nodeRef={containerRef}
							appear
							unmountOnExit
							timeout={ANIMATION_DURATION}
							in={isShown && status !== 'exiting'}
							onExit={handleExit}
							onExiting={handleExiting}
							onExited={handleExited}
							onEnter={handleEnter}
							onEntering={handleEntering}
							onEntered={handleEntered}>
							{(state) => (
								<Box
									onClick={handleBackdropClick}
									ref={containerRef}
									position='fixed'
									top={0}
									left={0}
									right={0}
									bottom={0}
									zIndex={zIndex}
									data-state={state}
									{...containerProps}
									{...restProps}
									className={cx(
										'g-overlay',
										containerProps.className,
										css(animationStyles(colors.overlay)).toString()
									)}>
									{typeof children === 'function' ? children({ state, close }) : children}
								</Box>
							)}
						</Transition>
					</Portal>
				)}
			</Stack>
		);
	})
);

export default Overlay;

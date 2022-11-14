import React, {
	memo,
	forwardRef,
	useRef,
	useState,
	useEffect,
	useImperativeHandle,
	useCallback,
	useMemo,
	FC,
} from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import { PositionType } from '../../constants/Position';
import { useMergedRef } from '../../commons';
import Positioner from '../Positioner/Positioner';
import Tooltip from '../Tooltip/Tooltip';
import PopoverStateless from './PopoverStateless';
import PopoverStyles from './styles/Popover.style';
import { useCustomTheme } from '../../commons';

export interface PopoverProps {
	appearance?: 'default' | 'card';
	position?: PositionType;
	content?: any;
	isShown?: boolean;
	ref?: React.ForwardedRef<HTMLElement>;
	children?: any;
	statelessProps?: object;
	popoverProps?: any;
	className?: string;
	trigger?: 'click' | 'hover';
	display?: string;
	minWidth?: string | number;
	minHeight?: string | number;
	animationDuration?: number;
	onOpen?: () => any;
	onClose?: () => any;
	onOpenComplete?: () => any;
	onCloseComplete?: () => any;
	onBodyClick?: (any) => any;
	bringFocusInside?: boolean;
	shouldCloseOnExternalClick?: boolean;
	shouldCloseOnEscapePress?: boolean;
}
const noop = () => {};
const emptyProps = {};

// interface ErrMsgPointerIconProps {
// 	fill?: string;
// }
// const PopoverPointerIcon = ({ ...props }: ErrMsgPointerIconProps) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="59" height="43">
//     <path d="M 27.81 8.182 C 28.561 7.592 30.439 7.592 31.19 8.182 L 58.236 29.412 C 58.987 30.002 58.048 30.739 56.545 30.739 L 2.455 30.739 C 0.952 30.739 0.013 30.002 0.764 29.412 Z" fill="rgb(255, 255, 255)"></path>
//   </svg>
// );

const Popover: FC<PopoverProps> = memo(
	forwardRef(function Popover(
		{
			appearance = 'default',
			animationDuration = 300,
			bringFocusInside: shouldBringFocusInside = false,
			children,
			content,
			display,
			minHeight = 40,
			minWidth = 200,
			onBodyClick = noop,
			onClose = noop,
			onCloseComplete = noop,
			onOpen = noop,
			onOpenComplete = noop,
			position = 'bottom',
			shouldCloseOnExternalClick = true,
			shouldCloseOnEscapePress = true,
			statelessProps = emptyProps,
			trigger = 'click',
			...props
		},
		forwardedRef: any
	) {
		const [isShown, setIsShown] = useState(props.isShown);
		const popoverNode = useRef<any>(null);
		const setPopoverNode: any = useMergedRef(popoverNode, null);
		const targetRef = useRef<any>(null);
		const setTargetRef: any = useMergedRef(targetRef, null);

		const bringFocusInside = useCallback(
			(e) => {
				if (isShown && e) {
					e.preventDefault();
				}
				// Always delay focus manipulation to just before repaint to prevent scroll jumping

				return requestAnimationFrame(() => {
					// Container ref may be undefined between component mounting and Portal rendering

					// ActiveElement may be undefined in some rare cases in IE

					if (
						popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
						document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
						!isShown
					) {
						return;
					}

					const isFocusOutsideModal = !popoverNode.current.contains(document.activeElement);
					if (isFocusOutsideModal) {
						// Element marked autofocus has higher priority than the other elements
						const autofocusElement = popoverNode.current.querySelector('[autofocus]:not([disabled])');
						if (autofocusElement) {
							// Return early to avoid unnecessary dom queries
							return autofocusElement.focus();
						}

						const wrapperElement = popoverNode.current.querySelector('[tabIndex]:not([disabled])');
						if (wrapperElement) {
							return wrapperElement.focus();
						}

						const buttonElements = popoverNode.current.querySelectorAll(
							'button:not([disabled]), a:not([disabled]), [role="menuitem"]:not([disabled]), [role="menuitemradio"]:not([disabled])'
						);
						if (buttonElements.length > 0) {
							return buttonElements[0].focus();
						}
					}
				});
			},
			[isShown, popoverNode.current]
		);

		const bringFocusBackToTarget = useCallback(() => {
			return requestAnimationFrame(() => {
				if (
					targetRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
					popoverNode.current == null || // eslint-disable-line eqeqeq, no-eq-null
					document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
				) {
					return;
				}

				const isFocusInsideModal = popoverNode.current.contains(document.activeElement);

				// Bring back focus on the target.
				if (document.activeElement === document.body || isFocusInsideModal) {
					targetRef.current.focus();
				}
			});
		}, [popoverNode.current, targetRef.current]);

		const open = useCallback(() => {
			if (isShown) {
				return;
			}

			setIsShown(true);
			onOpen();
		}, [setIsShown, onOpen, isShown]);

		const close = useCallback(() => {
			if (!isShown) {
				return;
			}

			setIsShown(false);
			bringFocusBackToTarget();
			onClose();
		}, [setIsShown, bringFocusBackToTarget, onClose, isShown]);

		useImperativeHandle(
			forwardedRef,
			() => ({
				open,
				close,
			}),
			[open, close]
		);

		// If `props.isShown` is a boolean, treat as a controlled component
		// `open` and `close` should be applied when it changes
		useEffect(() => {
			if (typeof props.isShown !== 'boolean' || props.isShown === isShown) {
				return;
			}

			if (props.isShown) {
				open();
			} else {
				close();
			}
		}, [props.isShown, isShown]);

		const toggle = useCallback(() => {
			return isShown ? close() : open();
		}, [isShown, close, open]);

		const handleOpenHover = useMemo(() => {
			return trigger === 'hover' ? open : undefined;
		}, [trigger, open]);

		const handleCloseHover = useMemo(() => {
			return trigger === 'hover' ? close : undefined;
		}, [trigger, close]);

		const handleKeyDown = useCallback(
			(event) => {
				return event.key === 'ArrowDown' ? bringFocusInside(event) : undefined;
			},
			[bringFocusInside]
		);

		const onEsc = useCallback(
			(event) => {
				return event.key === 'Escape' && shouldCloseOnEscapePress ? close() : undefined;
			},
			[shouldCloseOnEscapePress, close]
		);

		const handleBodyClick = useCallback(
			(event) => {
				// Ignore clicks on the popover or button
				if (targetRef.current && targetRef.current.contains(event.target)) {
					return;
				}

				if (popoverNode.current && popoverNode.current.contains(event.target)) {
					return;
				}

				// Notify body click
				onBodyClick(event);

				if (shouldCloseOnExternalClick !== false) {
					close();
				}
			},
			[onBodyClick, shouldCloseOnExternalClick, close, targetRef.current, popoverNode.current]
		);

		const handleOpenComplete = useCallback(() => {
			//changed func call of bringFocusInside check its working
			//@typescript-eslint/no-unused-expressions
			if (shouldBringFocusInside) bringFocusInside;
			onOpenComplete();
		}, [shouldBringFocusInside, bringFocusInside, onOpenComplete]);

		useEffect(() => {
			if (isShown) {
				document.body.addEventListener('click', handleBodyClick, false);
				document.body.addEventListener('keydown', onEsc, false);
			} else {
				document.body.removeEventListener('click', handleBodyClick, false);
				document.body.removeEventListener('keydown', onEsc, false);
			}

			return () => {
				document.body.removeEventListener('click', handleBodyClick, false);
				document.body.removeEventListener('keydown', onEsc, false);
			};
		}, [isShown, handleBodyClick, onEsc]);

		const renderTarget = useCallback(
			({ getRef, isShown }) => {
				const isTooltipInside = children && children.type === Tooltip;

				const getTargetRef = (ref) => {
					setTargetRef(ref);
					getRef(ref);
				};

				/**
				 * When a function is passed, you can control the Popover manually.
				 */
				if (typeof children === 'function') {
					return children({
						getRef: getTargetRef,
						isShown,
						toggle,
					});
				}

				const popoverTargetProps = {
					onClick: toggle,
					onMouseEnter: handleOpenHover,
					onKeyDown: handleKeyDown,
					role: 'button',
					'aria-expanded': isShown,
					'aria-haspopup': true,
				};

				/**
				 * Tooltips can be used within a Popover (not the other way around)
				 * In this case the children is the Tooltip instead of a button.
				 * Pass the properties to the Tooltip and let the Tooltip
				 * add the properties to the target.
				 */
				if (isTooltipInside) {
					return React.cloneElement(children, {
						popoverProps: {
							getTargetRef,
							isShown,

							// These propeties will be spread as `popoverTargetProps`
							// in the Tooltip component.
							...popoverTargetProps,
						},
					});
				}

				/**
				 * With normal usage only popover props end up on the target.
				 */
				return React.cloneElement(children, {
					ref: getTargetRef,
					...popoverTargetProps,
				});
			},
			[children, setTargetRef, toggle, handleOpenHover, handleKeyDown]
		);

		// If `props.isShown` is a boolean, popover is controlled manually, not via mouse events
		const shown = typeof props.isShown === 'boolean' ? props.isShown : isShown;

		const contentToRender = useMemo(() => {
			return typeof content === 'function' ? content({ close }) : content;
		}, [content, close]);

		const theme: any = useCustomTheme();
		const classes = PopoverStyles({ theme: theme as any });

		return (
			<Positioner
				target={renderTarget}
				isShown={shown}
				position={position}
				animationDuration={animationDuration}
				onOpenComplete={handleOpenComplete}
				onCloseComplete={onCloseComplete}
				variant={'other'}>
				{({ css, getRef, state, style }) => (
					<PopoverStateless
						appearance={appearance}
						ref={(ref) => {
							setPopoverNode(ref);
							getRef(ref);
						}}
						data-state={state}
						display={display}
						minWidth={minWidth}
						minHeight={minHeight}
						{...statelessProps}
						className={cx(css ? glamorCss(css).toString() : undefined, classes.popover_container)}
						// Overwrite `statelessProps.style` since we are including it via className
						style={style}
						onMouseLeave={handleCloseHover}>
						{contentToRender}
					</PopoverStateless>
				)}
			</Positioner>
		);
	})
);

export default Popover;

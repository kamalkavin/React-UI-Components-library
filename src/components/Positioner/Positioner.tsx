import React, { FC, memo, useCallback, useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { PositionType } from '../../constants/Position';
import StackingOrder from '../../constants/StackingOrder';
import { useMergedRef, usePrevious } from '../../commons';
import Portal from '../Portal/Portal';
import Stack from '../Stack/Stack';
import getPosition from './GetPosition';
import { getCSS } from './GetTooltipCSS';

interface PositionerProps {
	isShown?: boolean;
	variant?: string;
	children: (arg1: any) => any;
	bodyOffset?: number;
	targetOffset?: number;
	target: (arg1: any) => any;
	initialScale?: number;
	animationDuration?: number;
	onCloseComplete?: () => any;
	onOpenComplete?: () => any;
	position?: PositionType;
	showArrow?: boolean;
}

const colorCode = { error: '#ff4c3e', infotext: '#3c4850' };

const noop = () => {};

interface IinitialDimensions {
	[key: string]: any;
}

const initialDimensions: IinitialDimensions = {
	left: 0,
	top: 0,
	height: 0,
	width: 0,
	parentWidth: 0,
	transformOrigin: null,
};

const Positioner: FC<PositionerProps> = memo(function Positioner(props) {
	const {
		target,
		variant,
		isShown,
		showArrow = true,
		children,
		initialScale = 0.9,
		animationDuration = 300,
		position = 'bottom',
		bodyOffset = 6,
		targetOffset = 6,
		onOpenComplete = noop,
		onCloseComplete = noop,
	} = props;
	const [dimensions, setDimensions] = useState(initialDimensions);
	const [finalPosition, setFinalPosition] = useState(position);
	const previousDimensions = usePrevious(dimensions, initialDimensions);
	const latestAnimationFrame = useRef<any>();
	const transitionState = useRef<any>();
	const positionerRef = useRef<any>();
	const targetRef = useRef<any>();
	const setTargetRef = useMergedRef(targetRef, null);
	const getRef = useMergedRef(positionerRef, null);

	const update = useCallback(
		(prevHeight = 0, prevWidth = 0) => {
			if (!isShown || !targetRef.current || !positionerRef.current) return;

			const targetRect = targetRef.current.getBoundingClientRect();
			const parentWidth = targetRef.current.offsetWidth;

			const hasEntered = positionerRef.current.getAttribute('data-state') === 'entered';

			const viewportHeight = document.documentElement.clientHeight;
			const viewportWidth = document.documentElement.clientWidth;

			let height;
			let width;
			if (hasEntered) {
				// Only when the animation is done should we opt-in to `getBoundingClientRect`
				const positionerRect = positionerRef.current.getBoundingClientRect();

				// https://github.com/segmentio/evergreen/issues/255
				// We need to ceil the width and height to prevent jitter when
				// the window is zoomed (when `window.devicePixelRatio` is not an integer)
				height = Math.round(positionerRect.height);
				width = Math.round(positionerRect.width);
			} else {
				// When the animation is in flight use `offsetWidth/Height` which
				// does not calculate the `transform` property as part of its result.
				// There is still change on jitter during the animation (although unoticable)
				// When the browser is zoomed in — we fix this with `Math.max`.
				height = Math.max(positionerRef.current.offsetHeight, prevHeight);
				width = Math.max(positionerRef.current.offsetWidth, prevWidth);
			}

			const { rect, fposition, transformOrigin } = getPosition({
				position,
				targetRect,
				targetOffset,
				dimensions: {
					height,
					width,
				},
				viewport: {
					width: viewportWidth,
					height: viewportHeight,
				},
				viewportOffset: bodyOffset,
				variant: variant,
			});
			setFinalPosition(fposition);
			setDimensions({
				left: rect.left,
				top: rect.top,
				height,
				width,
				transformOrigin,
				parentWidth: parentWidth,
			});
		},
		[bodyOffset, isShown, position, targetOffset, finalPosition]
	);

	// Call `update` whenever the component has "entered" and dimensions change
	useEffect(() => {
		if (transitionState.current === 'entered') {
			latestAnimationFrame.current = requestAnimationFrame(() => {
				update(previousDimensions.height, previousDimensions.width);
			});
		}

		return () => {
			if (latestAnimationFrame.current) {
				cancelAnimationFrame(latestAnimationFrame.current);
			}
		};
	}, [previousDimensions.height, previousDimensions.width, update]);

	const handleEnter = () => {
		transitionState.current = 'entered';
		update();
	};

	const handleExited = () => {
		transitionState.current = 'exited';
		setDimensions(initialDimensions);
		onCloseComplete();
	};

	return (
		<Stack value={StackingOrder.POSITIONER}>
			{(zIndex) => {
				return (
					<React.Fragment>
						{target({ getRef: setTargetRef, isShown })}

						<Transition
							nodeRef={positionerRef}
							appear
							in={isShown}
							timeout={animationDuration}
							onEnter={handleEnter}
							onEntered={onOpenComplete}
							onExited={handleExited}
							unmountOnExit>
							{(state) => (
								<Portal>
									{children({
										top: dimensions.top,
										left: dimensions.left,
										state,
										zIndex,
										css: getCSS({
											initialScale,
											animationDuration,
											finalPosition,
											dimensions,
											variant,
											showArrow,
										}),
										style: {
											transformOrigin: dimensions.transformOrigin,
											left: dimensions.left,
											top: dimensions.top,
											zIndex,
											border:
												variant === 'error'
													? `1px solid ${colorCode.error}`
													: variant === 'infotext'
													? `1px solid ${colorCode.infotext}`
													: variant === 'propertyTip'
													? 'none'
													: '1px solid black',
										},
										getRef,
										animationDuration,
									})}
								</Portal>
							)}
						</Transition>
					</React.Fragment>
				);
			}}
		</Stack>
	);
});

export default Positioner;

import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import { useId } from '../../commons';
// import debounce from 'lodash.debounce';
import TooltipStateless from './TooltipStateless';
import Positioner from '../Positioner/Positioner';
import { PositionType } from '../../constants/Position';
import { debounceFunction } from '../../utils/utils';
export interface TooltipProps {
	appearance?: 'default' | 'card';
	variant?: string;
	position?: PositionType;
	content?: React.ReactNode;
	hideDelay?: number;
	showDelay?: number;
	isShown?: boolean;
	ref?: React.ForwardedRef<HTMLElement>;
	children?: any;
	statelessProps?: object;
	popoverProps?: any;
	className?: string;
	showArrow?: boolean;
}

const emptyProps = {};

const Tooltip: FC<TooltipProps> = memo(function Tooltip(props) {
	const {
		variant = 'text',
		appearance = 'default',
		position = 'bottom',
		content,
		hideDelay = 120,
		showDelay = 0,
		isShown: propIsShown,
		children,
		statelessProps = emptyProps,
		showArrow = true,
	} = props;
	const id = useId('tooltip', 'Tooltip');
	const [isShown, setIsShown] = useState<any>(false);
	const [isShownByTarget, setIsShownByTarget] = useState(false);
	const closeTimer = useRef<any>(undefined);

	const mouseLeftTarget = () => {
		setIsShownByTarget(false);
	};

	const handleMouseLeaveTarget = useCallback(debounceFunction(mouseLeftTarget, hideDelay), []);

	const hide = () => {
		setIsShown(false);
		// Clean up any timeouts that may have been triggered from `showDelay`
		clearTimeout(closeTimer.current);
	};

	const handleHide = useCallback(debounceFunction(hide, hideDelay), []);

	useEffect(() => {
		setIsShown(propIsShown);
	}, [propIsShown]);

	useEffect(() => {
		setIsShown(false);
		setTimeout(() => {
			setIsShown(propIsShown);
		}, 500);
	}, [content]);

	// Component will unmount
	useEffect(
		() => () => {
			clearTimeout(closeTimer.current);
		},
		[]
	);

	const show = () => {
		if (isShown) return;

		if (!showDelay) {
			setIsShown(true);
			return;
		}

		clearTimeout(closeTimer.current);
		closeTimer.current = window.setTimeout(() => {
			setIsShown(true);
		}, showDelay);
	};

	const renderTarget = ({ getRef }) => {
		const tooltipTargetProps = {
			onMouseEnter: show,
			onMouseLeave: handleHide,
			'aria-describedby': 'G-Tooltip',
		};

		/**
		 * With normal usage only the props for a Tooltip are passed to the target.
		 */
		return React.cloneElement(children, {
			...tooltipTargetProps,
			ref: (ref) => {
				getRef(ref);
			},
		});
	};

	// eslint-disable-next-line react/prop-types
	const isPopoverShown = () => props.popoverProps && props.popoverProps.isShown;

	const handleMouseEnterTarget = () => {
		if (propIsShown !== undefined) {
			isShown || isShownByTarget ? setIsShownByTarget(true) : setIsShownByTarget(false);
		} else {
			setIsShownByTarget(true);
		}
	};

	let shown = (isShown || isShownByTarget) && !isPopoverShown();

	// Tooltip was explicitly set to not be shown
	// if (propIsShown === false) {
	//     shown = false
	// }
	return (
		<Positioner
			target={renderTarget}
			isShown={shown && content}
			position={position}
			animationDuration={160}
			variant={variant}
			showArrow={showArrow}>
			{({ css, getRef, state, style }) => (
				<TooltipStateless
					id={id}
					appearance={appearance}
					variant={variant}
					ref={getRef}
					data-state={state}
					style={style}
					onMouseEnter={handleMouseEnterTarget}
					onMouseLeave={handleMouseLeaveTarget}
					{...statelessProps}
					className={cx(css ? glamorCss(css).toString() : undefined)}>
					{content}
				</TooltipStateless>
			)}
		</Positioner>
	);
});

export default Tooltip;

/**
 * Function to add CSS to tooltip based on its position
 * @param {animationDuration} animationDuration
 * @param {initialScale} initialScale
 * @param {finalPosition} finalPosition
 * @param {dimensions} dimensions
 * @param {variant} variant
 */

const getCSS = function ({ animationDuration, initialScale, finalPosition, dimensions, variant, showArrow }) {
	const variantCheck = ['text', 'infotext', 'error'];
	const animationEasing = {
		spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
	};
	const checkTextVariant = () => {
		return variantCheck.includes(variant);
	};

	const arrowStyles = showArrow
		? {
				'&:before': {
					content: "''",
					display: 'block',
					position: 'absolute',
					bottom: finalPosition == 'bottom' ? '100%' : 'auto',
					left:
						finalPosition == 'left'
							? '100%'
							: finalPosition == 'right'
							? 'auto'
							: checkTextVariant()
							? `${dimensions.width / 2 - 1}px`
							: `${dimensions.width / 2 - 1}px`,
					top:
						finalPosition == 'top'
							? '100%'
							: finalPosition == 'bottom'
							? 'auto'
							: variant === 'error'
							? dimensions.height > 40
								? '35%'
								: '30%'
							: checkTextVariant()
							? '40%'
							: `${dimensions.height / 2 - 1}px`,
					right: finalPosition == 'right' ? '100%' : 'auto',
					borderWidth: checkTextVariant() ? '5px' : '7px',
					borderStyle: 'solid',
					width: '0',
					height: '0',
					border: '7px solid transparent',
					borderColor:
						variant == 'error'
							? finalPosition == 'bottom'
								? 'transparent transparent #ff4c3e transparent'
								: finalPosition == 'top'
								? '#ff4c3e transparent transparent transparent'
								: finalPosition == 'right'
								? 'transparent #ff4c3e transparent transparent'
								: 'transparent transparent transparent #ff4c3e'
							: variant === 'other'
							? finalPosition == 'bottom'
								? 'transparent transparent black transparent'
								: finalPosition == 'top'
								? 'black transparent transparent transparent'
								: finalPosition == 'right'
								? 'transparent black transparent transparent'
								: 'transparent transparent transparent black'
							: 'transparent',
				},
				'&:after': {
					content: "''",
					position: 'absolute',
					display: 'block',
					bottom: finalPosition == 'bottom' || finalPosition == 'bottom-left' ? '100%' : 'auto',
					left:
						finalPosition == 'left'
							? '100%'
							: finalPosition == 'right'
							? 'auto'
							: checkTextVariant()
							? '45%'
							: variant === 'propertyTip'
							? '50%'
							: `${dimensions.parentWidth / 2}px`,
					top:
						finalPosition == 'top'
							? '100%'
							: finalPosition == 'bottom' || finalPosition == 'bottom-left'
							? 'auto'
							: variant === 'text' || variant === 'error'
							? '25%'
							: variant === 'infotext'
							? dimensions.height > 90
								? '40%'
								: dimensions.height > 40
								? '30%'
								: '23%'
							: `${dimensions.height / 2}px`,
					right: finalPosition == 'right' ? '100%' : 'auto',
					// marginLeft: '-5px',
					borderWidth: checkTextVariant() ? '5px' : '7px',
					borderStyle: 'solid',
					borderColor:
						variant === 'error'
							? 'transparent #ff4c3e transparent transparent'
							: variant === 'other' || variant === 'propertyTip'
							? finalPosition == 'bottom'
								? 'transparent transparent white transparent !important'
								: finalPosition == 'top'
								? 'white transparent transparent transparent !important'
								: finalPosition == 'right'
								? 'transparent white transparent transparent !important'
								: 'transparent transparent transparent white !important'
							: finalPosition == 'bottom' || finalPosition == 'bottom-left'
							? variant === 'infotext'
								? 'transparent  transparent #3c4850 transparent !important'
								: 'transparent transparent black transparent !important'
							: finalPosition == 'top'
							? variant === 'infotext'
								? '#3c4850 transparent  transparent transparent !important'
								: 'black transparent transparent transparent !important'
							: finalPosition == 'right'
							? variant === 'infotext'
								? 'transparent #3c4850 transparent transparent !important'
								: 'transparent black transparent transparent !important'
							: variant === 'infotext'
							? 'transparent  transparent transparent #3c4850 !important'
							: 'transparent transparent transparent black !important',
					width: '0',
					height: '0',
					border: variant === 'infotext' ? '10px solid transparent' : '6px solid transparent',
				},
		  }
		: {};

	return {
		position: 'fixed',
		opacity: 0,
		fontSize: '0.8rem',
		transitionTimingFunction: animationEasing.spring,
		transitionDuration: `${animationDuration}ms`,
		transitionProperty: 'opacity, transform',
		transform: `scale(${initialScale}) translateY(-1px)`,
		'&[data-state="entering"], &[data-state="entered"]': {
			opacity: 1,
			visibility: 'visible',
			transform: 'scale(1)',
		},
		'&[data-state="exiting"]': {
			opacity: 0,
			transform: 'scale(1)',
		},
		color: 'white',
		// To set the tooltip arrow based on its position
		...arrowStyles,
	};
};

export { getCSS };

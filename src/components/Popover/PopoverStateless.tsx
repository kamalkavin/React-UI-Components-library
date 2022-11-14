import React, { memo, forwardRef, FC } from 'react';
import useInternalStyles from './styles/PopoverStateless.style';
import { useStyleConfig } from '../../commons';
import Div, { DivProps } from '../Layers/Div';

const pseudoSelectors = {};
export interface PopoverStatelessProps extends DivProps {
	appearance: 'default' | 'card';
	variant?: string;
	ref?: React.ForwardedRef<HTMLElement>;
	children?: React.ReactNode;
	is?: any;
	className?: string;
	onMouseLeave?: () => void;
	style?: any;
}

const PopoverStateless: FC<PopoverStatelessProps> = memo(
	forwardRef(function PopoverStateless(props, ref) {
		const internalStyles: any = useInternalStyles();
		const { variant = 'primary', appearance, children, ...restProps } = props;
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		const { color, ...themedProps } = boxProps;

		return (
			<Div ref={ref} {...themedProps} {...restProps} {...boxProps}>
				{children}
			</Div>
		);
	})
);

export default PopoverStateless;

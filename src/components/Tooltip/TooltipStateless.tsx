import React, { FC, forwardRef, memo } from 'react';
import { Paragraph } from '..';
import { useStyleConfig, useCustomTheme } from '../../commons';
import Div from '../Layers/Div';
import Card from '../Layers/Card';
import useInternalStyles from './styles/Tooltip.style';
import TooltipStatelessStyles from './styles/TooltipStateless.style';

const pseudoSelectors = {};
export interface TooltipStatelessProps {
	appearance: 'default' | 'card';
	variant?: string;
	ref?: React.ForwardedRef<HTMLElement>;
	children?: React.ReactNode;
	is?: any;
	className?: string;
	id?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	style?: any;
}

const TooltipStateless: FC<TooltipStatelessProps> = memo(
	forwardRef(function TooltipStateless(props, ref) {
		const internalStyles: any = useInternalStyles();
		const { variant, appearance, children, ...restProps } = props;
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		const theme = useCustomTheme();
		const classes = TooltipStatelessStyles({ theme: theme as any });

		const { color, ...themedProps } = boxProps;
		themedProps['marginLeft'] = '8px';

		let child: {} | null | undefined;
		if (typeof children === 'string') {
			child = (
				<Paragraph
					className={variant !== 'error' && classes.infoBoxStack}
					size={400}
					{...boxProps}
					dangerouslySetInnerHTML={{
						__html: children,
					}}></Paragraph>
			);
		} else {
			child = children;
			child = <Card>{children}</Card>;
		}

		return (
			<Div ref={ref} {...themedProps} {...restProps}>
				{child}
			</Div>
		);
	})
);

export default TooltipStateless;

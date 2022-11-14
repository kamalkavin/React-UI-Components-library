import React, { FC, forwardRef, memo } from 'react';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import { useCustomTheme } from '../../commons';

const emptyObject = {};

export interface TextProps extends BoxProps<any> {
	className?: string;
	color?: string;
	size?: 300 | 400 | 500 | 600 | 700 | 800;
	children?: any;
}

const Span: FC<TextProps> = memo(
	forwardRef(function Text({ className, children, color = '#000000', size = 400, ...rest }: TextProps, ref) {
		const theme = useCustomTheme();
		const { colors } = theme;

		const themedColor = colors[color] || (colors.text && colors.text[color]) || color;

		const textStyle = useStyleConfig({ size }, emptyObject, emptyObject);

		return (
			<Box is='span' ref={ref} {...textStyle} color={themedColor} className={className} {...rest}>
				{children}
			</Box>
		);
	})
);

export default Span;

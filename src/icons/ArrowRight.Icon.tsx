import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}
const svgIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g transform="translate(0.024 0) rotate(90 8.976 9)"><path fill-rule="evenodd" d="M 0.143 9.237 L 0.945 10.032 C 1.135 10.221 1.443 10.221 1.633 10.032 L 7.922 3.8 L 7.922 17.518 C 7.922 17.784 8.14 18 8.409 18 L 9.544 18 C 9.812 18 10.03 17.784 10.03 17.518 L 10.03 3.8 L 16.319 10.032 C 16.509 10.221 16.817 10.221 17.007 10.032 L 17.81 9.237 C 18 9.049 18 8.743 17.81 8.555 L 9.32 0.141 C 9.13 -0.047 8.822 -0.047 8.632 0.141 L 0.143 8.555 C -0.048 8.743 -0.048 9.049 0.143 9.237 Z"/></g></svg>';

const ArrowRightIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default ArrowRightIcon;

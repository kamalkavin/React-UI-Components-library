import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
	customClass?: string;
}
const svgIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"> <path d="M 9.038 0.219 L 16.392 7.865 C 16.625 8.109 16.625 8.505 16.392 8.75 L 15.408 9.781 C 15.174 10.026 14.797 10.026 14.563 9.781 L 8.615 3.609 L 2.668 9.781 C 2.434 10.026 2.056 10.026 1.823 9.781 L 0.839 8.75 C 0.605 8.505 0.605 8.109 0.839 7.865 L 8.193 0.219 C 8.427 -0.026 8.804 -0.026 9.038 0.219 Z"></path> </svg>';

const ChevronUpIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default ChevronUpIcon;

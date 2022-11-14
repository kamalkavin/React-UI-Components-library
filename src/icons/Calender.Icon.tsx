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
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><desc>Calender</desc><defs></defs><g transform="translate(128 128) scale(0.72 0.72)" style=""><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><path d="M 84.581 36.549 H 5.418 c -2.209 0 -4 -1.791 -4 -4 V 15.238 c 0 -4.425 3.601 -8.026 8.026 -8.026 h 71.111 c 4.425 0 8.025 3.601 8.025 8.026 v 17.311 C 88.581 34.758 86.79 36.549 84.581 36.549 z M 9.424 28.549 h 71.157 V 15.238 L 9.444 15.212 L 9.424 28.549 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 79.988 90 H 10.011 c -4.738 0 -8.593 -3.854 -8.593 -8.593 V 32.549 c 0 -2.209 1.791 -4 4 -4 h 79.163 c 2.209 0 4 1.791 4 4 v 48.858 C 88.581 86.146 84.727 90 79.988 90 z M 9.418 36.549 v 44.858 c 0 0.327 0.266 0.593 0.593 0.593 h 69.977 c 0.327 0 0.593 -0.266 0.593 -0.593 V 36.549 H 9.418 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 68.78 22.425 c -2.209 0 -4 -1.791 -4 -4 V 4 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 14.425 C 72.78 20.634 70.989 22.425 68.78 22.425 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 21.219 22.425 c -2.209 0 -4 -1.791 -4 -4 V 4 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 14.425 C 25.219 20.634 23.428 22.425 21.219 22.425 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></g></svg>';

const CalenderIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default CalenderIcon;

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
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 14"><path d="M 12.71 0.694 C 12.461 0.265 12.003 0 11.507 0 L 5.014 0 C 4.519 0 4.061 0.265 3.812 0.694 L 0.565 6.294 C 0.313 6.729 0.313 7.268 0.565 7.706 L 3.812 13.306 C 4.061 13.735 4.519 14 5.014 14 L 11.507 14 C 12.003 14 12.461 13.735 12.71 13.306 L 15.957 7.706 C 16.209 7.271 16.209 6.732 15.957 6.294 Z M 15.154 7.236 L 11.907 12.836 C 11.823 12.979 11.67 13.067 11.507 13.067 L 5.014 13.067 C 4.849 13.067 4.696 12.979 4.614 12.836 L 1.368 7.236 C 1.284 7.09 1.284 6.91 1.368 6.767 L 4.614 1.167 C 4.696 1.021 4.849 0.933 5.014 0.933 L 11.507 0.933 C 11.672 0.933 11.826 1.021 11.907 1.164 L 15.154 6.764 C 15.238 6.91 15.238 7.09 15.154 7.236 Z M 11.009 9.517 L 10.762 9.765 C 10.626 9.902 10.406 9.902 10.27 9.765 L 8.261 7.744 L 6.252 9.765 C 6.116 9.902 5.896 9.902 5.759 9.765 L 5.513 9.517 C 5.377 9.38 5.377 9.158 5.513 9.021 L 7.522 7 L 5.513 4.979 C 5.377 4.842 5.377 4.62 5.513 4.483 L 5.759 4.235 C 5.896 4.098 6.116 4.098 6.252 4.235 L 8.261 6.256 L 10.27 4.235 C 10.406 4.098 10.626 4.098 10.762 4.235 L 11.009 4.483 C 11.145 4.62 11.145 4.842 11.009 4.979 L 9 7 L 11.009 9.021 C 11.142 9.158 11.142 9.38 11.009 9.517 Z"></path></svg>';

const ErrorIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default ErrorIcon;

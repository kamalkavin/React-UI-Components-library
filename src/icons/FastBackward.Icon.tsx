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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16"><path d="M 10.41 13.613 L 4.448 7.832 C 4.259 7.648 4.259 7.352 4.448 7.168 L 10.41 1.387 C 10.599 1.203 10.904 1.203 11.093 1.387 L 11.881 2.152 C 12.074 2.34 12.07 2.641 11.873 2.82 L 7.971 6.484 L 17.968 6.484 C 18.233 6.484 18.45 6.695 18.45 6.953 L 18.45 8.047 C 18.45 8.305 18.233 8.516 17.968 8.516 L 7.971 8.516 L 11.873 12.176 C 12.066 12.359 12.07 12.66 11.881 12.844 L 11.093 13.609 C 10.904 13.797 10.599 13.797 10.41 13.613 Z M 2.539 14.531 L 2.539 0.469 C 2.539 0.211 2.322 0 2.057 0 L 0.932 0 C 0.667 0 0.45 0.211 0.45 0.469 L 0.45 14.531 C 0.45 14.789 0.667 15 0.932 15 L 2.057 15 C 2.322 15 2.539 14.789 2.539 14.531 Z" fill="rgb(85, 101, 111)"></path></svg>';

const FastBackwardIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default FastBackwardIcon;

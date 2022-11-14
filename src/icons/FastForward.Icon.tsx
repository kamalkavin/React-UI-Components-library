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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16"><path d="M 9.96 13.613 L 3.998 7.832 C 3.809 7.648 3.809 7.352 3.998 7.168 L 9.96 1.387 C 10.149 1.203 10.454 1.203 10.643 1.387 L 11.431 2.152 C 11.624 2.34 11.62 2.641 11.423 2.82 L 7.521 6.484 L 17.518 6.484 C 17.783 6.484 18 6.695 18 6.953 L 18 8.047 C 18 8.305 17.783 8.516 17.518 8.516 L 7.521 8.516 L 11.423 12.176 C 11.616 12.359 11.62 12.66 11.431 12.844 L 10.643 13.609 C 10.454 13.797 10.149 13.797 9.96 13.613 Z M 2.089 14.531 L 2.089 0.469 C 2.089 0.211 1.872 0 1.607 0 L 0.482 0 C 0.217 0 0 0.211 0 0.469 L 0 14.531 C 0 14.789 0.217 15 0.482 15 L 1.607 15 C 1.872 15 2.089 14.789 2.089 14.531 Z" transform="translate(0.45 0) rotate(180 9 7.5)" fill="rgb(85, 101, 111)"></path></svg>';

const FastForwardIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default FastForwardIcon;

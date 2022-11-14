import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
	variant?: 'blue' | 'default';
}
const svgIcon =
	'<svg viewBox="0 0 21 21" preserveAspectRatio="none"><path d="M 10.5 1.768 C 15.283 1.768 19.21 5.642 19.21 10.477 C 19.21 15.287 15.314 19.187 10.5 19.187 C 5.692 19.187 1.79 15.293 1.79 10.477 C 1.79 5.671 5.686 1.768 10.5 1.768 Z M 10.5 0.477 C 4.978 0.477 0.5 4.956 0.5 10.477 C 0.5 16.001 4.978 20.477 10.5 20.477 C 16.022 20.477 20.5 16.001 20.5 10.477 C 20.5 4.956 16.022 0.477 10.5 0.477 Z M 9.048 14.348 L 9.532 14.348 L 9.532 9.51 L 9.048 9.51 C 8.781 9.51 8.565 9.293 8.565 9.026 L 8.565 8.703 C 8.565 8.436 8.781 8.219 9.048 8.219 L 10.984 8.219 C 11.251 8.219 11.468 8.436 11.468 8.703 L 11.468 14.348 L 11.952 14.348 C 12.219 14.348 12.435 14.565 12.435 14.832 L 12.435 15.155 C 12.435 15.422 12.219 15.639 11.952 15.639 L 9.048 15.639 C 8.781 15.639 8.565 15.422 8.565 15.155 L 8.565 14.832 C 8.565 14.565 8.781 14.348 9.048 14.348 Z M 10.5 4.671 C 9.787 4.671 9.21 5.249 9.21 5.961 C 9.21 6.674 9.787 7.251 10.5 7.251 C 11.213 7.251 11.79 6.674 11.79 5.961 C 11.79 5.249 11.213 4.671 10.5 4.671 Z"></path></svg>';

const InfoIcon: FC<IconProps> = memo(({ width, height, name, color, variant, ...rest }: IconProps) => {
	if (!color) {
		if (variant == 'blue') {
			color = '#3272d8';
		} else if (variant == 'default') {
			color = '#000000';
		}
	}
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default InfoIcon;

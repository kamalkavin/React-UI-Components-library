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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 Z M 8 14.968 C 4.172 14.968 1.032 11.869 1.032 8 C 1.032 4.172 4.131 1.032 8 1.032 C 11.828 1.032 14.968 4.131 14.968 8 C 14.968 11.828 11.869 14.968 8 14.968 Z M 12.569 6.098 L 6.747 11.873 C 6.595 12.024 6.35 12.023 6.199 11.871 L 3.429 9.078 C 3.279 8.927 3.28 8.682 3.431 8.531 L 3.706 8.258 C 3.858 8.108 4.103 8.109 4.254 8.261 L 6.479 10.504 L 11.751 5.274 C 11.903 5.123 12.148 5.124 12.298 5.276 L 12.571 5.551 C 12.721 5.702 12.72 5.947 12.569 6.098 Z"></path></svg>';

const ValidatedIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default ValidatedIcon;

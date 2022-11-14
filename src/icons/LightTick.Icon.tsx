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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><g transform = "translate(0.028 0.517)"><g><path d="M 16.654 0.136 L 5.302 10.97 L 1.289 7.14 C 1.099 6.958 0.791 6.958 0.601 7.14 L 0.142 7.577 C -0.047 7.759 -0.047 8.053 0.142 8.234 L 4.958 12.83 C 5.148 13.012 5.456 13.012 5.646 12.83 L 17.801 1.23 C 17.991 1.049 17.991 0.755 17.801 0.574 L 17.342 0.136 C 17.152 -0.045 16.844 -0.045 16.654 0.136 Z"></path></g></g></svg>';

const LightTickIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default LightTickIcon;

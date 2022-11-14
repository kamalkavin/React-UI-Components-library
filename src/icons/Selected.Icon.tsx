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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M 10.297 0.424 L 3.289 8.02 L 0.812 5.334 C 0.694 5.207 0.504 5.207 0.387 5.334 L 0.104 5.641 C -0.013 5.768 -0.013 5.975 0.104 6.102 L 3.077 9.324 C 3.194 9.451 3.384 9.451 3.502 9.324 L 11.005 1.191 C 11.122 1.064 11.122 0.858 11.005 0.731 L 10.722 0.424 C 10.604 0.297 10.414 0.297 10.297 0.424 Z"></path></svg>';
const SelectedIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default SelectedIcon;

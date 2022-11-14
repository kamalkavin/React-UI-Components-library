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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="8 4 10 14"><g id="Layer_1"><title>Layer 1</title><line id="svg_2" y2="11" x2="16" y1="5" x1="10" stroke="#000" fill="none" stroke-width="2"></line><line x1="16" y1="11" id="svg_4" y2="17" x2="10" stroke="#000" fill="none" stroke-width="2"></line></g></svg>';

const PageNextIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default PageNextIcon;

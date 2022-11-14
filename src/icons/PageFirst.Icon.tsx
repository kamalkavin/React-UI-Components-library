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
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="Layer_1"><title>Layer 1</title><line id="svg_2" y2="11" x2="4" y1="5" x1="10" stroke="#000" fill="none" stroke-width="2"></line><line x1="4" y1="11" id="svg_4" y2="17" x2="10" stroke="#000" fill="none" stroke-width="2"></line><line stroke-width="2" id="svg_5" y2="11" x2="18" y1="11" x1="4" stroke="#000" fill="none" ></line><line stroke="#000" stroke-width="2" id="svg_6" y2="19" x2="1" y1="4" x1="1" fill="none"></line></g></svg>';

const PageFirstIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default PageFirstIcon;

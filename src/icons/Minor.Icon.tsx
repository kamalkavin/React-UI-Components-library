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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><title></title><path d="M8.333 14.94c-.194 0-.353-.139-.353-.309v-.822c0-.17.159-.309.353-.309h6.833c.194 0 .353.139.353.309v.822c0 .17-.16.309-.353.309H8.333zm5.042-12.002c-.719-1.25-2.527-1.25-3.25 0L.754 19.188C.035 20.433.934 22 2.379 22h18.746c1.441 0 2.344-1.563 1.625-2.813l-9.375-16.25zm7.75 17.812H2.375a.626.626 0 0 1-.543-.938l9.375-16.25a.625.625 0 0 1 1.082 0l9.375 16.25a.624.624 0 0 1-.539.938z"></path></svg>';

const MinorIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default MinorIcon;

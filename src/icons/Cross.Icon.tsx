import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 3.75 3.75 L 16.25 16.25" fill="transparent" stroke-width="2" stroke="rgb(38, 82, 158)" stroke-linecap="round"></path><path d="M 16.25 3.75 L 3.75 16.25" fill="transparent" stroke-width="2" stroke="rgb(60, 72, 80)" stroke-linecap="round"></path></svg>`;
const CrossIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default CrossIcon;

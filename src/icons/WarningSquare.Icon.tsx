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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><title></title><path d="M11.8 14.857h.4a.539.539 0 0 0 .537-.513l.312-7.5a.537.537 0 0 0-.536-.558h-1.026a.537.537 0 0 0-.536.558l.312 7.5c.014.285.25.513.536.513zM19.856 2H4.143C2.96 2 2 2.96 2 4.143v15.714C2 21.04 2.96 22 4.143 22h15.714C21.04 22 22 21.04 22 19.857V4.143C22 2.96 21.04 2 19.857 2zm.714 17.857a.716.716 0 0 1-.714.714H4.143a.716.716 0 0 1-.714-.714V4.143c0-.393.321-.714.714-.714h15.714c.393 0 .714.321.714.714v15.714zM12 15.75c-.692 0-1.25.558-1.25 1.25s.558 1.25 1.25 1.25 1.25-.558 1.25-1.25-.558-1.25-1.25-1.25z"></path></svg>';

const WarningSquareIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default WarningSquareIcon;

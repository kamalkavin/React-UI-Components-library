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
	'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g fill="#8eaabf"><path d="M846.7,153.4c-191.1-191.1-502.2-191.1-693.3,0c-191.1,191.1-191.1,502.2,0,693.3c191.1,191.1,502.1,191.1,693.3,0C1037.8,655.6,1037.8,344.5,846.7,153.4z M220.8,220.8C361,80.6,581,68.5,735.5,183.6L183.6,735.5C68.5,581,80.6,361,220.8,220.8z M779.2,779.2C639,919.4,419,931.5,264.5,816.4l551.9-551.9C931.5,419,919.5,639,779.2,779.2z"/></g></svg>';

const HealthStateGreyIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default HealthStateGreyIcon;

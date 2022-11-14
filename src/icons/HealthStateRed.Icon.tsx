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
	'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g fill="#f1341c"><path d="M500,893.4c107.4,0,199.8-38.7,277.2-116.2c77.4-77.4,116.2-169.9,116.2-277.2c0-107.4-38.7-199.8-116.2-277.2C699.8,145.4,607.4,106.6,500,106.6c-107.4,0-199.8,38.7-277.2,116.2C145.3,300.3,106.6,392.7,106.6,500c0,107.4,38.7,199.8,116.2,277.2C300.2,854.7,392.6,893.4,500,893.4z M500,10c135,0,250.4,47.9,346.2,143.8S990,365,990,500c0,135-47.9,250.4-143.8,346.2S635,990,500,990c-135,0-250.4-47.9-346.2-143.8C57.9,750.4,10,635,10,500c0-135,47.9-250.4,143.8-346.2C249.6,57.9,365,10,500,10z M451.7,253.9h96.6v294.5h-96.6V253.9z M451.7,647.3h96.6v98.9h-96.6V647.3z"/></g></svg>';

const HealthStateRedIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default HealthStateRedIcon;

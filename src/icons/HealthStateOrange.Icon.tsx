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
	'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.74 451.74" style="enable-background:new 0 0 451.74 451.74;" xml:space="preserve"><path style="fill:#FF9B2F;" d="M446.324,367.381L262.857,41.692c-15.644-28.444-58.311-28.444-73.956,0L5.435,367.381c-15.644,28.444,4.267,64,36.978,64h365.511C442.057,429.959,461.968,395.825,446.324,367.381z"/><path style="fill:#FFFFFF;" d="M225.879,63.025l183.467,325.689H42.413L225.879,63.025L225.879,63.025z"/><g><path style="fill:#FF9B2F;" d="M196.013,212.359l11.378,75.378c1.422,8.533,8.533,15.644,18.489,15.644l0,0c8.533,0,17.067-7.111,18.489-15.644l11.378-75.378c2.844-18.489-11.378-34.133-29.867-34.133l0,0C207.39,178.225,194.59,193.87,196.013,212.359z"/><circle style="fill:#FF9B2F;" cx="225.879" cy="336.092" r="17.067"/></g></svg>';

const HealthStateOrangeIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default HealthStateOrangeIcon;

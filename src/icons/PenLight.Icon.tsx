import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
	customClass?: string;
	onClick?: any;
}
const svgIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title></title><title></title><path d="M20.1930934,2.19765625 L18.6605837,0.732421875 C18.1502918,0.244140625 17.48107,0 16.8118482,0 C16.1426265,0 15.4734047,0.244140625 14.9627043,0.73203125 L0.565856031,14.496875 L0.0469844358,18.9585937 C-0.018385214,19.5203125 0.444513619,20 1.01935798,20 C1.05571984,20 1.09208171,19.9980469 1.1292607,19.9941406 L5.79256809,19.5015625 L20.1935019,5.7328125 C21.2144942,4.75664063 21.2144942,3.17382812 20.1930934,2.19765625 Z M5.192393,18.3078125 L1.39155642,18.7105469 L1.8148249,15.0710937 L12.596323,4.76289062 L15.9779767,7.99609375 L5.192393,18.3078125 Z M19.26893,4.84921875 L16.9021401,7.11210937 L13.5204864,3.87890625 L15.8872763,1.61601562 C16.1340467,1.38007812 16.4625292,1.25 16.8118482,1.25 C17.1611673,1.25 17.4892412,1.38007812 17.7364202,1.61601562 L19.26893,3.08125 C19.7784047,3.56875 19.7784047,4.36171875 19.26893,4.84921875 Z"></path></svg>';

const PenLightIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, onClick, ...rest }: IconProps) => {
	return (
		<Icon
			className={customClass}
			svg={svgIcon}
			width={width}
			height={height}
			name={name}
			color={color}
			onClick={onClick}
			{...rest}
		/>
	);
});

export default PenLightIcon;

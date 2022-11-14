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
	'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g fill="#4bcd72"><path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,929.7C263.6,929.7,71.3,736.4,71.3,500S263.6,71.3,500,71.3c236.4,0,428.8,192.4,428.8,428.8S736.4,929.7,500,929.7z M695.6,320.7L408.1,610L278.6,480.5c-12-11.9-31.4-11.9-43.3,0c-12,12-12,31.4,0,43.3l151.6,151.6c12,12,31.4,12,43.3,0c0.7-0.7,1-1.6,1.5-2.4l307.1-309c12-12,12-31.4,0-43.3C726.9,308.8,707.5,308.8,695.6,320.7z"/></g></svg>';

const HealthStateGreenIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default HealthStateGreenIcon;

import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
	customClass?: string;
}
const svgIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="80.593px" height="122.88px" viewBox="0 0 80.593 122.88" enable-background="new 0 0 80.593 122.88" xml:space="preserve" style="&#10;fill: "#3c4850";&#10;"><g><polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0"/></g></svg>';

const AngleLeftIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon svg={svgIcon} width={width} height={height} name={name} color={color} className={customClass} {...rest} />
	);
});

export default AngleLeftIcon;

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
	'<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c-.02-6.619-5.381-11.98-11.998-12zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6c-.016 5.296-4.304 9.584-9.598 9.6zm.6-15.6h-1.8v7.2l6.24 3.84.96-1.56-5.4-3.24z"/></svg>';

const ClockIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default ClockIcon;

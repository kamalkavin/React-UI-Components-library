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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M 8 0.806 L 7.194 0 L 4 3.194 L 0.806 0 L 0 0.806 L 3.194 4 L 0 7.194 L 0.806 8 L 4 4.806 L 7.194 8 L 8 7.194 L 4.806 4 Z"></path></svg>';

const ClearTextIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default ClearTextIcon;

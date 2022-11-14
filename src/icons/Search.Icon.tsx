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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  fill-rule="evenodd" d="M22.316 20.695l-4.97-4.97c-.094-.094-.217-.143-.348-.143h-.54c1.29-1.494 2.071-3.439 2.071-5.567 0-4.704-3.81-8.515-8.514-8.515C5.31 1.5 1.5 5.311 1.5 10.015c0 4.703 3.811 8.514 8.515 8.514 2.128 0 4.073-.782 5.567-2.071v.54c0 .131.053.254.143.348l4.97 4.97c.192.192.503.192.696 0l.925-.925c.192-.193.192-.504 0-.696zm-12.301-4.13c-3.62 0-6.55-2.932-6.55-6.55 0-3.62 2.93-6.55 6.55-6.55 3.618 0 6.55 2.93 6.55 6.55 0 3.618-2.932 6.55-6.55 6.55z"></path></svg>';
const SearchIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default SearchIcon;

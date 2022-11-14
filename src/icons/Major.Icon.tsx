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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><title></title><path d="M11.055 8.25h1.386c.133 0 .239.11.235.242l-.293 7.656a.236.236 0 0 1-.235.227h-.8a.233.233 0 0 1-.235-.227l-.293-7.656a.234.234 0 0 1 .235-.242zm.695 8.906c-.605 0-1.094.489-1.094 1.094 0 .605.489 1.094 1.094 1.094.605 0 1.094-.489 1.094-1.094 0-.605-.489-1.094-1.094-1.094zm10.996 2.032l-9.371-16.25c-.719-1.25-2.527-1.25-3.25 0L.754 19.188C.035 20.433.934 22 2.379 22h18.746c1.438 0 2.344-1.563 1.621-2.813zm-1.621 1.562H2.375a.626.626 0 0 1-.543-.938l9.375-16.25a.625.625 0 0 1 1.082 0l9.375 16.25a.624.624 0 0 1-.539.938z"></path></svg>';

const MajorIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default MajorIcon;

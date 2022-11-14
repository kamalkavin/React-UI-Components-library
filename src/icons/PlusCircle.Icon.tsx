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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g><g><path d="M 15.161 9.758 L 15.161 10.242 C 15.161 10.508 14.944 10.726 14.677 10.726 L 10.726 10.726 L 10.726 14.677 C 10.726 14.944 10.508 15.161 10.242 15.161 L 9.758 15.161 C 9.492 15.161 9.274 14.944 9.274 14.677 L 9.274 10.726 L 5.323 10.726 C 5.056 10.726 4.839 10.508 4.839 10.242 L 4.839 9.758 C 4.839 9.492 5.056 9.274 5.323 9.274 L 9.274 9.274 L 9.274 5.323 C 9.274 5.056 9.492 4.839 9.758 4.839 L 10.242 4.839 C 10.508 4.839 10.726 5.056 10.726 5.323 L 10.726 9.274 L 14.677 9.274 C 14.944 9.274 15.161 9.492 15.161 9.758 Z M 20 10 C 20 15.524 15.524 20 10 20 C 4.476 20 0 15.524 0 10 C 0 4.476 4.476 0 10 0 C 15.524 0 20 4.476 20 10 Z M 18.71 10 C 18.71 5.165 14.786 1.29 10 1.29 C 5.165 1.29 1.29 5.214 1.29 10 C 1.29 14.835 5.214 18.71 10 18.71 C 14.835 18.71 18.71 14.786 18.71 10 Z"></path></g></g></svg>';

const PlusCircleIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon className={customClass} svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default PlusCircleIcon;

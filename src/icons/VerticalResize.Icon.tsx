import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}

const VerticalResizeIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M296 391.1a23.93 23.93 0 0 0-16.97 7.031L248 430.1v-86.06c0-13.25-10.75-24-24-24s-24 10.75-24 24v86.06l-31.03-31.03c-4.67-4.77-10.87-7.97-16.97-7.97-12.82 0-24 10.33-24 24a23.93 23.93 0 0 0 7.031 16.97l72 72.01C209.6 507.5 215.5 512 224 512s14.4-4.461 16.97-7.031l72-72.01C317.7 428.3 320 422.1 320 415.1c0-12.8-11.2-24-24-24zm-144-272a23.93 23.93 0 0 0 16.97-7.031L200 81.91v86.07c0 13.25 10.75 24 24 24s24-10.75 24-24V81.91l31.03 31.03c4.67 4.66 10.77 6.16 16.97 6.16 18.79 0 24-17.2 24-23.1a23.93 23.93 0 0 0-7.031-16.97l-72-72.01C234.9.977 227.7 0 223.1 0c-2.8 0-10 .969-16.1 7l-72 72.01c-4.7 4.69-7 10.83-7 16.97 0 13.72 11.2 23.12 24 23.12zM424 232H24c-13.25 0-24 10.7-24 23.1S10.75 280 24 280h400c13.25 0 24-10.76 24-24.01S437.3 232 424 232z"></path></svg>`;
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default VerticalResizeIcon;

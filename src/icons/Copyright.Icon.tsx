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
	'<svg viewBox="4 0 54 52" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M32 2C18.214 2 7 13.216 7 27s11.215 25 25 25c13.786 0 25-11.216 25-25S45.785 2 32 2m0 45.001c-11.029 0-20.001-8.972-20.001-20.001C11.999 15.973 20.97 7.001 32 7.001c11.028 0 19.999 8.972 19.999 19.999C51.998 38.029 43.027 47.001 32 47.001" fill="currentColor"></path><path d="M25.414 19.337a10.49 10.49 0 0 1 3.26-2.338a9.421 9.421 0 0 1 3.994-.86c1.749 0 3.354.417 4.817 1.251a10.504 10.504 0 0 1 3.586 3.342l3.564-2.665a15.009 15.009 0 0 0-5.143-4.426C37.43 12.547 35.154 12 32.667 12c-2.049 0-3.975.396-5.777 1.19a15.067 15.067 0 0 0-4.713 3.215a15.205 15.205 0 0 0-3.176 4.756c-.779 1.814-1.168 3.763-1.168 5.84c0 2.075.389 4.022 1.168 5.841a15.147 15.147 0 0 0 3.176 4.752a15.095 15.095 0 0 0 4.713 3.219c1.803.79 3.729 1.187 5.777 1.187c2.487 0 4.762-.547 6.825-1.642a14.954 14.954 0 0 0 5.143-4.426l-3.564-2.661a10.544 10.544 0 0 1-3.586 3.339c-1.463.833-3.068 1.25-4.817 1.25a9.406 9.406 0 0 1-3.994-.86a10.474 10.474 0 0 1-3.26-2.338c-.928-.98-1.666-2.131-2.213-3.441s-.82-2.719-.82-4.22c0-1.504.273-2.911.82-4.222s1.285-2.458 2.213-3.442" fill="currentColor"></path></svg>';
const CopyrightIcon: FC<IconProps> = memo(({ width, height, name, color, customClass, ...rest }: IconProps) => {
	return (
		<Icon svg={svgIcon} className={customClass} width={width} height={height} name={name} color={color} {...rest} />
	);
});

export default CopyrightIcon;

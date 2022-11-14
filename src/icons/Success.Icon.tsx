import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 Z M 10 1.935 C 14.457 1.935 18.065 5.542 18.065 10 C 18.065 14.457 14.458 18.065 10 18.065 C 5.543 18.065 1.935 14.458 1.935 10 C 1.935 5.543 5.542 1.935 10 1.935 Z M 15.653 7.188 L 14.745 6.272 C 14.556 6.082 14.25 6.081 14.06 6.269 L 8.361 11.923 L 5.95 9.493 C 5.762 9.303 5.455 9.302 5.265 9.49 L 4.349 10.399 C 4.16 10.587 4.158 10.893 4.347 11.083 L 8.007 14.773 C 8.195 14.963 8.502 14.964 8.691 14.776 L 15.651 7.873 C 15.84 7.684 15.842 7.378 15.653 7.188 Z"></path> </svg>`;
const SuccessIcon: FC<IconProps> = memo(({ width, height, name, color = '#52A180', ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default SuccessIcon;

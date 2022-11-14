import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
	customClass?: string;
	onClick?: any;
}
const svgIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g><g><path d="M 17.435 3.935 L 14.065 0.565 C 13.703 0.203 13.213 0 12.701 0 L 1.929 0 C 0.863 0 0 0.863 0 1.929 L 0 16.071 C 0 17.137 0.863 18 1.929 18 L 16.071 18 C 17.137 18 18 17.137 18 16.071 L 18 5.299 C 18 4.787 17.797 4.297 17.435 3.935 Z M 11.571 1.286 L 11.571 5.143 L 3.857 5.143 L 3.857 1.286 Z M 16.714 16.071 C 16.714 16.426 16.426 16.714 16.071 16.714 L 1.929 16.714 C 1.574 16.714 1.286 16.426 1.286 16.071 L 1.286 1.929 C 1.286 1.574 1.574 1.286 1.929 1.286 L 2.571 1.286 L 2.571 5.464 C 2.571 5.997 3.003 6.429 3.536 6.429 L 11.893 6.429 C 12.425 6.429 12.857 5.997 12.857 5.464 L 12.857 1.305 C 12.97 1.333 13.073 1.392 13.156 1.474 L 16.526 4.844 C 16.647 4.965 16.715 5.128 16.714 5.299 Z M 9 8.036 C 7.05 8.036 5.464 9.622 5.464 11.571 C 5.464 13.521 7.05 15.107 9 15.107 C 10.95 15.107 12.536 13.521 12.536 11.571 C 12.536 9.622 10.95 8.036 9 8.036 Z M 9 13.821 C 7.759 13.821 6.75 12.812 6.75 11.571 C 6.75 10.331 7.759 9.321 9 9.321 C 10.241 9.321 11.25 10.331 11.25 11.571 C 11.25 12.812 10.241 13.821 9 13.821 Z" ></path></g></g></svg>';

const SaveLightIcon: FC<IconProps> = memo(
	({ width, height, name, color, customClass, onClick, ...rest }: IconProps) => {
		return (
			<Icon
				className={customClass}
				svg={svgIcon}
				width={width}
				height={height}
				name={name}
				color={color}
				onClick={onClick}
				{...rest}
			/>
		);
	}
);

export default SaveLightIcon;

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
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22"><g transform="translate(0 0.541)"><g><path d="M 9 17.16 C 8.558 17.16 8.196 16.792 8.196 16.342 L 8.196 13.728 C 8.196 13.278 8.558 12.911 9 12.911 C 9.442 12.911 9.804 13.278 9.804 13.728 L 9.804 16.342 C 9.804 16.792 9.442 17.16 9 17.16 Z M 18 11.113 L 18 18.957 C 18 20.04 17.136 20.918 16.071 20.918 L 1.929 20.918 C 0.864 20.918 0 20.04 0 18.957 L 0 11.113 C 0 10.03 0.864 9.152 1.929 9.152 L 2.571 9.152 L 2.571 6.537 C 2.571 2.925 5.464 -0.012 9.02 0 C 12.572 0.012 15.429 2.987 15.429 6.598 L 15.429 9.152 L 16.071 9.152 C 17.136 9.152 18 10.03 18 11.113 Z M 3.857 9.152 L 14.143 9.152 L 14.143 6.537 C 14.143 3.653 11.837 1.307 9 1.307 C 6.163 1.307 3.857 3.653 3.857 6.537 Z M 16.714 18.957 L 16.714 11.113 C 16.714 10.753 16.425 10.459 16.071 10.459 L 1.929 10.459 C 1.575 10.459 1.286 10.753 1.286 11.113 L 1.286 18.957 C 1.286 19.317 1.575 19.611 1.929 19.611 L 16.071 19.611 C 16.425 19.611 16.714 19.317 16.714 18.957 Z"></path></g></g></svg>';

const LockIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default LockIcon;

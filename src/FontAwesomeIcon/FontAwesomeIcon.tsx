/**
 *
 * FontAwesomeIcon
 *
 */
import React, { FC } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
// import { Icon } from '@fortawesome/fontawesome-svg-core';
import { Transform, IconProp, FlipProp, SizeProp, PullProp, RotateProp, FaSymbol } from '@fortawesome/fontawesome-svg-core';

interface IProps {
	icon: IconProp;
	size: SizeProp;
	mask?: IconProp;
	className?: string;
	color?: string;
	spin?: boolean;
	pulse?: boolean;
	border?: boolean;
	fixedWidth?: boolean;
	inverse?: boolean;
	listItem?: boolean;
	flip?: FlipProp;
	pull?: PullProp;
	rotation?: RotateProp;
	transform?: string | Transform;
	symbol?: FaSymbol;
	tabIndex?: number;
	title?: string;
	swapOpacity?: boolean;
}
const FontAwesomeIcon: FC<IProps> = (prop: IProps) => {
	return <FA icon={prop.icon} size={prop.size}  />;
};

export default FontAwesomeIcon;

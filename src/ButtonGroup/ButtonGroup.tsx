/**
 *
 * ButtonGroup
 *
 */

import React, { FC } from 'react';
import { ButtonGroup as BootstrapButtonGroup, ButtonGroupProps } from 'react-bootstrap';

interface IButtonGroupProps extends ButtonGroupProps {
	className?: string;
}

const ButtonGroup: FC<IButtonGroupProps> = ({ className, children }: IButtonGroupProps) => {
	return (
		<BootstrapButtonGroup className={className ? `app-btn-grp ${className}` : 'app-btn-grp'}>
			{children}
		</BootstrapButtonGroup>
	);
};

export default ButtonGroup;

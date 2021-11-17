/**
 *
 * DropdownButton
 *
 */

import React, { FC } from 'react';
import { DropdownButton as BootstrapDropdownButton, Dropdown, DropdownButtonProps } from 'react-bootstrap';
interface IProps extends DropdownButtonProps {
	dropdownList: Array<DropdownItemProps>;
	customClass?: string;
}
interface DropdownItemProps {
	name: string;
	actionCallback(name): any;
	isDisable?: boolean;
	customClass?: string;
}

const DropdownButton: FC<IProps> = (props: IProps) => {
	return (
		<BootstrapDropdownButton
			data-cy={props.title}
			className={`dropdown-btn ${props.customClass ? props.customClass : ''}`}
			title={props.title}
			id={props.id}>
			{props.dropdownList.map((item: DropdownItemProps) => (
				<Dropdown.Item
					href={item.name}
					className={`${item.isDisable ? 'disabled' : ''}`}
					onClick={event => {
						event.preventDefault();
						!item.isDisable && item.actionCallback(item.name)}}
					data-cy={item.name}
					key={item.name}>
					{item.name}
				</Dropdown.Item>
			))}
		</BootstrapDropdownButton>
	);
};

export default DropdownButton;

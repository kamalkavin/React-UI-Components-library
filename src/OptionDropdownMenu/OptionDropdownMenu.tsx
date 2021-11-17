/**
 *
 * OptionDropdownMenu
 *
 */

import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
interface DropdownItemProps {
	name: string;
	actionCallback(name): any;
	isDisable?: boolean;
	hide?: boolean;
	customClass?: string;
}
interface IProps {
	name?: string;
	dropdownList: Array<DropdownItemProps>;
}
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

const OptionDropdownMenu: FC<IProps> = (props: IProps) => {
	return (
		<>
			<Dropdown id='option-dropdown-menu' data-cy={props.name} className={`dropdown-btn`} drop={'left'}>
				<Dropdown.Toggle
					id='dropdown-custom-components'
					data-cy={`toggle-${props.name}`}
					className={`dropdown-option-toggle`}></Dropdown.Toggle>

				<Dropdown.Menu renderOnMount={true} align='left'>
					{props.dropdownList.map(
						(item: DropdownItemProps) =>
							!item.hide && (
								<Dropdown.Item
									data-cy={item.name}
									href={item.name}
									className={`${item.isDisable ? 'disabled' : ''}`}
									onClick={(event) => {
										event.preventDefault();
										item.actionCallback(item.name);
									}}
									key={item.name}>
									{item.name}
								</Dropdown.Item>
							)
					)}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export default OptionDropdownMenu;

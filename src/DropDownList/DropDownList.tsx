/**
 *
 * DropDownList
 *
 */

import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { IconList } from 'components/SvgIcon/SVGIconLibrary';

interface IProps {
	label?: string;
	list: { value: string; label: string; icon?: IconList; size?: number; color?: string }[];
	onSelect(e: string): void;
	selected?: string;
	className?: string;
	withIcon?: boolean;
	viewLabel?: boolean;
}

const DropDownList: FC<IProps> = ({ label, list, onSelect, selected, className = '', withIcon = false, viewLabel = true  }: IProps) => {
	const selectedItem = list.find(item => item.value === selected)?.label;
	const selectedIcon = list.find((item) => item.value === selected);

	return (
		<div className={`dropdown-list ${className}`} id='drop-down-list' data-cy="view-by-dropdown">
			<Dropdown className='pd-container'>
				<Dropdown.Toggle className='pd-btn'>
					{label && <span className='pd-lbl'>{label}</span>}
					{viewLabel && selectedItem}
					{!viewLabel && selectedIcon && <SvgIcon icon={selectedIcon.icon || 'Settings'} size={selectedIcon.size || 20} color={selectedIcon.color}/>}
					<span className='pd-arrow'>
						<SvgIcon size={16} icon='down-arrow' className='navbar-warn-img' />
					</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{list.map((item, i) => (
						<Dropdown.Item
							data-cy={item.label}
							key={`dropdown-list${i}`}
							href={item.label}
							disabled={item.value === selected}
							onClick={e => {
								e.preventDefault();
								onSelect(item.value);
								document.body.click();
							}}>
							{viewLabel && item.label}
							{withIcon && <SvgIcon icon={item.icon|| 'Settings'} size={item.size || 0} color={item.color}/>}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default DropDownList;

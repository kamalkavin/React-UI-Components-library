/**
 *
 * ToggleGroup
 *
 */

import React, { FC } from 'react';
import { useCustomTheme } from '../../commons';
import ToggleGroupStyles from './styles/ToggleGroup.style';
import Box from 'ui-box';

export interface IProps {
	name: string;
	children?: any;
}

const ToggleGroup: FC<IProps> = (props: IProps) => {
	const { children = [], name }: any = props;
	const theme: any = useCustomTheme();
	const classes = ToggleGroupStyles(theme);
	return (
		<Box className={classes.container} data-cy={name}>
			{children.map((item, index) => {
				const inlineParams = {
					display: 'inline',
					borderRadius: 0,
					color: '#3c4850',
					borderRightWidth: index === children.length - 1 ? 3 : 0,
					borderTopLeftRadius: index === 0 ? 36 : 0,
					borderBottomLeftRadius: index === 0 ? 36 : 0,
					borderTopRightRadius: index === children.length - 1 ? 36 : 0,
					borderBottomRightRadius: index === children.length - 1 ? 36 : 0,
					paddingLeft: '16px',
					paddingRight: '16px',
					beforeBorder:
						index === 0
							? '13px 3px 3px 13px'
							: index === children.length - 1
							? '3px 13px 13px 3px'
							: '3px 3px 3px 3px',
					className: 'g-toggle-group g-button-group',
					onClick: (el) => {
						Object.keys(el.target.parentElement.children).forEach((index) =>
							el.target.parentElement.children[index].classList.remove(classes.active)
						);
						el.target.classList.add(classes.active);
					},
				};
				return React.cloneElement(item, inlineParams);
			})}
		</Box>
	);
};

export default ToggleGroup;

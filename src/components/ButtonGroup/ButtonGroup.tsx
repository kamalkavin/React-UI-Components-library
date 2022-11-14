/**
 *
 * ButtonGroup
 *
 */

import React, { FC } from 'react';
import { useStyleConfig, useCustomTheme } from '../../commons';
import ButtonGroupStyles from './styles/ButtonGroup.style';
import Box from 'ui-box';

interface IProps {
	children: any;
	name: string;
}

export const pseudoSelectors = {
	_hoverAndElement: '&:not([disabled]):hover+&:not[disabled]',
};
const ButtonGroup: FC<IProps> = (props: IProps) => {
	const { children, name }: any = props;
	const theme: any = useCustomTheme();
	const internalStyles = ButtonGroupStyles(theme);
	const { className: themedClassName, ...boxProps } = useStyleConfig({}, pseudoSelectors, internalStyles);
	return (
		<Box {...boxProps} data-cy={name}>
			{children.map((item, index) => {
				const inlineParams = {
					display: 'inline',
					fontSize: '16px',
					paddingLeft: '16px',
					paddingRight: '16px',
					borderRadius: 0,
					borderRightWidth: index == children.length - 1 ? 3 : 0,
					borderTopLeftRadius: index == 0 ? 36 : 0,
					borderBottomLeftRadius: index == 0 ? 36 : 0,
					borderTopRightRadius: index == children.length - 1 ? 36 : 0,
					borderBottomRightRadius: index == children.length - 1 ? 36 : 0,
					className: 'g-button-group',
					key: index,
				};
				return React.cloneElement(item, inlineParams);
			})}
		</Box>
	);
};

export default ButtonGroup;

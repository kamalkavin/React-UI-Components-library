import DateTimeFieldStyles from '../styles/DateTimeField.style';
import cx from 'classnames';
import React from 'react';
import { AngleLeftIcon, AngleRightIcon } from '../../../icons';
import { Span } from '../../../components';
import { useCustomTheme } from '../../../commons';

interface NavigationProps {
	onClickPrev: any;
	onClickSwitch: any;
	onClickNext: any;
	switchContent: any;
	switchColSpan?: any;
	switchProps?: any;
}
const ViewNavigation = (props: NavigationProps) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	return (
		<>
			<tr className={classes.dispFlex}>
				<th className={cx(classes.rdtPickerTh, classes.rdtPrev)} onClick={props.onClickPrev}>
					<Span className={classes.rdtPrevSpan}>
						<AngleLeftIcon name={'prev'} width='10' height='10' color={theme.colors.black} />
					</Span>
				</th>
				<th
					className={cx(classes.rdtPickerTh, classes.rdtSwitch)}
					colSpan={props.switchColSpan}
					onClick={props.onClickSwitch}
					{...props.switchProps}>
					{props.switchContent}
				</th>
				<th className={cx(classes.rdtPickerTh, classes.rdtNext)} onClick={props.onClickNext}>
					<Span className={classes.rdtPrevSpan}>
						<AngleRightIcon name={'next'} width='10' height='10' color={theme.colors.black} />
					</Span>
				</th>
			</tr>
		</>
	);
};

export default ViewNavigation;

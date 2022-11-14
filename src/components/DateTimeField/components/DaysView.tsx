import React from 'react';
import DateTimeFieldStyles from '../styles/DateTimeField.style';
import cx from 'classnames';
import { ArrowDownIcon } from '../../../icons';
import { Div, Span } from '../../../components';
import ViewNavigation from './ViewNavigation';
import { getDaysOfWeek, getDaysRow } from '../services/DateTimeFieldServices';
import { useCustomTheme } from '../../../commons';

const DaysView = ({
	renderDay = (props, date, selectedDate) => {
		const theme = useCustomTheme();
		const classes = DateTimeFieldStyles({ theme: theme as any });
		const handleArrowClick = (e) => {
			e.target = e.currentTarget;
			const value = e.target.getAttribute('data-value');
			const month = e.target.getAttribute('data-month');
			const year = e.target.getAttribute('data-year');
			restProps.updateDate(value, month, year);
		};
		return (
			<td {...props}>
				{date.date()}
				{props.className.includes('rdtToday') ? (
					<Span
						{...props}
						className=''
						onClick={handleArrowClick}
						display={props.className.includes('rdtActive') ? 'none' : 'block'}>
						<ArrowDownIcon
							customClass={classes.arrowDown}
							name={'arrow-down'}
							width='24'
							height='24'
							color={theme.colors.gigaBlue1}
						/>
					</Span>
				) : (
					''
				)}
			</td>
		);
	},
	...restProps
}) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const renderNavigation = () => {
		const date = restProps.viewDate;
		const locale = date.localeData();
		return (
			<ViewNavigation
				onClickPrev={() => restProps.navigate(-1, 'months')}
				onClickSwitch={() => restProps.showView('months')}
				onClickNext={() => restProps.navigate(1, 'months')}
				switchContent={locale.months(date) + ' ' + date.year()}
				switchColSpan={5}
				switchProps={{ 'data-value': restProps.viewDate.month() }}
			/>
		);
	};

	const renderDayHeaders = () => {
		const locale = restProps.viewDate.localeData();
		const dayItems = getDaysOfWeek(locale).map((day, index) => (
			<th key={day + index} className={classes.dow}>
				{day}
			</th>
		));

		return <tr className={classes.dispFlex}>{dayItems}</tr>;
	};

	const renderDays = () => {
		const date = restProps.viewDate;
		const startOfMonth = date.clone().startOf('month');
		const endOfMonth = date.clone().endOf('month');
		const rows = [[], [], [], [], [], []];
		const startDate = date.clone().subtract(1, 'months');
		startDate.date(startDate.daysInMonth()).startOf('week');
		const endDate = startDate.clone().add(42, 'd');
		let i = 0;

		while (startDate.isBefore(endDate)) {
			const row = getDaysRow(rows, i++);
			row.push(renderDayView(startDate, startOfMonth, endOfMonth, i));
			startDate.add(1, 'd');
		}

		return rows.map((r, i) => (
			<tr className={classes.dispFlex} key={`${endDate.month()}_${i}`}>
				{r}
			</tr>
		));
	};

	const renderDayView = (date, startOfMonth, endOfMonth, index) => {
		const selectedDate = restProps.selectedDate;

		const dayProps: any = {
			key: date.format('M_D'),
			'data-value': date.date(),
			'data-month': date.month(),
			'data-year': date.year(),
		};

		let className = classes.rdtDay;
		if (date.isBefore(startOfMonth)) {
			className += ' ' + classes.rdtOld;
		} else if (date.isAfter(endOfMonth)) {
			className += ' ' + classes.rdtNew;
		}
		if (selectedDate && date.isSame(selectedDate, 'day')) {
			className += ' ' + classes.rdtActive;
		}
		if (date.isSame(restProps.moment(), 'day')) {
			className += ' ' + classes.rdtToday;
		}

		if (restProps.isValidDate(date)) {
			dayProps.onClick = _setDate;
		} else {
			className += ' ' + classes.rdtDisabled;
		}

		if (className.includes('rdtToday') && className.includes('rdtActive')) {
			className += ' ' + classes.displayGrid;
		}

		dayProps.className = className;

		return renderDay(dayProps, date.clone(), selectedDate && selectedDate.clone());
	};

	const renderFooter = () => {
		if (!restProps.timeFormat) return;

		const date = restProps.viewDate;
		return (
			<tfoot className={classes.rdtPickerTfoot}>
				<tr>
					<td
						className={cx(classes.rdtPickerTd, classes.rdtTimeToggle)}
						onClick={() => restProps.showView('time')}
						colSpan={7}>
						{date.format(restProps.timeFormat)}
					</td>
				</tr>
			</tfoot>
		);
	};

	const _setDate = (e) => {
		if (e.target !== e.currentTarget) return;
		const value = e.target.getAttribute('data-value');
		const month = e.target.getAttribute('data-month');
		const year = e.target.getAttribute('data-year');
		restProps.updateDate(value, month, year);
	};

	return (
		<Div className={classes.rdtDays}>
			<table className={classes.rdtPickerTable}>
				<thead>
					{renderNavigation()}
					{renderDayHeaders()}
				</thead>
				<tbody>{renderDays()}</tbody>
				{renderFooter()}
			</table>
		</Div>
	);
};

export default DaysView;

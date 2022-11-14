import { useCustomTheme } from '../../../commons';
import { Div } from '../../../components';
import React from 'react';
import { getMonthsRow, capitalize } from '../services/DateTimeFieldServices';
import DateTimeFieldStyles from '../styles/DateTimeField.style';
import ViewNavigation from './ViewNavigation';

const MonthsView = (props: any) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const renderNavigation = () => {
		const year = props.viewDate.year();

		return (
			<ViewNavigation
				onClickPrev={() => props.navigate(-1, 'years')}
				onClickSwitch={() => props.showView('years')}
				onClickNext={() => props.navigate(1, 'years')}
				switchContent={year}
				switchColSpan='2'
			/>
		);
	};

	const renderMonths = () => {
		const rows = [[], [], []];
		for (let month = 0; month < 12; month++) {
			const row = getMonthsRow(rows, month);

			row.push(renderMonth(month));
		}
		return rows.map((months, i) => (
			<tr className={classes.dispFlex} key={i}>
				{months}
			</tr>
		));
	};

	const renderMonth = (month) => {
		const selectedDate = props.selectedDate;
		let className = classes.rdtDay;
		let onClick;

		if (isDisabledMonth(month)) {
			className += ' ' + classes.rdtDisabled;
		} else {
			onClick = _updateSelectedMonth;
		}

		if (selectedDate && selectedDate.year() === props.viewDate.year() && selectedDate.month() === month) {
			className += ' ' + classes.rdtActive;
		}

		const attrs = { key: month, className, 'data-value': month, onClick };

		if (props.renderMonth) {
			return props.renderMonth(
				attrs,
				month,
				props.viewDate.year(),
				props.selectedDate && props.selectedDate.clone()
			);
		}

		return <td {...attrs}>{getMonthText(month)}</td>;
	};

	const isDisabledMonth = (month) => {
		const isValidDate = props.isValidDate;
		if (!isValidDate) {
			return false;
		}
		const date = props.viewDate.clone().set({ month });
		let day = date.endOf('month').date() + 1;
		while (day-- > 1) {
			if (isValidDate(date.date(day))) {
				return false;
			}
		}
		return true;
	};

	const getMonthText = (month) => {
		const localMoment = props.viewDate;
		const monthStr = localMoment.localeData().monthsShort(localMoment.month(month));
		return capitalize(monthStr.substring(0, 3));
	};

	const _updateSelectedMonth = (event) => {
		const value = event.target.getAttribute('data-value');
		const month = event.target.getAttribute('data-month');
		const year = event.target.getAttribute('data-year');
		props.updateDate(value, month, year);
	};

	return (
		<Div className={classes.rdtMonths}>
			<table className={classes.rdtPickerTable}>
				<thead>{renderNavigation()}</thead>
			</table>
			<table className={classes.rdtPickerTable}>
				<tbody>{renderMonths()}</tbody>
			</table>
		</Div>
	);
};

export default MonthsView;

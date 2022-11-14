import { useCustomTheme } from '../../../commons';
import { Div } from '../../../components';
import React from 'react';
import { getYearsRow } from '../services/DateTimeFieldServices';
import DateTimeFieldStyles from '../styles/DateTimeField.style';
import ViewNavigation from './ViewNavigation';

const YearsView = ({
	renderYear = (props, year, selectedDate) => {
		// const theme = useCustomTheme();
		// const classes = DateTimeFieldStyles({ theme: theme as any });
		return (
			<td className={classes.rdtPickerTd} {...props}>
				{year}
			</td>
		);
	},
	...restProps
}) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const renderNavigation = () => {
		const viewYear = getViewYear();
		return (
			<ViewNavigation
				onClickPrev={() => restProps.navigate(-10, 'years')}
				onClickSwitch={() => restProps.showView('years')}
				onClickNext={() => restProps.navigate(10, 'years')}
				switchContent={`${viewYear}-${viewYear + 9}`}
			/>
		);
	};

	const renderYears = () => {
		const viewYear = getViewYear();
		const rows = [[], [], []];
		for (let year = viewYear - 1; year < viewYear + 11; year++) {
			const row = getYearsRow(rows, year - viewYear);
			row.push(renderYearView(year));
		}

		return rows.map((years, i) => (
			<tr className={classes.dispFlex} key={i}>
				{years}
			</tr>
		));
	};

	const renderYearView = (year) => {
		const classes = DateTimeFieldStyles({ theme: theme as any });
		const selectedYear = getSelectedYear();
		let className = classes.rdtDay;
		let onClick;

		if (isDisabledYear(year)) {
			className += ' ' + classes.rdtDisabled;
		} else {
			onClick = _updateSelectedYear;
		}

		if (selectedYear === year) {
			className += ' ' + classes.rdtActive;
		}

		const props = { key: year, className, 'data-value': year, onClick };

		return renderYear(props, year, restProps.selectedDate && restProps.selectedDate.clone());
	};

	const getViewYear = () => {
		return parseInt((restProps.viewDate.year() / 10).toString(), 10) * 10;
	};

	const getSelectedYear = () => {
		return restProps.selectedDate && restProps.selectedDate.year();
	};

	const disabledYearsCache = {};
	const isDisabledYear = (year) => {
		const cache = disabledYearsCache;
		if (cache[year] !== undefined) {
			return cache[year];
		}
		const isValidDate = restProps.isValidDate;
		if (!isValidDate) {
			return false;
		}
		const date = restProps.viewDate.clone().set({ year });
		let day = date.endOf('year').dayOfYear() + 1;

		while (day-- > 1) {
			if (isValidDate(date.dayOfYear(day))) {
				cache[year] = false;
				return false;
			}
		}

		cache[year] = true;
		return true;
	};

	const _updateSelectedYear = (event) => {
		const value = event.target.getAttribute('data-value');
		const month = event.target.getAttribute('data-month');
		const year = event.target.getAttribute('data-year');
		restProps.updateDate(value, month, year);
	};

	return (
		<Div className={classes.rdtYears}>
			<table className={classes.rdtPickerTable}>
				<thead>{renderNavigation()}</thead>
			</table>
			<table className={classes.rdtPickerTable}>
				<tbody>{renderYears()}</tbody>
			</table>
		</Div>
	);
};

export default YearsView;

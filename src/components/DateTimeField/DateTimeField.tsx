/**
 *
 * DateTimeField component
 *
 */

import React, { FC, useState, useEffect, useRef } from 'react';
import moment from 'moment';
import 'moment-timezone';
import Div from '../Layers/Div';
import DateTimeFieldStyles from './styles/DateTimeField.style';
import cx from 'classnames';
import { Span, InputField } from '..';
import { viewModes } from './constants/DateTimeFieldConstants';
import YearsView from './components/YearsView';
import MonthsView from './components/MonthsView';
import DaysView from './components/DaysView';
import TimeView from './components/TimeView';
import { CalenderIcon } from '../../icons';
import { ClockIcon } from '../../icons';
import Box from 'ui-box';
import { useCustomTheme } from '../../commons';

type datetype = moment.Moment | Date | String;
type func = (...args: any[]) => any;

export interface IDateTimeFieldProps {
	name?: string;
	type?: string;
	disableDtType?: string;
	disablePastValidDate?: any;
	disableFutureValidDate?: any;
	timeFormt?: any;
	value?: datetype;
	initialValue?: datetype;
	initialViewDate?: datetype;
	initialViewMode?: 'years' | 'months' | 'days' | 'time';
	onOpen?: func;
	onClose?: func;
	onChange?: func;
	onNavigate?: func;
	onBeforeNavigate?: any;
	onNavigateBack?: func;
	onNavigateForward?: func;
	updateOnView?: string;
	locale?: string;
	utc?: boolean;
	displayTimeZone?: string;
	input?: boolean;
	dateFormat?: string | boolean;
	timeFormat?: string | boolean;
	inputProps?: any;
	timeConstraints?: any;
	isValidDate?: func;
	open?: boolean;
	strictParsing?: boolean;
	closeOnSelect?: boolean;
	closeOnTab?: boolean;
	renderView?: any;
	renderInput?: func;
	renderDay?: func;
	renderMonth?: func;
	renderYear?: func;
	className?: string;
	isError?: boolean;
	closeOnClickOutside?: boolean;
}

const DateTimeField: FC<IDateTimeFieldProps> = ({
	name,
	isError,
	utc = false,
	input = true,
	inputProps = {},
	closeOnTab = true,
	dateFormat = true,
	onOpen = () => {},
	onClose = () => {},
	timeFormat = false,
	onChange = () => {},
	strictParsing = true,
	closeOnSelect = true,
	timeConstraints = {},
	onNavigate = () => {},
	onNavigateBack = () => {},
	closeOnClickOutside = true,
	onNavigateForward = () => {},
	renderView = (_, renderFunc) => renderFunc(),
	isValidDate = () => {
		return true;
	},
	onBeforeNavigate = function (next) {
		return next;
	},
	...restProps
}: IDateTimeFieldProps) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const [dateView, setDateView] = useState(false);
	const getFormat = (type) => {
		if (type === 'date') {
			return getDateFormat();
		} else if (type === 'time') {
			return getTimeFormat();
		}
		const dateFormat = getDateFormat();
		const timeFormat = getTimeFormat();
		return dateFormat && timeFormat ? dateFormat + ' ' + timeFormat : dateFormat || timeFormat;
	};

	const getInputValue = () => {
		const selectedDate = getSelectedDate();
		const inputValue = selectedDate ? selectedDate.format(getFormat('datetime')) : restProps.value;
		return inputValue;
	};

	const localMoment = (date?, format?, args?) => {
		const prps = args || restProps;
		let m: any = null;

		if (prps.utc) {
			m = moment.utc(date, format, prps.strictParsing);
		} else if (prps.displayTimeZone) {
			m = moment.tz(date, format, prps.displayTimeZone);
		} else {
			m = moment(date, format, prps.strictParsing);
		}

		if (prps.locale) m.locale(prps.locale);
		return m;
	};

	const parseDate = (date, dateFormat) => {
		let parsedDate;

		if (date && typeof date === 'string') {
			parsedDate = localMoment(date, dateFormat);
		} else if (date) {
			parsedDate = localMoment(date);
		}
		if (parsedDate && !parsedDate.isValid()) {
			parsedDate = null;
		}

		return parsedDate;
	};

	const getLocaleData = () => {
		const p = restProps;
		return localMoment(p.value || new Date()).localeData();
	};

	const getDateFormat = () => {
		const locale = getLocaleData();
		const format = dateFormat;
		if (format === true) return locale.longDateFormat('L');
		if (format) return format;
		return '';
	};

	const getTimeFormat = () => {
		const locale = getLocaleData();
		const format = timeFormat;
		if (format === true) {
			return locale.longDateFormat('LT');
		}
		return format || '';
	};

	const getInitialViewDate = (selectedDate) => {
		const propDate = restProps.initialViewDate;
		let viewDate;
		if (propDate) {
			viewDate = parseDate(propDate, getFormat('datetime'));
			if (viewDate && viewDate.isValid()) {
				return viewDate;
			}
		} else if (selectedDate && selectedDate.isValid()) {
			return selectedDate.clone();
		}
		return getInitialDate();
	};

	const getInitialDate = () => {
		const m = localMoment();
		m.hour(0).minute(0).second(0).millisecond(0);
		return m;
	};

	const getUpdateOn = (dateFormat) => {
		if (restProps.updateOnView) {
			return restProps.updateOnView;
		}

		if (dateFormat.match(/[lLD]/)) {
			return viewModes.DAYS;
		}

		if (dateFormat.includes('M')) {
			return viewModes.MONTHS;
		}

		if (dateFormat.includes('Y')) {
			return viewModes.YEARS;
		}

		return viewModes.DAYS;
	};

	const getInitialView = () => {
		const dateFormat = getFormat('date');
		return dateFormat ? getUpdateOn(dateFormat) : viewModes.TIME;
	};

	const getInitialInputValue = (selectedDate) => {
		if (inputProps && inputProps.value) return inputProps.value;
		if (selectedDate && selectedDate.isValid()) return selectedDate.format(getFormat('datetime'));
		if (restProps.value && typeof restProps.value === 'string') return restProps.value;
		if (restProps.initialValue && typeof restProps.initialValue === 'string') return restProps.initialValue;
		return '';
	};

	const getCurrentState = () => {
		const inputFormat = getFormat('datetime');
		const selectedDate = parseDate(restProps.value || restProps.initialValue, inputFormat);

		return {
			open: !input,
			currentView: restProps.initialViewMode || getInitialView(),
			viewDate: getInitialViewDate(selectedDate),
			selectedDate: selectedDate && selectedDate.isValid() ? selectedDate : undefined,
			inputValue: getInitialInputValue(selectedDate),
		};
	};

	const isOpen = () => {
		return !input || (restProps.open === undefined ? currentState.open : restProps.open);
	};

	const _openCalendar = () => {
		if (isOpen()) return;
		setCurrentState((prevState) => ({
			...prevState,
			open: true,
		}));
		setDateView(true);
	};

	const _closeCalendar = () => {
		if (!isOpen()) return;
		setCurrentState((prevState) => ({
			...prevState,
			open: false,
		}));
		setDateView(false);
	};
	const callHandler = (method, e) => {
		if (!method) return true;
		return method(e) !== false;
	};
	const _onInputFocus = (e) => {
		if (inputProps && !callHandler(inputProps.onFocus, e)) return;
		_openCalendar();
	};

	const _onInputChange = (e) => {
		if (inputProps && !callHandler(inputProps.onChange, e)) return;

		const value = e.target ? e.target.value : e;
		const loclMoment: any = localMoment(value, getFormat('datetime'));
		const update: any = { ...currentState };

		if (loclMoment.isValid()) {
			update.selectedDate = loclMoment;
			update.viewDate = loclMoment.clone().startOf('month');
		} else {
			update.selectedDate = null;
		}
		setCurrentState((prevState) => ({
			...prevState,
			...update,
		}));
		onChange(loclMoment.isValid() ? loclMoment : update.inputValue);
	};

	const _onInputKeyDown = (e) => {
		if (inputProps && !callHandler(inputProps.onKeyDown, e)) return;

		if (e.which === 9 && closeOnTab) {
			_closeCalendar();
		}
	};

	const _onInputClick = (e) => {
		if (inputProps && !callHandler(inputProps.onClick, e)) return;
		_openCalendar();
	};

	const getSelectedDate = () => {
		if (restProps.value === undefined || currentState?.selectedDate !== undefined) {
			return currentState.selectedDate;
		}
		const selectedDate = parseDate(restProps.value, getFormat('datetime'));
		return selectedDate && selectedDate.isValid() ? selectedDate : false;
	};

	const _showView = (view, date) => {
		const d = (date || (currentState && currentState.viewDate)).clone();
		const nextView = onBeforeNavigate(view, currentState && currentState.currentView, d);

		if (nextView && currentState && currentState.currentView !== nextView) {
			onNavigate(nextView);
			setCurrentState((prevState) => ({
				...prevState,
				currentView: nextView,
			}));
		}
	};

	const _updateDate = (value, month, year) => {
		const state = currentState;
		const currentView = state.currentView;
		const updateOnView = getUpdateOn(getFormat('date'));
		const viewDate = currentState.viewDate.clone();
		viewDate[viewToMethod[currentView]](parseInt(value, 10));

		if (currentView === 'days') {
			viewDate.month(parseInt(month, 10));
			viewDate.year(parseInt(year, 10));
		}

		const update: any = { viewDate: viewDate };
		if (currentView === updateOnView) {
			update.selectedDate = viewDate.clone();
			update.inputValue = viewDate.format(getFormat('datetime'));

			if (restProps.open === undefined && input && closeOnSelect) {
				_closeCalendar();
			}

			onChange(viewDate.clone());
		} else {
			_showView(nextView[currentView], viewDate);
		}

		setCurrentState((prevState) => ({
			...prevState,
			...update,
		}));
	};

	const _viewNavigate = (modifier, unit) => {
		const viewDate = currentState && currentState.viewDate.clone();

		viewDate.add(modifier, unit);

		if (modifier > 0) {
			onNavigateForward(modifier, unit);
		} else {
			onNavigateBack(-modifier, unit);
		}
		setCurrentState((prevState) => ({
			...prevState,
			viewDate,
		}));
	};

	const _setTime = (value) => {
		const date = (currentState && currentState.viewDate).clone();
		const { ampm, ...rest } = value;
		date.set(rest);
		setCurrentState({
			...currentState,
			selectedDate: date,
			viewDate: date.clone(),
			inputValue: date.format(getFormat('datetime')),
		});

		onChange(date);
	};

	const _renderCalendar = () => {
		const props = restProps;
		const state = currentState;
		const viewProps: any = {
			viewDate: state.viewDate.clone(),
			selectedDate: getSelectedDate(),
			isValidDate: isValidDate,
			updateDate: _updateDate,
			navigate: _viewNavigate,
			moment: moment,
			showView: _showView,
		};

		switch (state.currentView) {
			case viewModes.YEARS:
				viewProps.renderYear = props.renderYear;
				return <YearsView {...viewProps} />;

			case viewModes.MONTHS:
				viewProps.renderMonth = restProps.renderMonth;
				return <MonthsView {...viewProps} />;

			case viewModes.DAYS:
				viewProps.renderDay = restProps.renderDay;
				viewProps.timeFormat = getFormat('time');
				return <DaysView {...viewProps} />;
			default:
				viewProps.dateFormat = getFormat('date');
				viewProps.timeFormat = getFormat('time');
				viewProps.timeConstraints = timeConstraints;
				viewProps.setTime = _setTime;
				return <TimeView {...viewProps} />;
		}
	};

	const renderCalendarView = () => {
		return currentState && currentState.currentView && renderView(currentState.currentView, _renderCalendar);
	};

	const renderInput = () => {
		if (input && !input) return;
		const finalInputProps = {
			type: 'text',
			className: !timeFormat ? classes.inputDateInput : classes.inputTimeInput,
			isInvalid: isError,
			value: getInputValue(),
			...inputProps,
			onFocus: _onInputFocus,
			onChange: _onInputChange,
			onKeyDown: _onInputKeyDown,
			onClick: _onInputClick,
		};

		if (restProps.renderInput) {
			return <Div>{restProps.renderInput(finalInputProps, _openCalendar, _closeCalendar)}</Div>;
		}

		return (
			<>
				<Div className={classes.dispFlex}>
					<InputField
						variant='primary'
						data-cy={!timeFormat ? `calendar-button-${name}` : `time-button-${name}`}
						placeholder={
							!timeFormat
								? moment().format('M/D/YYYY')
								: timeFormat === 'h:mm A'
								? moment().format('h:mm A')
								: moment().format('H:m')
						}
						{...finalInputProps}
					/>
					<Span
						className={!timeFormat ? classes.inputDateIcon : classes.inputTimeIcon}
						onClick={() => {
							dateView ? _closeCalendar() : _openCalendar();
						}}>
						<div>
							{!timeFormat ? (
								<CalenderIcon width={'14px'} height={'14px'} name={`calender-icon-${name}`} />
							) : (
								<ClockIcon width={'14px'} height={'14px'} name={`clock-icon-${name}`} />
							)}
						</div>
					</Span>
				</Div>
			</>
		);
	};

	const getClassName = () => {
		let cn = '';
		const propCn = restProps.className;

		if (Array.isArray(propCn)) {
			cn += ' ' + propCn.join(' ');
		} else if (propCn) {
			cn += ' ' + propCn;
		}

		if (!input) {
			cn += ' ' + classes.rdtStatic;
		}
		if (isOpen()) {
			cn += ' ' + classes.rdtOpen;
		}
		return cn;
	};

	const [currentState, setCurrentState] = useState(getCurrentState());
	const viewToMethod = { days: 'date', months: 'month', years: 'year' };
	const nextView = { days: 'time', months: 'days', years: 'months' };
	const ref = useRef(name) as any;

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setCurrentState({
					...currentState,
					open: false,
				});
				setDateView(false);
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return currentState ? (
		<Box ref={ref} className={cx(name, getClassName())}>
			{renderInput()}
			{currentState && currentState.open && <Div className={classes.rdtPicker}> {renderCalendarView()}</Div>}
		</Box>
	) : (
		<></>
	);
};

export default DateTimeField;

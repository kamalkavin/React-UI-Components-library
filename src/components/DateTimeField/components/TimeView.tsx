import { AngleDownIcon, AngleUpIcon } from '../../../icons';
import { Div, Span } from '../../../components';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import DateTimeFieldStyles from '../styles/DateTimeField.style';
import cx from 'classnames';
import { createConstraints, pad } from '../services/DateTimeFieldServices';
import { useCustomTheme } from '../../../commons';

export const RenderHeader = (props: any) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const date = props.selectedDate || props.viewDate;
	return (
		<thead>
			<tr>
				<td
					className={cx(classes.rdtPickerTd, classes.rdtSwitch)}
					colSpan={4}
					onClick={() => props.showView('days')}>
					{date.format(props.dateFormat)}
				</td>
			</tr>
		</thead>
	);
};

const TimeView = (props) => {
	const theme = useCustomTheme();
	const classes = DateTimeFieldStyles({ theme: theme as any });
	const constraints = createConstraints(props.timeConstraints);
	const isFirstRender = useRef(true);
	const [items, setItems] = useState<any>([]);
	const getTimeParts = (date) => {
		const hours = date.hours();
		return {
			hours: pad('hours', hours),
			minutes: pad('minutes', date.minutes()),
			seconds: pad('seconds', date.seconds()),
			milliseconds: pad('milliseconds', date.milliseconds()),
			ampm: hours < 12 ? 'AM' : 'PM',
		};
	};

	const [currentState, setCurrentState] = useState(getTimeParts(props.selectedDate || props.viewDate));

	const renderCounter = (type, value, hours) => {
		if (type === 'hours' && isAMPM()) {
			value = ((value - 1) % 12) + 1;
			if (value === 0) {
				value = 12;
			}
		}

		if (type === 'ampm') {
			value = props.timeFormat.includes(' A') ? value.toUpperCase() : value.toLowerCase();
			value = hours > 11 ? 'PM' : 'AM';
		}

		return (
			<Div key={type} className={classes.rdtCounter}>
				<Span className={classes.rdtBtn} onMouseDown={(e) => onStartClicking(e, increase, type)}>
					<AngleUpIcon name={'prev'} width='12' height='12' color={theme.colors.black} />
				</Span>
				<Div className={classes.rdtCount}>{value}</Div>
				<Span className={classes.rdtBtn} onMouseDown={(e) => onStartClicking(e, decrease, type)}>
					<AngleDownIcon name={'prev'} width='12' height='12' color={theme.colors.black} />
				</Span>
			</Div>
		);
	};

	const onStartClicking = (e, action, type) => {
		if (e && e.button && e.button !== 0) {
			return;
		}

		if (type === 'ampm') {
			return toggleDayPart();
		}

		const update = {};
		const body = document.body;
		update[type] = action(type);
		if (type === 'hours') {
			//	update['ampm'] = action(type) < 12 ? 'AM' : 'PM';
		}
		setCurrentState({
			...currentState,
			...update,
		});

		const mouseUpListener = () => {
			props.setTime({
				...currentState,
				...update,
			});
			body.removeEventListener('mouseup', mouseUpListener);
			body.removeEventListener('touchend', mouseUpListener);
		};

		body.addEventListener('mouseup', mouseUpListener);
		body.addEventListener('touchend', mouseUpListener);
	};

	const toggleDayPart = () => {
		let hours = parseInt(currentState.hours, 10);

		if (hours >= 12) {
			hours = hours - 12;
		} else {
			hours = hours + 12;
		}

		setCurrentState({
			...currentState,
			hours: pad('hours', hours),
			ampm: hours < 12 ? 'AM' : 'PM',
		});
		props.setTime({ ...currentState, hours: pad('hours', hours) });
	};

	const increase = (type) => {
		const tc = constraints[type];
		let value = parseInt(currentState[type], 10) + tc.step;
		if (value > tc.max) value = tc.min + (value - (tc.max + 1));
		return pad(type, value);
	};

	const decrease = (type) => {
		const tc = constraints[type];
		let value = parseInt(currentState[type], 10) - tc.step;
		if (value < tc.min) value = tc.max + 1 - (tc.min - value);
		return pad(type, value);
	};

	const getCounters = () => {
		const counters: any = [];
		const format = props.timeFormat.toLowerCase();

		if (format.includes('h')) {
			counters.push('hours');
			if (format.includes('m')) {
				counters.push('minutes');
				if (format.includes('s')) {
					counters.push('seconds');
					if (format.includes('S')) {
						counters.push('milliseconds');
					}
				}
			}
		}

		if (isAMPM()) {
			counters.push('ampm');
		}

		return counters;
	};

	const isAMPM = () => {
		const format = props.timeFormat.toLowerCase();
		return format.includes(' a');
	};

	useEffect(() => {
		if (!isFirstRender.current) {
			isFirstRender.current = true;
		} else {
			if (props.selectedDate) {
				const selDate = getTimeParts(props.selectedDate);
				const vewDate = getTimeParts(props.viewDate);
				setCurrentState((prevState) => ({
					...prevState,
					selDate,
				}));
				setCurrentState((prevState) => ({
					...prevState,
					vewDate,
				}));
			}
		}
	}, []);

	useEffect(() => {
		const items: any = [];

		currentState &&
			getCounters().forEach((c, i) => {
				if (i && c !== 'ampm') {
					items.push(
						<Span key={`sep${i}`} className={classes.rdtCounterSeparator}>
							:
						</Span>
					);
				}
				items.push(renderCounter(c, currentState[c], currentState['hours']));
			});
		setItems(items);
	}, [currentState]);

	return (
		<Div data-cy={'DateTimeField'}>
			<table className={''}>
				{props.dateFormat && <RenderHeader {...props} />}
				<tbody>
					<tr>
						<td className={classes.rdtPickerTd}>
							<Div className={classes.rdtCounters}>{items} </Div>
						</td>
					</tr>
				</tbody>
			</table>
		</Div>
	);
};

export default TimeView;

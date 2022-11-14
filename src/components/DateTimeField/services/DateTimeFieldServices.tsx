import { timeConstraints } from '../constants/DateTimeFieldConstants';

export const createConstraints = (overrideTimeConstraints) => {
	const constraints = {};

	Object.keys(timeConstraints).forEach((type) => {
		let data = {};
		if (overrideTimeConstraints) {
			data = { ...timeConstraints[type], ...(overrideTimeConstraints[type] || {}) };
		} else {
			data = { ...timeConstraints[type] };
		}
		constraints[type] = data;
	});

	return constraints;
};

export const pad = (type, value) => {
	const padValues = {
		hours: 1,
		minutes: 2,
		seconds: 2,
		milliseconds: 3,
	};

	let str = value + '';
	while (str.length < padValues[type]) {
		str = '0' + str;
	}
	return str;
};

export const getDaysRow = (rows, day) => {
	return rows[Math.floor(day / 7)];
};

export const getDaysOfWeek = (locale) => {
	const first = locale.firstDayOfWeek();
	const dow: any = [];
	let i = 0;

	locale._weekdaysMin.forEach(function (day) {
		dow[(7 + i++ - first) % 7] = day;
	});

	return dow;
};

export const getMonthsRow = (rows, year) => {
	if (year < 4) {
		return rows[0];
	}
	if (year < 8) {
		return rows[1];
	}
	return rows[2];
};

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getYearsRow = (rows, year) => {
	if (year < 3) {
		return rows[0];
	}
	if (year < 7) {
		return rows[1];
	}

	return rows[2];
};

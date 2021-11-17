/**
 *
 * Tests for HealthStatus
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import HealthStatus from './HealthStatus';

describe('HealthStatus', () => {
	const minProps = { data: {} };
	// it('Expect to not log errors in console', () => {
	// 	const spy = jest.spyOn(global.console, 'error');
	// 	const wrapper = mount(<HealthStatus {...minProps} />);
	// });

	it('Snapshot renders correctly', () => {
		const component = shallow(<HealthStatus {...minProps} />);
		expect(component).toMatchSnapshot();
	});
});

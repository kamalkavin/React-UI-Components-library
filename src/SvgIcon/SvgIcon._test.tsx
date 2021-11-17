/**
 *
 * Tests for SvgIcon
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from './SvgIcon';
import { IconList } from 'components/SvgIcon/SVGIconLibrary';

describe('SvgIcon', () => {
	const minProps = { size: 10, icon: '' as IconList };
	it('Expect to not log errors in console', () => {
		// const spy = jest.spyOn(global.console, 'error');
		// const wrapper = mount(
		// <SvgIcon {...minProps} />);
	});

	it('Snapshot renders correctly', () => {
		const component = shallow(<SvgIcon {...minProps} />);
		expect(component).toMatchSnapshot();
	});
});

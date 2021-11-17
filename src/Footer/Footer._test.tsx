/**
 *
 * Tests for Footer
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
	const minProps = { data: {} };
	it('Expect to not log errors in console', () => {
		// const spy = jest.spyOn(global.console, 'error');
		// const wrapper = mount(
		// <Footer {...minProps} />);
	});

	it('Snapshot renders correctly', () => {
		const component = shallow(<Footer {...minProps} />);
		expect(component).toMatchSnapshot();
	});
});

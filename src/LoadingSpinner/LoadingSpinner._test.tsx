/**
 *
 * Tests for LoadingSpinner
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
	it('Snapshot renders correctly', () => {
		const component = shallow(<LoadingSpinner />);
		expect(component).toMatchSnapshot();
	});
});

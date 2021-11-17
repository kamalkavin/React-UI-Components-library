/**
 *
 * Tests for ModalWindow
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
	const minProps = { show: true, onHide: () => void {}, heading: 'TroubleShoot' };
	it('Expect to not log errors in console', () => {
		// const spy = jest.spyOn(global.console, 'error');
		// const wrapper = mount(<ModalWindow {...minProps} />);
	});

	it('Snapshot renders correctly', () => {
		const component = shallow(
			<ModalWindow {...minProps}>
				<div>Hello</div>
			</ModalWindow>
		);
		expect(component).toMatchSnapshot();
	});
});

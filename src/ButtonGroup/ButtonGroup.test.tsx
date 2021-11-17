/**
 *
 * Tests for ButtonGroup
 *
 *
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import { Button } from 'react-bootstrap';

describe('ButtonGroup', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders correctly', () => {
		const { container, getByTitle } = render(
			<ButtonGroup className='custom-class'>
				<Button variant='outline-primary' title='Save' type='submit' />
				<Button variant='outline-primary' title='Cancel' href='#/alarms' className='cancel-manage-alarm' />
			</ButtonGroup>
		);

		expect(getByTitle(/Save/i)).toBeInTheDocument();
		expect(getByTitle(/Cancel/i)).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('custom-class');
	});
});
export {};

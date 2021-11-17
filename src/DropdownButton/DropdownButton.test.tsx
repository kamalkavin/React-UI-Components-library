/**
 * Tests for DropDown Button
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import DropdownButton from './DropdownButton';
import '@testing-library/jest-dom/extend-expect';

describe('DropDown button container', () => {
	afterEach(() => {
		cleanup();
	});
	test('Dropdown button test case', () => {
		const props = {
			title: 'Actions',
			dropdownList: [
				{
					name: 'Add',
					title: 'Add',
					isDisable: true,
					customClass: 'add-dynamic',
					actionCallback: name => {},
				},
				{
					name: 'Remove',
					title: 'Remove',
					isDisable: false,
					customClass: 'add-remove',
					actionCallback: name => {
						document.body.innerHTML = `
   					 <span data-cy="remove-container"></span>`;
					},
				},
			],
		};
		render(<DropdownButton {...props} />);
		expect(screen.getByTestId(props.title)).toBeInTheDocument();
		fireEvent.click(screen.getByText(/Actions/i));
		expect(screen.getByTestId(props.dropdownList[0].name)).toHaveClass('disabled');
		fireEvent.click(screen.getByTestId(props.dropdownList[1].name));
		expect(screen.getByTestId('remove-container')).toBeInTheDocument();
	});
});

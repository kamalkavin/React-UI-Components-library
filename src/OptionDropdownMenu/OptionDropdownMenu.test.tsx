/**
 * Tests for DropDown Button
 */
import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import OptionDropdownMenu from './OptionDropdownMenu';
import '@testing-library/jest-dom/extend-expect';

describe('OptionDropdownMenu button container', () => {
	const optionDropdown = [
		{
			name: 'Add',
			actionCallback: () => {
				document.body.innerHTML = "<span data-cy='options'>Test</span>";
			},
			isDisable: false,
			hide: false,
			customClass: '',
		},
		{
			name: 'Remove',
			actionCallback: () => {},
			isDisable: true,
			customClass: 'remove-class',
		},
	];
	afterEach(() => {
		cleanup();
	});
	test('Dropdown button test case', () => {
		act(() => {
			render(<OptionDropdownMenu dropdownList={optionDropdown} name='dropdown-options' />);
		});

		expect(screen.getByTestId('dropdown-options')).toBeInTheDocument();
		act(() => {
			fireEvent.click(screen.getByTestId('toggle-dropdown-options'));
		});
		expect(screen.getByTestId('Add')).toBeInTheDocument();
		expect(screen.getByTestId('Remove')).toBeInTheDocument();
		fireEvent.click(screen.getByTestId('Add'));
		expect(screen.getByTestId('options')).toBeInTheDocument();
	});
});

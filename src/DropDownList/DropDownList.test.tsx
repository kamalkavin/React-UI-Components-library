/**
 * Tests for DropDown Button
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import DropDownList from './DropDownList';
import '@testing-library/jest-dom/extend-expect';

describe('DropDown button container', () => {
	afterEach(() => {
		cleanup();
	});
	test('Dropdown button test case', () => {
		const list = [
			{ value: 'correlated', label: 'Correlated Alarms' },
			{ value: 'alarms', label: 'All Alarms' },
		];
		const viewBy = 'alarms';
		render(
			<DropDownList
				label='View By: '
				className='criteria-pill-container'
				selected={viewBy}
				list={list}
				onSelect={(value) => {
					document.body.innerHTML = '<span data-cy="dropdwon-selected"></span>';
				}}
			/>
		);
		expect(screen.getByTestId('view-by-dropdown')).toBeInTheDocument();
		fireEvent.click(screen.getByText(/All Alarms/i));
		expect(screen.getByTestId(list[0].label)).toBeInTheDocument();
		expect(screen.getByTestId(list[1].label)).toBeInTheDocument();
		fireEvent.click(screen.getByTestId(list[0].label));
		expect(screen.getByTestId('dropdwon-selected')).toBeInTheDocument();
	});
	test('Dropdown button test case', () => {
		const list = [
			{ value: 'correlated', label: 'Correlated Alarms' },
			{ value: 'alarms', label: 'All Alarms' },
		];
		const viewBy = 'correlated';
		render(
			<DropDownList
				label='View By: '
				selected={viewBy}
				list={list}
				onSelect={(value) => {
					document.body.innerHTML = '<span data-cy="dropdwon-selected"></span>';
				}}
			/>
		);
		expect(screen.getByTestId('view-by-dropdown')).toBeInTheDocument();
		fireEvent.click(screen.getByText(/Correlated Alarms/i));
		expect(screen.getByTestId(list[0].label)).toBeInTheDocument();
		expect(screen.getByTestId(list[1].label)).toBeInTheDocument();
		fireEvent.click(screen.getByTestId(list[1].label));
		expect(screen.getByTestId('dropdwon-selected')).toBeInTheDocument();
	});
});
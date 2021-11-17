/**
 *
 * Tests for Checkbox
 *
 *
 */

import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('Checkbox Component', () => {
	afterEach(() => {
		cleanup();
	});
	test('Checkbox test case', () => {
		const props: CheckboxProps = {
			name: 'test',
			type: 'checkbox',
			className: 'test-class',
			label: 'on',
			errors: {
				test: {
					message: 'Requird',
				},
			},
		};
		render(<Checkbox {...props} />);
		expect(screen.getByTestId(props.name)).toBeInTheDocument();
		fireEvent.input(screen.getByTestId(props.name), {
			target: {
				value: true,
			},
		});
	});
});

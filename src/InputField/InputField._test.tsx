/**
 *
 * Tests for InputField
 *
 */

import React from 'react';
import InputField, { InputProps } from './InputField';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('InputField Component', () => {
	afterEach(() => {
		cleanup();
	});
	test('InputField test case', () => {
		const props: InputProps = {
			name: 'test',
			type: 'text',
			placeHolder: 'Test Placeholder',
			className: 'test-class',
			value: 'test value for input field',
		};
		render(<InputField {...props} />);
		expect(screen.getByTestId(props.name)).toBeInTheDocument();
		fireEvent.input(screen.getByTestId(props.name), {
			target: {
				value: 'test value for input field',
			},
		});
	});
});

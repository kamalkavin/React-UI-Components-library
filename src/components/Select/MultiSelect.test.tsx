/**
 *
 * Tests for Select
 *
 *
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Select from './Select';

const server = setupServer(
	rest.get('/api/v1.3/', (req, res, ctx) => {
		return Promise.resolve(res(ctx.json({})));
	})
);

describe('Select', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());
	beforeEach(() => {
		render(
			<Select
				name='Select'
				options={[
					{ value: 'chocolate', label: 'Chocolate' },
					{ value: 'strawberry', label: 'Strawberry' },
					{ value: 'vanilla', label: 'Vanilla' },
				]}
			/>
		);
	});
	afterEach(() => {
		server.resetHandlers();
		cleanup();
	});
	test('should check component container', () => {
		expect(screen.getByTestId('Select')).toBeInTheDocument();
	});
});

/**
 *
 * Tests for ProgressBar
 *
 *
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ProgressBar from './ProgressBar';

const server = setupServer(
	rest.get('/api/v1.3/', (req, res, ctx) => {
		return Promise.resolve(res(ctx.json({})));
	})
);

describe('ProgressBar', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());
	beforeEach(() => {
		render(<ProgressBar height={''} />);
	});
	afterEach(() => {
		server.resetHandlers();
		cleanup();
	});
	test('should check component container', () => {
		expect(screen.getByTestId('ProgressBar')).toBeInTheDocument();
	});
});

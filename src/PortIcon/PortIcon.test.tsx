/**
 *
 * Tests for PortIcon
 *
 *
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import PortIcon from './PortIcon';

const server = setupServer(
	rest.get('/api/v1.3/', (req, res, ctx) => {
		return Promise.resolve(res(ctx.json({})));
	})
);

describe('PortIcon', () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());
	beforeEach(() => {
		render(<PortIcon type='eport' />);
	});
	afterEach(() => {
		server.resetHandlers();
		cleanup();
	});
	test('should check component container', () => {
		expect(screen.getByTestId('PortIcon')).toBeInTheDocument();
	});
});

/**
 *
 * Tests for Skeleton
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Skeleton from './Skeleton';

describe('Skeleton', () => {
	it('Expect to not log errors in console', () => {
		render(<Skeleton width='100px' />);
	});
});

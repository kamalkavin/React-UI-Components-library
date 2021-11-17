/**
*
* Tests for SelectComponent
*
*
*/

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node';
import CustomSelect from './CustomSelect';

const server = setupServer(
    rest.get('/api/v1.3/', (req, res, ctx) => {
        return Promise.resolve(res(ctx.json({
		})));
    })
)

describe ('SelectComponent', ()=>{
    beforeAll(() => server.listen());
	afterAll(() => server.close());
    beforeEach(() => {
       render( <CustomSelect value={[]} options={[]} handleChange={() => { } } name={''} />);
    });
    afterEach(() => {
		server.resetHandlers()
		cleanup();
    });
    test('should check component container', () => {
        expect(screen.getByTestId('custom-select')).toBeInTheDocument();
    });

});
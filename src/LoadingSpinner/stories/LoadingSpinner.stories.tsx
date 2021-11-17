import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingSpinner from '../LoadingSpinner';

storiesOf('Basics/LoadingSpinner', module)
	.addParameters({ component: LoadingSpinner })
	.add('default', () => <LoadingSpinner />);

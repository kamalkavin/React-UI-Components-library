import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '../ProgressBar';

storiesOf('ProgressBar', module)
	.addParameters({ component: ProgressBar })
	.add('default', () => <ProgressBar height={'8px'} />);

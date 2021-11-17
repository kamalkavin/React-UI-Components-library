import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

enum variant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
}

storiesOf('Basics/Button', module)
	.addParameters({ component: Button })
	.add('Primary', () => <Button label={`Primary`} variant={variant.primary} name={''} />)
	.add('Secondary', () => <Button label={`Secondary`} variant={variant.secondary} name={''} />)
	.add('Success', () => <Button label={`Success`} variant={variant.success} name={''} />);

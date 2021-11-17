import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '../Banner';

enum variant {
	primary = 'primary',
	secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning= 'warning',
  info = 'info',
  dark = 'dark',
  light = 'light'
}

storiesOf('Basics/Banner', module)
	.addParameters({ component: Banner })
	.add('Primary', () => (
    <Banner variant={variant.primary} dismissible={true}>
        This is a primary dismissible Banner
    </Banner>
  ))
	.add('Secondary', () => (
    <Banner variant={variant.secondary}>
      This is a secondary non-dismissible Banner
    </Banner>
  ))
	.add('Success', () => (
    <Banner variant={variant.success}>
      This is a success Banner
    </Banner>
  ));

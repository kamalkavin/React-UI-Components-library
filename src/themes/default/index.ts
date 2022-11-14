import components from './components';
import commons from './commons';
import tokens from './tokens';

export default {
	// Once we are done using the above ^ we can switch to this:
	...tokens,
	commons,
	// Component-specific theming
	components,
};

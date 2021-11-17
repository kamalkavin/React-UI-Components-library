import React from 'react';
import { storiesOf } from '@storybook/react';
import HealthStatus from '../HealthStatus';

// const healthStates = ['red', 'orange', 'yellow', 'green', 'grey'];

const redData = {
	healthState: 'red',
	trafficHealthState: 'red',
	healthStateReasons: [
		{
			severity: 'red',
			message: 'Port(s) 1/1/x10, 1/1/x2 are link down',
		},
	],
	trafficHealthStateReasons: [
		{
			severity: 'red',
			message: 'Port(s) 1/1/x10, 1/1/x2 are link down',
		},
	],
};
const orangeData = {
	healthState: 'orange',
	trafficHealthState: 'orange',
	healthStateReasons: [
		{
			severity: 'orange',
			message: 'Port(s) 1/1/x10, 1/1/x2 are link down',
		},
	],
	trafficHealthStateReasons: [
		{
			severity: 'orange',
			message: 'Port(s) 1/1/x10, 1/1/x2 are link down',
		},
	],
};
const yellowData = {
	healthState: 'yellow',
	trafficHealthState: 'yellow',
};
const greenData = {
	healthState: 'green',
	trafficHealthState: 'green',
};
const greyData = {
	healthState: 'grey',
	trafficHealthState: 'grey',
};
storiesOf('Icons/HealthStatus', module)
	.addParameters({ component: HealthStatus })
	.add('default', () => (
		<div style={{ marginTop: '50px', display: 'flex' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HealthStatus data={redData} toolTip={true} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HealthStatus data={greenData} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HealthStatus data={yellowData} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HealthStatus data={orangeData} toolTip={true} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<HealthStatus data={greyData} />
			</div>
		</div>
	));

/**
 *
 * HealthStatus
 *
 */

import React, { FC } from 'react';
import HealthStatsRed from 'assets/icons/led-status-red.svg';
import HealthStatsGreen from 'assets/icons/led-status-green.svg';
import HealthStatsYellow from 'assets/icons/led-status-yellow.svg';
import HealthStatsOrange from 'assets/icons/led-status-orange.svg';
import HealthStatsAmber from 'assets/icons/led-status-amber.svg';
import HealthStatsGrey from 'assets/icons/led-status-grey.svg';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

interface IProps {
	data?: any;
	cell?: any;
	type?: string;
	toolTip?: boolean;
}
const HealthStatus: FC<IProps> = (props: IProps) => {
	const type = props.type;
	const toolTip = props.toolTip || false;
	const cellData = props.cell;
	const healthData = props.data || (cellData && (cellData.row.original.status || cellData.row.original));
	let healthState: string = '';
	let healtStateMessage: string = '';
	if (healthData) {
		if (healthData.healthStateReasons && healthData.healthStateReasons.length > 0) {
			healtStateMessage = healthData.healthStateReasons[0].message;
		} else if (
			!healthData.healthStateReasons &&
			healthData.trafficHealthStateReasons &&
			healthData.trafficHealthStateReasons.length > 0
		) {
			healtStateMessage = healthData.trafficHealthStateReasons[0].message;
		} else {
			healtStateMessage = '';
		}
		const priority = ['red', 'orange', 'yellow', 'green', 'grey'];

		let healthIndex = healthData.healthState ? priority.indexOf(healthData.healthState) : 4;
		const trafficHealthIndex = healthData.trafficHealthState
			? priority.indexOf(healthData.trafficHealthState.toLowerCase())
			: 4;

		if (healthIndex > trafficHealthIndex) {
			healthIndex = trafficHealthIndex;
			priority[2] = 'amber';
		}
		healthState = priority[healthIndex];
		if (healtStateMessage && healtStateMessage.length > 300) {
			healtStateMessage = healtStateMessage.slice(0, 300) + '...';
		}
	}
	switch (healthData && healthState) {
		case 'green':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{type ? type + ' is ' : ''}Healthy</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsGreen} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsGreen} alt='Health' width='16px' height='16px' />{' '}
							<span className='tooltip-message pl-1'>{type ? type + ' is ' : ''}Healthy</span>
						</span>
					)}
				</div>
			);
		case 'red':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{healtStateMessage}</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsRed} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsRed} alt='Health Icon' width='16px' height='16px' />
							<span className='tooltip-message pl-1' title={healtStateMessage}>
								{healtStateMessage}
							</span>
						</span>
					)}
				</div>
			);
		case 'orange':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{healtStateMessage}</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsOrange} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsOrange} alt='Health Icon' width='16px' height='16px' />
							<span className='tooltip-message pl-1' title={healtStateMessage}>
								{healtStateMessage}
							</span>
						</span>
					)}
				</div>
			);
		case 'yellow':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{healtStateMessage}</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsYellow} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsYellow} alt='Health Icon' width='16px' height='16px' />
							<span className='tooltip-message pl-1' title={healtStateMessage}>
								{healtStateMessage}
							</span>
						</span>
					)}
				</div>
			);
		case 'grey':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{healtStateMessage}</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsGrey} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsGrey} alt='Health Icon' width='16px' height='16px' />
							<span className='tooltip-message pl-1' title={healtStateMessage}>
								{healtStateMessage}
							</span>
						</span>
					)}
				</div>
			);
		case 'amber':
			return (
				<div id='health-status'>
					{toolTip ? (
						<OverlayTrigger
							key='top'
							placement='top'
							overlay={
								<Tooltip id='tooltip-top'>
									<span className='tooltip-message pl-1'>{healtStateMessage}</span>
								</Tooltip>
							}>
							<div className='health-status pl-1 pr-2'>
								<img src={HealthStatsAmber} alt='Health' width='16px' height='16px' />
							</div>
						</OverlayTrigger>
					) : (
						<span className='health-status pl-1 pr-2'>
							<img src={HealthStatsAmber} alt='Health Icon' width='16px' height='16px' />
							<span className='tooltip-message pl-1' title={healtStateMessage}>
								{healtStateMessage}
							</span>
						</span>
					)}
				</div>
			);
		default:
			return <></>;
	}
};
export default HealthStatus;

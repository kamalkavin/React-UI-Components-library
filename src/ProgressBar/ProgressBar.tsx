/**
 *
 * ProgressBar
 *
 */

import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface IProps {
	height: string;
}

const ProgressBar: FC<IProps> = (props: IProps) => {
	const [value, setValue] = useState(0);
	const [max, setMax] = useState(0);
	const [showProgressBar, setShowProgressBar] = useState(false);

	const globalData = useSelector((state: any) => state.globalData);

	useEffect(() => {
		setValue(globalData.progressLoading);
		setShowProgressBar(true);
	}, [globalData.progressLoading]);
	useEffect(() => {
		setMax(globalData.totalLoadingRequest);
	}, [globalData.totalLoadingRequest]);

	useEffect(() => {
		if (value / max === 1) {
			setTimeout(() => {
				setShowProgressBar(false);
			}, 1000);
		}
	}, [value]);
	return (
		<div id='progress-bar' data-cy='progress-bar'>
			{showProgressBar ? (
				<div className='progress' style={{ height: `${props.height}` }}>
					<div
						className='progress-bar'
						role='progressbar'
						style={{ width: `${(value / max) * 100}%` }}
						aria-valuenow={value}
						aria-valuemin={0}
						aria-valuemax={max}></div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProgressBar;

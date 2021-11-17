/**
 *
 * LoadingSpinner
 *
 */

import React from 'react';

const LoadingSpinner = () => {
	return (
		<div className='centered-spinner'>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-sm-6 col-sm-offset-3 text-center'>
						<h1>
							<i className='fa fa-spinner fa-pulse fa-3x'></i>
						</h1>
						<h1 className='loading-text'>Loading...</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;

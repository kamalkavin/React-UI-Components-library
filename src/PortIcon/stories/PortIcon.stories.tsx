import React from 'react';
import { storiesOf } from '@storybook/react';
import PortIcon, { PortSVGIcons } from '../PortIcon';
const listOfIcons = Object.keys(PortSVGIcons);
console.log('listOfIcons', listOfIcons);
storiesOf('PortIcon', module)
	.addParameters({ component: PortIcon })
	.add('default', () => (
		<div>
			<section>
				<h2>Custom SVG Icons</h2>
				<div className='flex flex-row flex-wrap justify-start items-stretch'>
					{listOfIcons.map((icon: any, i) => (
						<article key={i} id='ad' className='icon-ct'>
							<dl className='dt'>
								<dt className='dtc'>
									<span className='fw select-all fas'>
										<PortIcon type={icon} />
									</span>
								</dt>
							</dl>
						</article>
					))}
				</div>
			</section>
		</div>
	));

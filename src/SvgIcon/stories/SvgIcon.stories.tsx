import React from 'react';
import { storiesOf } from '@storybook/react';
import SvgIcon from '../SvgIcon';
import Icons from 'components/SvgIcon/SVGIconLibrary';
const props = {
	size: 24,
	color: '000000',
};
const listOfIcons: any = Object.keys(Icons);
console.log('listOfIcons', listOfIcons);
storiesOf('Icons/SvgIcon', module)
	.addParameters({ component: SvgIcon })
	.add('default', () => (
		<div>
			<section>
				<h2>Gigamon Custom SVG Icons</h2>
				<div className='flex flex-row flex-wrap justify-start items-stretch'>
					{listOfIcons.map((icon, i) => {
						return (
							<article key={i} id='ad' className='icon-ct'>
								<dl className='dt'>
									<dt className='dtc'>
										<span className='fw select-all fas'>
											<SvgIcon icon={icon} {...props} />
										</span>
									</dt>
									{/* <dd className='ma0 pa0 pr2 select-all word-wrap dtc v-top tl f2 icon-name'>ad</dd>
							<dd className='ma0 pa0 select-all gray5 dtc v-top tr f2 icon-unicode'>f641</dd> */}
								</dl>
							</article>
						);
					})}
				</div>
			</section>
		</div>
	));

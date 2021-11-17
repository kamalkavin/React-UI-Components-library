/**
 *
 * Skeleton
 *
 */
import React, { FC } from 'react';
interface IProps {
	width?: string;
	height?: string;
	widthRandomness?: number;
	heightRandomness?: number;
	borderRadius?: string;
	color?: string;
	count?: number;
	animated?: boolean;
	type?: 'text' | 'chart';
}

const Skeleton: FC<IProps> = (props: IProps) => {
	const {
		width = '150px',
		height = '100%',
		// widthRandomness = 0.25,
		// heightRandomness = 0,
		borderRadius = '8px',
		color = '#EFF1F6',
		count = 1,
		animated = true,
		type = 'text',
	} = props;

	const brdrRadius = borderRadius;
	const clr = color;

	// const w = parseFloat(width);
	// const h = parseFloat(height);
	// const wm = width.toString().replace(/\d+/g, '');
	// const hm = height.toString().replace(/\d+/g, '');
	const elements: any = [];
	const chart: any = [];

	for (let i = 0; i < count; i++) {
		// const width = `${w - Math.random() * w * widthRandomness}${wm}`;
		// const height = `${h - Math.random() * h * heightRandomness}${hm}`;
		elements.push(
			<span
				className={`react-skeleton-load ${animated ? 'animated' : ''}`}
				key={i}
				style={{
					width,
					height,
					borderRadius: brdrRadius,
					backgroundColor: clr,
				}}>
				&zwnj;
			</span>
		);
		if (i !== count - 1) {
			elements.push(<br key={`br-${i}`} />);
		}
	}
	if (type === 'chart') {
		chart.push(
			<div
				className={`react-skeleton-chart-load ${animated ? 'animated' : ''}`}
				style={{
					width,
					height,
					padding: '0 10px',
				}}>
				<svg viewBox='0 0 260 80' width='100%' height='100%' fill={clr}>
					<path
						d='M0,100l0-50.6574c0-3.9935,4.4507-6.3754,7.7735-4.1603L24.453,56.302c3.359,2.2393,7.735,2.2393,11.094,0
					l20.4222-13.6148C58.5975,40.935,61.6856,40,64.8444,40h19.2347c3.7324,0,7.2523-1.7367,9.5233-4.6988L113.3213,9.581
					c3.2716-4.2673,9.9331-3.4056,12.0113,1.5536l21.2123,50.6204c1.6486,3.9341,6.7603,4.9399,9.7764,1.9237l16.6076-16.6076
					c3.9052-3.9052,10.2369-3.9052,14.1422,0l8.8284,8.8284C198.525,58.525,202.086,60,205.799,60h9.5343
					c3.0292,0,5.9767-0.9825,8.4-2.8l26.6667-20c3.9554-2.9666,9.6-0.1443,9.6,4.8v58H0z'></path>
				</svg>
			</div>
		);
	}

	return <>{type === 'text' ? <span>{elements}</span> : <span>{chart}</span>}</>;
};

export default Skeleton;

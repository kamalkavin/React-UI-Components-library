import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
<g fill="none" fill-rule="evenodd">
  <rect width="512" height="512" fill="#718898" rx="45"/>
  <path fill="#FDFDFD" d="M343.2224,326.51944 C345.95276,326.51944 348.310763,327.574336 350.29648,329.68416 L370.02944,351.09256 C359.107999,364.620254 345.673586,374.983057 329.7258,382.18128 C313.778014,389.379503 294.634752,392.97856 272.29544,392.97856 C252.314167,392.97856 234.349906,389.565661 218.40212,382.73976 C202.454334,375.913859 188.833763,366.419794 177.54,354.25728 C166.246237,342.094766 157.589883,327.574431 151.57068,310.69584 C145.551477,293.817249 142.54192,275.387593 142.54192,255.40632 C142.54192,235.176832 145.892766,216.654097 152.59456,199.83756 C159.296354,183.021023 168.728366,168.531714 180.89088,156.3692 C193.053394,144.206686 207.604755,134.743647 224.5454,127.9798 C241.486045,121.215953 260.194938,117.83408 280.67264,117.83408 C300.653913,117.83408 318.121752,121.029795 333.07668,127.42132 C348.031608,133.812845 360.845493,142.283041 371.51872,152.83216 L354.76432,176.10216 C353.771462,177.591447 352.499381,178.894554 350.94804,180.01152 C349.396699,181.128486 347.25588,181.68696 344.52552,181.68696 C341.671052,181.68696 338.754575,180.570011 335.776,178.33608 C332.797425,176.102149 329.01221,173.682093 324.42024,171.07584 C319.82827,168.469587 314.026342,166.049531 307.01428,163.8156 C300.002218,161.581669 291.097654,160.46472 280.30032,160.46472 C267.641377,160.46472 256.006493,162.667591 245.39532,167.0734 C234.784147,171.479209 225.662398,177.777559 218.0298,185.96864 C210.397202,194.159721 204.440141,204.119181 200.15844,215.84732 C195.876739,227.575459 193.73592,240.76166 193.73592,255.40632 C193.73592,270.547409 195.876739,284.012848 200.15844,295.80304 C204.440141,307.593232 210.24207,317.521666 217.5644,325.58864 C224.88673,333.655614 233.512057,339.829859 243.44064,344.11156 C253.369223,348.393261 264.04229,350.53408 275.46016,350.53408 C282.286061,350.53408 288.460306,350.161764 293.98308,349.41712 C299.505854,348.672476 304.594177,347.493475 309.2482,345.88008 C313.902223,344.266685 318.307966,342.187919 322.46556,339.64372 C326.623154,337.099521 330.74966,333.965859 334.8452,330.24264 C336.086273,329.125674 337.38938,328.22591 338.75456,327.54332 C340.11974,326.86073 341.609005,326.51944 343.2224,326.51944 Z"/>
</g>
</svg>`;

const CircuitPortIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default CircuitPortIcon;
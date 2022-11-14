import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}
const svgIcon = `<svg width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <defs>
        <rect id="path-1" x="-10" y="-10" width="512" height="512" rx="45"></rect>
    </defs>
    <g id="v2-Paths" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Network-Port" sketch:type="MSArtboardGroup">
            <g id="Network-Background">
                <use fill="none" sketch:type="MSShapeGroup" xlink:href="#path-1"></use>
                <use fill="#718898" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
            <path d="M168.434182,121.781091 C170.668375,121.781091 172.530174,121.874181 174.019636,122.060364 C175.509098,122.246546 176.843388,122.618906 178.022545,123.177455 C179.201703,123.736003 180.349813,124.542783 181.466909,125.597818 C182.584006,126.652854 183.825205,128.049203 185.190545,129.786909 L326.502545,309.824727 C326.006058,305.480463 325.664728,301.229354 325.478545,297.071273 C325.292363,292.913191 325.199273,289.034442 325.199273,285.434909 L325.199273,121.781091 L369.324364,121.781091 L369.324364,391 L343.445091,391 C339.473192,391 336.184013,390.3794 333.577455,389.138182 C330.970896,387.896963 328.426437,385.662804 325.944,382.435636 L185.190545,203.142545 C185.562911,207.114444 185.842181,211.055253 186.028364,214.965091 C186.214546,218.874929 186.307636,222.443378 186.307636,225.670545 L186.307636,391 L142.182545,391 L142.182545,121.781091 L168.434182,121.781091 Z" id="N" fill="#FDFDFD" sketch:type="MSShapeGroup"></path>
        </g>
    </g>
</svg>`;

const NetworkPortIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default NetworkPortIcon;

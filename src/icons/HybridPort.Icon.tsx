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
        <rect id="path-1" x="0" y="0" width="512" height="512" rx="45"></rect>
    </defs>
    <g id="v2-Paths" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Hybrid-Port" sketch:type="MSArtboardGroup">
            <g id="Hybrid-Background-+-H" sketch:type="MSLayerGroup">
                <g id="Hybrid-Background">
                    <use fill="none" sketch:type="MSShapeGroup" xlink:href="#path-1"></use>
                    <use fill="#718898" fill-rule="evenodd" xlink:href="#path-1"></use>
                </g>
                <path d="M382.29456,390 L331.8452,390 L331.8452,272.34688 L205.62872,272.34688 L205.62872,390 L155.17936,390 L155.17936,120.81264 L205.62872,120.81264 L205.62872,236.60416 L331.8452,236.60416 L331.8452,120.81264 L382.29456,120.81264 L382.29456,390 Z" id="H" fill="#FDFDFD" sketch:type="MSShapeGroup"></path>
            </g>
        </g>
    </g>
</svg>`;

const HybridPortIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default HybridPortIcon;

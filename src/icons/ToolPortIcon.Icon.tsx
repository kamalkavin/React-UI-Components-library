import React, { FC, memo } from 'react';
import Icon from '../components/Icon/Icon';
import { BoxProps } from 'ui-box';

interface IconProps extends BoxProps<any> {
	width: string;
	height: string;
	name: string;
	color?: string;
}
const svgIcon = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
<defs>
    <rect id="path-1" x="0" y="0" width="512" height="512" rx="45"></rect>
</defs>
<g id="v2-Paths" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Tool-Port" sketch:type="MSArtboardGroup">
        <g id="Tool-Background">
            <use fill="none" sketch:type="MSShapeGroup" xlink:href="#path-1"></use>
            <use fill="#718898" fill-rule="evenodd" xlink:href="#path-1"></use>
        </g>
        <path d="M367.901818,121.781091 L367.901818,162.927273 L286.912727,162.927273 L286.912727,391 L236.829818,391 L236.829818,162.927273 L155.468364,162.927273 L155.468364,121.781091 L367.901818,121.781091 Z" id="T" fill="#FDFDFD" sketch:type="MSShapeGroup"></path>
    </g>
</g>
</svg>`;

const ToolPortIcon: FC<IconProps> = memo(({ width, height, name, color, ...rest }: IconProps) => {
	return <Icon svg={svgIcon} width={width} height={height} name={name} color={color} {...rest} />;
});

export default ToolPortIcon;

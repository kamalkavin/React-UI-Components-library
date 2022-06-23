/**
 *
 * PortIcon
 *
 */

import React, { FC } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export type PortIconType =
	| 'tool'
	| 'map ';

export const PortSVGIcons = {
	tool: {
		tooltip: 'Tool Port',
		name: 'Tool Port',
		svg:
			'<svg width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch --> <title>Tool Port</title> <desc>Created with Sketch.</desc> <defs> <rect id="path-1" x="0" y="0" width="512" height="512" rx="45"></rect> </defs> <g id="v2-Paths" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Tool-Port" sketch:type="MSArtboardGroup"> <g id="Tool-Background"> <use fill="none" sketch:type="MSShapeGroup" xlink:href="#path-1"></use> <use fill="#718898" fill-rule="evenodd" xlink:href="#path-1"></use> </g> <path d="M367.901818,121.781091 L367.901818,162.927273 L286.912727,162.927273 L286.912727,391 L236.829818,391 L236.829818,162.927273 L155.468364,162.927273 L155.468364,121.781091 L367.901818,121.781091 Z" id="T" fill="#FDFDFD" sketch:type="MSShapeGroup"></path> </g> </g> </svg>',
	},
	map: {
		svg:
			'<svg width="512px" height="512px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch --> <title>Map Type</title> <desc>Created with Sketch.</desc> <defs> <rect id="path-1" x="0" y="0" width="512" height="512" rx="93"></rect> <path id="path-2" d="M189.692308,0 L221.307692,0 L221.307692,285 L189.692308,285 L189.692308,0 Z"></path> <path id="path-3" d="M15.8076923,41.9061446 C26.3969922,42.883143 36.1355661,45.0097327 44.8750966,48.1903711 C54.1099511,51.5528484 62.2562122,56.0525889 69.3278721,61.5878861 C74.6309173,65.742441 79.3406931,70.4764145 83.4767886,75.8360369 C89.6725365,83.8739294 94.6229782,93.3172203 98.1686027,104.511095 C101.705832,115.70497 103.815856,128.671003 104.07891,143.560213 C104.2748,154.621561 104.336366,169.29503 104.336366,185.24137 C104.336366,211.407669 104.171258,241.044316 104.171258,264.609395 C104.171258,272.111017 104.188049,279.002401 104.230025,285 L142.16289,284.657896 C142.120913,278.839054 142.104123,272.043213 142.104123,264.609395 C142.104123,241.241565 142.269231,211.589508 142.269231,185.24137 C142.269231,169.165585 142.207665,154.331852 142.006177,142.749643 C141.619993,120.515994 137.903663,100.165455 130.980321,82.1726577 C125.797608,68.6919284 118.807103,56.5672852 110.271859,46.1285038 C97.4717909,30.4441344 81.263222,18.6492668 62.9614193,10.9503958 C48.4375117,4.83259798 32.5983369,1.23588762 15.8076923,0 L15.8076923,41.9061446"></path> <path id="path-4" d="M395.192308,41.9061446 C384.603008,42.883143 374.864434,45.0097327 366.124903,48.1903711 C356.88725,51.5528484 348.743788,56.0525889 341.672128,61.5878861 C336.369083,65.742441 331.659307,70.4764145 327.523211,75.8360369 C321.327464,83.8739294 316.377022,93.3172203 312.831397,104.511095 C309.294168,115.70497 307.181345,128.671003 306.918292,143.560213 C306.7252,154.621561 306.663634,169.29503 306.663634,185.24137 C306.663634,211.407669 306.828742,241.044316 306.828742,264.609395 C306.828742,272.111017 306.811951,279.002401 306.767176,285 L268.834312,284.657896 C268.881885,278.839054 268.893079,272.043213 268.893079,264.609395 C268.893079,241.241565 268.730769,211.589508 268.730769,185.24137 C268.730769,169.165585 268.792335,154.331852 268.991024,142.749643 C269.382806,120.515994 273.096337,100.165455 280.016881,82.1726577 C285.199593,68.6919284 292.192897,56.5672852 300.728141,46.1285038 C313.528209,30.4441344 329.73398,18.6492668 348.038581,10.9503958 C362.565287,4.83259798 378.401663,1.23588762 395.192308,0 L395.192308,41.9061446"></path> </defs> <g id="v2-Paths" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Map-Type" sketch:type="MSArtboardGroup"> <g id="Network-Background"> <use fill="none" sketch:type="MSShapeGroup" xlink:href="#path-1"></use> <use fill="#718898" fill-rule="evenodd" xlink:href="#path-1"></use> </g> <g id="Fill-3-+-Fill-4-+-Fill-5" sketch:type="MSLayerGroup" transform="translate(51.000000, 117.000000)"> <g id="Fill-3"> <use fill="#FFFFFF" fill-rule="evenodd" sketch:type="MSShapeGroup" xlink:href="#path-2"></use> <use fill="none" xlink:href="#path-2"></use> </g> <g id="Fill-4"> <use fill="#FFFFFF" fill-rule="evenodd" sketch:type="MSShapeGroup" xlink:href="#path-3"></use> <use fill="none" xlink:href="#path-3"></use> </g> <g id="Fill-5"> <use fill="#FFFFFF" fill-rule="evenodd" sketch:type="MSShapeGroup" xlink:href="#path-4"></use> <use fill="none" xlink:href="#path-4"></use> </g> </g> </g> </g> </svg>',
		tooltip: 'Map',
		name: 'Map',
	}
};

interface IProps {
	type: PortIconType;
	className?: string;
	style?: {};
	onClick?: (e: any) => void;
}
const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const PortIcon: FC<IProps> = (props: IProps) => {
	const style = props.style || {};
	const className = props.className || '';
	const styles = { ...defaultStyles, ...style };
	const svgIcon = PortSVGIcons[props.type] ? PortSVGIcons[props.type].svg : '';
	const toolTip = PortSVGIcons[props.type] ? PortSVGIcons[props.type].tooltip : '';
	const name = PortSVGIcons[props.type] ? PortSVGIcons[props.type].name : '';
	return (
		<div id='port-icon' data-cy={name + '-port-icon'} className={className} style={styles} {...props}>
			<OverlayTrigger
				key='top'
				placement='top'
				overlay={<Tooltip id='tooltip-top'>{toolTip}</Tooltip>}>
				<div>
					{svgIcon && (
						<svg style={style} xmlns='http://www.w3.org/2000/svg'>
							<Symbol symbol={svgIcon} />;
						</svg>
					)}
				</div>
			</OverlayTrigger>
		</div>
	);
};

export const Symbol = (props) => {
	const attribute = (name, value, svg) => {
		const pattern = new RegExp(`${name}=(?:"|')([^("|')]*)(?:"|')`);

		if (!value) {
			let svgOpenTag = svg.startsWith('<svg') ? svg.match(/<svg[^>]*>/)[0] : null;
			value = svgOpenTag && pattern.test(svgOpenTag) ? svgOpenTag.match(pattern)[1] : null;
		}
		return value;
	};

	const extractChildren = (svg) => {
		return { __html: svg.replace(/<svg[^>]*>|<\/svg>/g, '') }; // remove svg tags
	};
	return (
		<svg
			viewBox={attribute('viewBox', '', props.symbol)}
			className={attribute('class', '', props.symbol)}
			dangerouslySetInnerHTML={extractChildren(props.symbol)}
		/>
	);
};
export default PortIcon;

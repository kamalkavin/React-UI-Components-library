/**
 *
 * SvgIcon
 *
 */

import React, { FC } from 'react';
import iconPath, { IconList } from 'components/SvgIcon/SVGIconLibrary';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface IProps {
	size?: number;
	color?: string;
	icon: IconList;
	className?: string;
	style?: {};
	toolTip?: string;
	onClick?: (e: any) => void;
	width?: number;
	height?: number;
}
const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const SvgIcon: FC<IProps> = (props: IProps) => {
	const size = props.size || 16;
	const width  = size ? size : props.width || 16;
	const height  = size ? size : props.height || 16;
	const style = props.style || {};
	const color = props.color || '#000000';
	const className = props.className || '';
	const styles = { ...defaultStyles, ...style };
	const icon = iconPath[props.icon] && iconPath[props.icon].svg;
	const name = (iconPath[props.icon] && iconPath[props.icon].name) || '';
	return (
		<div
			id='svg-icon'
			data-cy={name + '-svg-icon'}
			className={className}
			style={styles}
			onClick={() => props.onClick}>
			{props.toolTip ? (
				<OverlayTrigger
					key={'top'}
					placement={'top'}
					overlay={<Tooltip id={`tooltip-${'top'}`}>{props.toolTip}</Tooltip>}>
					<>
						{icon && (
							<Symbol symbol={icon} color={color} style={styles} width={`${width}px`} height={`${height}px`} />
						)}
					</>
				</OverlayTrigger>
			) : (
				<>
					{icon && (
						<Symbol symbol={icon} color={color} style={styles} width={`${width}px`} height={`${height}px`} />
					)}
				</>
			)}
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
			width={props.width}
			height={props.height}
			viewBox={attribute('viewBox', '', props.symbol)}
			className={attribute('class', '', props.symbol)}
			fill={props.color}
			dangerouslySetInnerHTML={extractChildren(props.symbol)}
			preserveAspectRatio='none'
		/>
	);
};

export default SvgIcon;

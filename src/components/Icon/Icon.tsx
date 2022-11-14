/**
 *
 * Icon component
 *
 */

import React, { FC, memo, forwardRef } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import useInternalStyles from './styles/Icon.style';

const pseudoSelectors = {};
export interface IconProps extends BoxProps<any> {
	className?: string;
	color?: string;
	name: string;
	width: string;
	height: string;
	svg: string;
}

const Icon: FC<IconProps> = memo(
	forwardRef(({ className, color = 'currentColor', name, width, svg, height, ...svgProps }: IconProps, ref) => {
		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...styleProps } = useStyleConfig(
			{ color, width, height },
			pseudoSelectors,
			internalStyles
		);

		const svgWidth = width || '16px';
		const svgHeight = height || '16px';
		const currentIcon = svg;

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

		const viewBox = attribute('viewBox', '', currentIcon) || '0 0 24 24';

		return (
			<Box is='div' className={cx(className, themedClassName)} {...styleProps} {...svgProps}>
				<svg
					width={svgWidth}
					height={svgHeight}
					data-cy={name}
					data-icon={name}
					fill={color}
					dangerouslySetInnerHTML={extractChildren(currentIcon)}
					viewBox={viewBox}></svg>
			</Box>
		);
	})
);

export default Icon;

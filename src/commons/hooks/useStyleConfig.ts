import { useMemo, useRef } from 'react';
import { css } from 'glamor';
import merge from 'lodash/merge';
import isEqual from 'react-fast-compare';
import { splitBoxProps } from 'ui-box';

/**
 * @typedef {object} StateStyles
 * @property {import('csstype').Properties} [_hover]
 * @property {import('csstype').Properties} [_active]
 * @property {import('csstype').Properties} [_disabled]
 * @property {import('csstype').Properties} [_focus]
 * @property {import('csstype').Properties} [_invalid]
 */

/**
 * @typedef {{ [placeholder in keyof StateStyles]: string }} PseudoSelectors
 */

/**
 * @typedef {object} StyleModifiers
 * @property {string} [variant]
 * @property {string} [size]
 */

/** @typedef {import('ui-box').EnhancerProps & StateStyles} Style */
/** @typedef {import('ui-box').EnhancerProps & import('glamor').CSSProperties} GlamorAndBoxStyle */

/**
 * @typedef {object} StyleConfig
 * @property {Style} baseStyle
 * @property {{ [variant: string]: Style }} [variants]
 * @property {{ [size: string]: Style }} [sizes]
 */

function maybeRun(value, ...args) {
	return typeof value === 'function' ? value(...args) : value;
}
/**
 * Combines styles from a styleConfig, with the given style modifiers (variant, size, etc) and internal styles
 * @param {object} theme
 * @param {StyleModifiers} props
 * @param {StyleConfig} styleConfig
 * @param {GlamorAndBoxStyle} [internalStyles]
 * @returns {StyleConfig}
 */
function combineStyles(props, internalStyles) {
	const config = maybeRun(internalStyles, props);
	const baseStyle = maybeRun(config.baseStyle, props);
	const sizeStyle = maybeRun(config.sizes ? config.sizes[props.size] : {}, props);

	const variantStyle = maybeRun(config.variants ? config.variants[props.variant] : {}, props);

	return merge({}, baseStyle, sizeStyle, variantStyle);
}

/**
 * Split up the style props into glamor-ready and box-ready props (className + spreadable props)
 */
function useGlamorAndBox(styles, pseudoSelectors) {
	const glamorStylesRef = useRef({});
	const classNameRef: any = useRef();

	return useMemo(() => {
		// Split the resulting style object into ui-box-compatible props and the rest
		const { matchedProps, remainingProps } = splitBoxProps(styles);

		/** @type {GlamorAndBoxStyle} */
		const glamorStyles = {};

		// Swap out pseudo selector placeholders for their actual css selector strings
		for (const k of Object.keys(remainingProps)) {
			const key = k in pseudoSelectors ? pseudoSelectors[k] : k;
			glamorStyles[key] = remainingProps[k];
		}

		// Take all the "non-compatible" props and give those to glamor (since ui-box doesn't know how to handle them yet)
		if (!isEqual(glamorStylesRef.current, glamorStyles)) {
			const className = css(glamorStyles).toString();
			glamorStylesRef.current = glamorStyles;
			classNameRef.current = className === 'css-nil' ? undefined : className;
		}

		return {
			className: classNameRef.current,
			...matchedProps,
		};
	}, [styles, pseudoSelectors]);
}

/**
 * Takes a styleConfig object and outputs a `className` and `boxProps` that can be spread on a Box component
 * @param {string} componentKey the name of the component in the theme
 * @param {StyleModifiers} props props that modify the resulting visual style (e.g. `size` or `variant`)
 * @param {PseudoSelectors} pseudoSelectors mapping for the component between states and actual pseudo selectors
 * @param {GlamorAndBoxStyle} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ className: string; boxProps: import('ui-box').EnhancerProps }}
 */
const useStyleConfig = function(props, pseudoSelectors, internalStyles) {
	const mergedStyles = combineStyles(props, internalStyles);

	// Finally, split up the styles based which ones Box supports and the rest construct a glamor className
	return useGlamorAndBox(mergedStyles, pseudoSelectors);
};
export default useStyleConfig;

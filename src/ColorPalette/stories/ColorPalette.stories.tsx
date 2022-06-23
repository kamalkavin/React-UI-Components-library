import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import classNames from 'classnames';

const articlePageOptions = { showPanel: false };
const classPrefix = 'ColorPalette';

const colorList = [
	{
		category: 'Primary',
		description:
			"The primary color is the most prominent color used throughout the app. It's great for drawing the user's eye to particular components.",
		variables: ['color-cobalt', 'color-bermuda', 'color-misty-grey', 'color-pacific-blue'],
	},
	{
		category: 'Secondary',
		description:
			'Secondary colors are used to denote specific objects types. In our case we typically use these color for advertisers, insertion orders, and line items.',
		variables: ['color-secondary-1', 'color-secondary-2', 'color-secondary-3'],
	},
	{
		category: 'Text Colors',
		variables: ['color-textColor', 'color-disabledText', 'color-linkColor', 'color-linkColorHover'],
	},
	{
		category: 'Neutral Colors',
		description: '',
		variables: [
			'color-neutral-1',
			'color-neutral-2',
			{ name: 'color-neutral-3', aliases: ['color-lightGray'] },
			{ name: 'color-neutral-4', aliases: ['color-gray'] },
			{ name: 'color-neutral-5', aliases: ['color-mediumGray'] },
			'color-neutral-6',
			'color-neutral-7',
			'color-neutral-8',
			{ name: 'color-neutral-9', aliases: ['color-darkGray'] },
		],
	},
	{
		category: 'Grays',
		description:
			'Grays play an important role in the app, and this set of grays forms the foundation for all the other variants. More prescriptive colors should be favored over these general grays when available.',
		variables: [
			'color-grey-1',
			'color-grey-2',
			'color-grey-3',
			'color-grey-4',
			'color-grey-5',
			'color-grey-6',
			'color-grey-7',
			'color-grey-8',
			'color-grey-9',
		],
	},
	{
		category: 'Notification Colors',
		description:
			'A featured color should only be used for a component that has multiple states like banners, buttons, or button like components (e.g. SingleSelect).',
		variables: ['featured-color-success', 'featured-color-info', 'featured-color-warning', 'featured-color-danger'],
	},
];

function hex(x) {
	return ('0' + parseInt(x).toString(16)).slice(-2);
}

function rgb2hex(rgb) {
	const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

	return '#' + hex(matches[1]) + hex(matches[2]) + hex(matches[3]);
}

class ColorPalette extends Component {
	hexMap = {};
	constructor(props) {
		super(props);
		this.state = {};
	}

	// In order to keep our colors coming from LESS, we need to do some...
	// interesting... dom inspection to get the actual background colors
	// rendered.
	getHexMap() {
		const allItems = Array.from(document.querySelectorAll('[data-less-variable]'));
		const hexMap = allItems.reduce((acc, item: any) => {
			const lessVariable = item.dataset.lessVariable;
			const hexString = rgb2hex(window.getComputedStyle(item).getPropertyValue('background-color'));

			return {
				...acc,
				[lessVariable]: hexString,
			};
		}, {});
		this.setState(hexMap);
	}
	// getHexMap() {
	//   const allItems = document.querySelectorAll("[data-less-variable]");
	//   const hexMap = _.reduce(
	//     allItems,
	//     (acc, item) => {
	//       const lessVariable = item.dataset.lessVariable;
	//       const hexString = rgb2hex(
	//         window.getComputedStyle(item).getPropertyValue("background-color")
	//       );

	//       return {
	//         ...acc,
	//         [lessVariable]: hexString
	//       };
	//     },
	//     {}
	//   );

	//   this.setState(hexMap);
	// }
	componentDidMount() {
		// Because of the way we load our css with webpack, we need to make sure
		// that the page is loaded before we try to sniff out the colors
		if (document.readyState === 'complete') {
			this.getHexMap();
		} else {
			window.addEventListener('load', this.getHexMap);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.getHexMap);
	}

	isPlainObject = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Object]';
	};

	render() {
		const hexValueMap = this.state;
		return (
			<div className={classPrefix}>
				<h2>Color Palette</h2>

				<p>This page documents important colors used in this app.</p>

				{colorList.map((group: any, i) => (
					<div key={i}>
						<h3 style={{ marginTop: '1.5rem' }}>{group.category}</h3>

						{group.description ? <p>{group.description}</p> : null}
						{group.variables.map((variable, j) => {
							const hasAliases = this.isPlainObject(variable);
							const variableName = hasAliases ? variable.name : variable;

							return (
								<div
									key={j}
									data-less-variable={variableName}
									className={classNames(`${classPrefix}-item`, `${classPrefix}-${variableName}`)}>
									{/* <span>
                           {`$${variableName}; `}
                           {hasAliases
                             ? `(aliases: ${variable.aliases
                                 .map(v => `$${v};`)
                                 .join(" ")})`
                             : null}
                         </span> */}

									<span>{hexValueMap[variableName]}</span>
								</div>
							);
						})}
					</div>
				))}
			</div>
		);
	}
}

export default ColorPalette;

storiesOf('Basics/Color Palette', module)
	.addParameters({ options: articlePageOptions })
	.add('Color Palette', () => <ColorPalette />);

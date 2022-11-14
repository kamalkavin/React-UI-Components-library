import { Component } from 'react';
import { createPortal } from 'react-dom';

let portalContainer: HTMLDivElement;
let canUseDom = typeof window !== 'undefined' && window.document;

class GPortal extends Component<any> {
	el!: HTMLDivElement;
	constructor(props) {
		super(props);

		// This fixes SSR
		if (!canUseDom) return;

		if (!portalContainer) {
			portalContainer = document.createElement('div');
			portalContainer.setAttribute('portal-container', '');
			document.body.appendChild(portalContainer);
		}

		this.el = document.createElement('div');
		portalContainer.appendChild(this.el);
	}

	componentWillUnmount() {
		portalContainer.removeChild(this.el);
	}

	render() {
		// This fixes SSR
		if (!canUseDom) return null;
		return createPortal(this.props.children, this.el);
	}
}

export default GPortal;

import * as React from 'react';

const map = new Map<string, React.RefObject<any>>();

function setRef(key: string): React.RefObject<HTMLInputElement> | void {
	if (!key) return console.warn(`useDynamicRefs: Cannot set ref without key `);
	const ref = React.createRef<HTMLInputElement>();
	map.set(key, ref);
	return ref;
}

function getRef<T>(key: string): React.RefObject<T> | undefined | void {
	if (!key) return console.warn(`useDynamicRefs: Cannot get ref without key`);
	return map.get(key) as React.RefObject<T>;
}

function useDynamicRefs<T>(): [
	(key: string) => void | React.RefObject<HTMLInputElement>,
	(key: string) => void | React.RefObject<HTMLInputElement>
] {
	return [getRef, setRef];
}

export default useDynamicRefs;

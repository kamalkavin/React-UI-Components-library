import { useEffect, useCallback } from 'react';

const useClickOutside = (ref: any, callback: Function) => {
	const handleClick = useCallback(
		e => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		},
		[callback, ref]
	);

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [handleClick]);
};

export default useClickOutside;

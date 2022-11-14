import React, { forwardRef, useEffect, useRef, Fragment, Ref } from 'react';

import CheckBox from '../../CheckBox/CheckBox';

interface Props {
	indeterminate?: boolean;
	name: string;
}

const useCombinedRefsHooks = (...refs): React.MutableRefObject<any> => {
	const targetRef = useRef();

	useEffect(() => {
		refs.forEach((ref) => {
			if (!ref) return;

			if (typeof ref === 'function') {
				ref(targetRef.current);
			} else {
				ref.current = targetRef.current;
			}
		});
	}, [refs]);

	return targetRef;
};

export const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
	({ indeterminate, ...rest }, ref: Ref<HTMLInputElement>) => {
		const defaultRef = useRef(null);
		const combinedRef = useCombinedRefsHooks(ref, defaultRef);

		useEffect(() => {
			if (combinedRef?.current) {
				combinedRef.current.indeterminate = indeterminate ?? false;
			}
		}, [combinedRef, indeterminate]);

		return (
			<Fragment>
				<CheckBox {...rest} ref={combinedRef} indeterminate={indeterminate} />
			</Fragment>
		);
	}
);

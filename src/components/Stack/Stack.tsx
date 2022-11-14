import React, { useContext, memo, FC } from 'react';
import StackingContext from './StackingContext';

export interface SwitchProps {
	children: (currentValue: any) => any;
	value?: number;
}

/* Used as the default for the StackingContext */
let StackingOrder = { STACKING_CONTEXT: 5 };

const Stack: FC<SwitchProps> = memo(function Stack({ children, value = StackingOrder.STACKING_CONTEXT }) {
	const previousValue = useContext(StackingContext);
	const currentValue = Math.max(value, previousValue);
	const nextValue = currentValue + 1;

	return <StackingContext.Provider value={nextValue}>{children(currentValue)}</StackingContext.Provider>;
});

export default Stack;

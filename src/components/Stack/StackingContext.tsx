import React from 'react'
/* Used as the default for the StackingContext */
let StackingOrder = {STACKING_CONTEXT: 5}
   
/*Context used to manage the layering of z-indexes of components */
const StackingContext = React.createContext(StackingOrder.STACKING_CONTEXT)
export default StackingContext
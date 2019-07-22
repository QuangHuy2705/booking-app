export const order = (order) => ({ type: 'ORDER', payload: order })

export const orderDone = (payload) => ({ payload })

export const toggleMessage = () => ({type: 'TOGGLE_MESSAGE'})
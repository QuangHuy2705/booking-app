function CheckoutReducers(state = {isMessageShown: false}, action) {
    switch(action.type) {
        case 'ORDER_DONE':
            return {
                ...state,
                isMessageShown: true
            }

        case 'TOGGLE_MESSAGE':
            return {
                ...state,
                isMessageShown: !state.isMessageShown
            }

        default:
            return state
    }
}

CheckoutReducers.reducerName = 'CheckoutReducers'

export default CheckoutReducers
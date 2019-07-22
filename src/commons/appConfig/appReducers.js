export const AppReducers = (state = { isLoading: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADING_DONE':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}

AppReducers.reducerName = 'AppReducers'

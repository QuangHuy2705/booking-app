const initState = {
    isCartShowing: false,
    items: [],
    total: 0
}

function ShoppingCartReducers(state = initState, action) {
    switch (action.type) {
        case 'TOGGLE_CART_DONE':
            return {
                ...state,
                isCartShowing: !state.isCartShowing
            }

        case 'ADD_TO_CART_DONE': {
            console.log(action)
            const { dish, willOpen } = action.payload
            const { items } = state

            const newItems = items.slice()

            if (newItems.length === 0) {
                newItems.push({
                    ...dish,
                    number: 1
                })
            } else {
                const truth = {
                    isIncluded: false,
                    idx: 0
                }
                for (let i = 0; i < newItems.length; i++) {
                    if (newItems[i].name === dish.name) {
                        truth.isIncluded = true
                        truth.idx = i
                    } else {
                    }
                }

                if (!truth.isIncluded) {
                    newItems.push({
                        ...dish,
                        number: 1
                    })
                } else {
                    newItems[truth.idx].number++
                }
            }

            console.log(newItems)

            const total = newItems.reduce((acc, current) => {
                return acc + current.price * current.number
            }, 0)

            return {
                ...state,
                isCartShowing: willOpen ? true : false,
                items: newItems,
                total
            }
        }
        case 'REMOVE_FROM_CART_DONE': {
            const { name } = action.payload
            const { items } = state
            const newItems = items.reduce((acc, current) => {
                if (current.name === name) {
                    if (current.number > 1) {
                        acc.push({ ...current, number: current.number - 1 })
                    }
                } else {
                    acc.push({ ...current })
                }
                return acc
            }, [])

            const total = newItems.reduce((acc, current) => {
                return acc + current.price * current.number
            }, 0)

            return {
                ...state,
                items: newItems,
                total
            }
        }

        case 'CLEAR_CART_DONE': 
            return {
                ...state,
                items: []
            }

        default:
            return state
    }
}

ShoppingCartReducers.reducerName = 'ShoppingCartReducers'

export default ShoppingCartReducers
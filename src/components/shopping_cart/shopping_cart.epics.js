import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { mapTo, map, delay, tap } from 'rxjs/operators'
import { addToCartDone, removeFromCartDone } from './shopping_cart.actions'

export const onToggleCart = (action$, state) => {
    return action$.pipe(
        ofType('TOGGLE_CART'),
        mapTo({ type: 'TOGGLE_CART_DONE' }),
    )
}

export const onAddToCart = (action$, state) => {
    return action$.pipe(
        ofType('ADD_TO_CART'),
        map(action => {
            const { dish } = action.payload
            return addToCartDone(action.payload)
        })
    )
}

export const onRemoveFromCart = (action$, state) => {
    return action$.pipe(
        ofType('REMOVE_FROM_CART'),
        map(action => {
            const name = action.payload
            return removeFromCartDone({ name })
        })
    )
}
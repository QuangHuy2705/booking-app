import { ofType } from 'redux-observable'
import { mapTo, delay } from 'rxjs/operators'

export const onGetAppetizers = (action$, state) => {
    return action$.pipe(
        ofType('GET_APPETIZERS'),
        delay(200),
        mapTo({ type: 'GET_APPETIZERS_DONE' }),
    )
}

export const onGetMenu = (action$, state) => {
    return action$.pipe(
        ofType('GET_MENU'),
        delay(200),
        mapTo({ type: 'GET_MENU_DONE' }),
    )
}

export const onGetMainDish = (action$, state) => {
    return action$.pipe(
        ofType('GET_MAINDISH'),
        delay(200),
        mapTo({ type: 'GET_MAINDISH_DONE' }),
    )
}

export const onGetDrinks = (action$, state) => {
    return action$.pipe(
        ofType('GET_DRINKS'),
        delay(200),
        mapTo({ type: 'GET_DRINKS_DONE' }),
    )
}

export const onGetNoodlesandPho = (action$, state) => {
    return action$.pipe(
        ofType('GET_NOODLESANDPHO'),
        delay(200),
        mapTo({ type: 'GET_NOODLESANDPHO_DONE' }),
    )
}

export const onGetSideDish = (action$, state) => {
    return action$.pipe(
        ofType('GET_SIDEDISH'),
        delay(200),
        mapTo({ type: 'GET_SIDEDISH_DONE' }),
    )
}

export const onGetFriedRice = (action$, state) => {
    return action$.pipe(
        ofType('GET_FRIEDRICE'),
        delay(200),
        mapTo({ type: 'GET_FRIEDRICE_DONE' }),
    )
}

export const onGetRolls = (action$, state) => {
    return action$.pipe(
        ofType('GET_ROLLS'),
        delay(200),
        mapTo({ type: 'GET_ROLLS_DONE' }),
    )
}

export const onGetExtra = (action$, state) => {
    return action$.pipe(
        ofType('GET_EXTRA'),
        delay(200),
        mapTo({ type: 'GET_EXTRA_DONE' }),
    )
}

export const onClearCart = (action$) => {
    return action$.pipe(
        ofType('CLEAR_CART'),
        mapTo({ type: 'CLEAR_CART_DONE' }),
    )
}
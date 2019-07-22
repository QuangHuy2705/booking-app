import { ofType } from 'redux-observable'
import { mapTo, delay, startWith, endWith, tap, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'

export const onGetAppetizers = (action$, state) => {
    return action$.pipe(
        ofType('GET_APPETIZERS'),
        mergeMap(action => {
            return of({ type: 'GET_APPETIZERS_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetMenu = (action$, state) => {
    return action$.pipe(
        ofType('GET_MENU'),
        mergeMap(action => {
            return of({ type: 'GET_MENU_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetMainDish = (action$, state) => {
    return action$.pipe(
        ofType('GET_MAINDISH'),
        mergeMap(action => {
            return of({ type: 'GET_MAINDISH_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetDrinks = (action$, state) => {
    return action$.pipe(
        ofType('GET_DRINKS'),
        mergeMap(action => {
            return of({ type: 'GET_DRINKS_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetNoodlesandPho = (action$, state) => {
    return action$.pipe(
        ofType('GET_NOODLESANDPHO'),
        mergeMap(action => {
            return of({ type: 'GET_NOODLESANDPHO_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetSideDish = (action$, state) => {
    return action$.pipe(
        ofType('GET_SIDEDISH'),
        mergeMap(action => {
            return of({ type: 'GET_SIDEDISH_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetFriedRice = (action$, state) => {
    return action$.pipe(
        ofType('GET_FRIEDRICE'),
        mergeMap(action => {
            return of({ type: 'GET_FRIEDRICE_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetRolls = (action$, state) => {
    return action$.pipe(
        ofType('GET_ROLLS'),
        mergeMap(action => {
            return of({ type: 'GET_ROLLS_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onGetExtra = (action$, state) => {
    return action$.pipe(
        ofType('GET_EXTRA'),
        mergeMap(action => {
            return of({ type: 'GET_EXTRA_DONE' }).pipe(
                delay(200),
                startWith({ type: 'TOGGLE_LOADING' }),
                endWith({ type: 'TOGGLE_LOADING' })
            )
        }),
    )
}

export const onClearCart = (action$) => {
    return action$.pipe(
        ofType('CLEAR_CART'),
        mapTo({ type: 'CLEAR_CART_DONE' }),
    )
}
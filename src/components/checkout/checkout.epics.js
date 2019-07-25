import { ofType } from 'redux-observable'
import { mapTo, delay, mergeMap, map, flatMap, startWith, endWith } from 'rxjs/operators'
import { from } from 'rxjs'
import HTTP from '../../commons/http/apiCall'

export const onOrder = (action$, state) => {
    return action$.pipe(
        ofType('ORDER'),
        mergeMap(action => {
            const { order } = action.payload
            return from(HTTP.to('localhost:8080/api/orders').post({order}))
                .pipe(
                    map(action => {
                        return {type: 'ORDER_DONE'}
                    }),
                    startWith({type: 'TOGGLE_LOADING'}),
                    endWith({type: 'TOGGLE_LOADING'})
                )
        })
    )
}

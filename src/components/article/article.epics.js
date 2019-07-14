import { ofType } from 'redux-observable'
import { mapTo, delay } from 'rxjs/operators'

export const onGetSoyMilk = (action$, state) => {
    return action$.pipe(
        ofType('GET_SOYMILK'),
        delay(200),
        mapTo({ type: 'GET_SOYMILK_DONE' })
    )
}

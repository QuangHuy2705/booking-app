import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

export const onToggleLoading = (action$, state) => {
    return action$.pipe(
        ofType('TOGGLE_LOADING'),
        mapTo({ type: `TOGGLE_LOADING_DONE` })
    )
}
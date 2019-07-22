import asyncRoute from '../../commons/router/asyncRoute'

export default asyncRoute(
    import('./checkout.container'),
    import('./checkout.reducers'),
    import('./checkout.epics')
)
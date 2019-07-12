import asyncRoute from '../../commons/router/asyncRoute'

export default asyncRoute(
    import('./menu.container'),
    import('./menu.reducers'),
    import('./menu.epics')
)


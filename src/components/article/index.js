import asyncRoute from '../../commons/router/asyncRoute'

export default asyncRoute(
    import('./article.container'),
    import('./article.reducers'),
    import('./article.epics')
)
import AsyncRoute from '../../commons/router/asyncRoute'

export default AsyncRoute(
    import('./shopping_cart.container'),
    import('./shopping_cart.reducers'),
    import('./shopping_cart.epics')
)
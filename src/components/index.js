import Loadable from 'react-loadable'
import { Loading } from '../commons/components/index'

export const ShoppingCart = Loadable({
    loader: () => import('./shopping_cart/index'),
    loading: Loading
})

export const HomePage = Loadable({
    loader: () => import('./homepage/index'),
    loading: Loading,
})

export const Menu = Loadable({
    loader: () => import('./menu/index'),
    loading: Loading,
})

export const Article = Loadable({
    loader: () => import('./article/index'),
    loading: Loading,
})

export const Checkout = Loadable({
    loader: () => import('./checkout/index'),
    loading: Loading
})
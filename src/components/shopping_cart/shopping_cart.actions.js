export const toggleShoppingCart = () => ({ type: 'TOGGLE_CART' })

export const addToCart = (dish, willOpen) => ({ type: 'ADD_TO_CART', payload: {dish, willOpen} })

export const addToCartDone = payload => ({ type: 'ADD_TO_CART_DONE', payload })

export const removeFromCart = (name) => ({ type: 'REMOVE_FROM_CART', payload: name }) 

export const removeFromCartDone = payload => ({ type: 'REMOVE_FROM_CART_DONE', payload }) 

export const clearCart = () => ({ type: 'CLEAR_CART' })

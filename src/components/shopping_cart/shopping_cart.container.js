import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styles from './shopping_cart.module.scss'
import { Popup } from '../../commons/components/index'
import { addToCart, removeFromCart, toggleShoppingCart } from './shopping_cart.actions'
import { withRouter } from 'react-router-dom'

class ShoppingCart extends Component {

    onAddMore(dish) {
        this.props.addToCart({...dish}, true)
    }

    onRemoveFromCart(name) {
        this.props.removeFromCart(name)
    }
    
    onCheckout() {
        this.props.history.push('/checkout')
        this.props.toggleShoppingCart()
    }

    render() {
        const { items, isCartShowing, total } = this.props

        return (
            <Popup open={isCartShowing}>
                <div className={styles[`cart`]}>
                    <h4 className={styles[`cart-header`]}>Your shopping cart</h4>

                    {!items || items.length === 0 ? (
                        <div className={styles[`null-info`]}>
                            <p>You have an empty shopping cart</p>
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className={styles[`cart-content`]}>
                                {items && items.map((item, idx) => {
                                    const { name, img, price } = item 
                                    const orderItem = { name, img, price } 
                                    return (
                                    <div key={item.name} className={styles[`item`]}>
                                        <img className={styles[`item-img`]} src={item.img} alt='dish' />
                                        <div className={styles[`item-info`]}>
                                            <p>{item.name} <span style={{display: 'inline-block'}} >({item.price} €)</span></p>
                                            <p>Quantity: {item.number}</p>
                                            <div className={styles[`number-adjust`]}>
                                                <div onClick={() => this.onAddMore(orderItem)} className={`${styles[`adjust-button`]} `}>
                                                    <div className={styles[`adjust-button--increase`]} />
                                                </div>
                                                {item.number > 0 && (
                                                    <div onClick={() => this.onRemoveFromCart(item.name)} style={{marginLeft: '2px'}} className={`${styles[`adjust-button`]} `} >
                                                        <div className={styles[`adjust-button--decrease`]} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            </div>
                            <div className={styles[`subtotal`]}>
                                <div />
                                <h4 className={styles[`total`]}>Total: {total} €</h4>
                            </div>
                            <button onClick={() => this.onCheckout()} className={styles[`checkout-button`]}>Proceed to checkout</button>
                        </React.Fragment>
                    )}
                </div>
            </Popup>
        )
    }
}

const mapStateToProps = state => {
    const { ShoppingCartReducers } = state
    return {
        isCartShowing: ShoppingCartReducers.isCartShowing,
        items: ShoppingCartReducers.items,
        total: ShoppingCartReducers.total
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    toggleShoppingCart
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShoppingCart))
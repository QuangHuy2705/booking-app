import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styles from './checkout.module.scss'
import { Navbar, Footer } from '../../commons/components/index'
import { addToCart, removeFromCart, clearCart } from '../shopping_cart/shopping_cart.actions'
import HTTPRequest from '../../commons/http/apiCall'

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contactNumber: '',
            address: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onAddMore(dish) {
        this.props.addToCart(dish, false)
    }

    onRemoveFromCart(name) {
        this.props.removeFromCart(name)
    }

    onOrder(e) {
        e.preventDefault()
        const { items, total } = this.props
        const { name, contactNumber, address } = this.state
        if (!items || items.length === 0) {
            alert('Your cart is empty please add more items to it ;)')
            return
        }

        const order = {
            items,
            name,
            contactNumber,
            address,
            total
        }

        console.log(order)
        HTTPRequest.to('http://35.198.133.213/api/orders').post({order})
            .then(() => {
                this.props.clearCart()
                alert('Thank you for your order, we will contact you in a moment. Enjoy your meal ;)')
                this.setState({
                    name: '',
                    contactNumber: '',
                    address: '',
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const { items, total } = this.props
        console.log(items)

        return (
            <React.Fragment>
                <Navbar />

                <div className={styles[`checkout`]}>
                    <h2>You are checking out</h2>

                    <div className={styles[`main-content`]}>
                        <div className={styles[`user-info`]}>
                            <h4 className={styles[`form-header`]}>Please fill in the form</h4>
                            <form onSubmit={(e) => this.onOrder(e)} className={styles[`user-info-form`]}>
                                <div className={styles[`form-item`]}>
                                    <label htmlFor='name' >Name: </label>
                                    <input value={this.state.name} onChange={e => this.onChange(e)} required autoComplete='off' type='text' name='name' id='name' />
                                </div>
                                <div className={styles[`form-item`]}>
                                    <label htmlFor='number' >Contact Number: </label>
                                    <input value={this.state.contactNumber} onChange={e => this.onChange(e)} required autoComplete='off' type='text' name='contactNumber' id='number' />
                                </div>
                                <div className={styles[`form-item`]}>
                                    <label htmlFor='address' >Address: </label>
                                    <input value={this.state.address} onChange={e => this.onChange(e)} required autoComplete='off' type='text' name='address' id='address' />
                                </div>
                                <button className={styles[`place-order-button`]}>Place order</button>
                            </form>
                        </div>
                        <div className={styles[`cart`]}>
                            <h4 className={styles[`cart-header`]}>Your cart</h4>
                            {!items || items.length === 0
                                ? (
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
                                                            <p>{item.name} <span style={{ display: 'inline-block' }} >({item.price} €)</span></p>
                                                            <p>Quantity: {item.number}</p>
                                                            <div className={styles[`number-adjust`]}>
                                                                <div onClick={() => this.onAddMore(orderItem)} className={`${styles[`adjust-button`]} `}>
                                                                    <div className={styles[`adjust-button--increase`]} />
                                                                </div>
                                                                {item.number > 0 && (
                                                                    <div onClick={() => this.onRemoveFromCart(item.name)} style={{ marginLeft: '2px' }} className={`${styles[`adjust-button`]} `} >
                                                                        <div className={styles[`adjust-button--decrease`]} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className={styles[`subtotal`]}>
                                            <div />
                                            <h4 className={styles[`total`]}>Total: {total} €</h4>
                                        </div>
                                    </React.Fragment>
                                )}
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { ShoppingCartReducers } = state

    return {
        items: ShoppingCartReducers ? ShoppingCartReducers.items : [],
        total: ShoppingCartReducers ? ShoppingCartReducers.total : 0,
    }
}

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
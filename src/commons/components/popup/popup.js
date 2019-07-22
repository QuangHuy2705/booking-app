import React from 'react'
import * as styles from './popup.module.scss'
import { connect } from 'react-redux'
import { toggleShoppingCart } from '../../../components/shopping_cart/shopping_cart.actions'

class Popup extends React.Component {
    onToggleCart() {
        this.props.toggleShoppingCart()
    }

    render() {
        console.log(this.props.children)
        const open = this.props.open ? this.props.open : false

        return (
            <div className={open ? `${styles[`popup`]} ${styles[`popup--open`]}` : `${styles[`popup`]} ${styles[`popup--closed`]}`}>
                <div onClick={() => this.onToggleCart()} className={styles[`popup-overlay`]} />
                <div className={styles[`main-content`]}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    toggleShoppingCart
}

export default connect(null, mapDispatchToProps)(Popup)
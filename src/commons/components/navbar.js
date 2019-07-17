import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../resources/images/logo-white.png'
import { withRouter } from 'react-router' 
import { connect } from 'react-redux'
import { toggleShoppingCart } from '../../components/shopping_cart/shopping_cart.actions'
import * as styles from '../resources/css/navbar.module.scss'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileNavShown: false
        }
    }
    
    onToggleNav() {
        this.setState({
            isMobileNavShown: !this.state.isMobileNavShown
        })
    }

    onToggleCart() {
        console.log('clicked')
        this.props.toggleShoppingCart()
    }

    render() {
        const { history: { location: {pathname} }, items } = this.props
        const itemLength = items ? items.length : 0
        return (
            <nav className={styles.navbar}>
                <div className={`${styles[`nav-items`]}`}>
                    <Link style={{border: 'none'}} to='/'>
                        <img src={LogoWhite} alt="Omnifood logo" className={styles.logo} />
                    </Link>
                    <ul className={this.state.isMobileNavShown ? `${styles['main-nav']} ${styles['main-nav--active']}` : `${styles[`main-nav`]}`}>
                        <li><Link to='/'>Homepage</Link></li>
                        <li><Link className={pathname === '/menu' ? `${styles[`nav-link--active`]}` : ''} to="/menu">Menu</Link></li>
                        <li><Link className={pathname === '/article' ? `${styles[`nav-link--active`]}` : ''} to="/article">Article</Link></li>
                        <li><Link onClick={() => this.onToggleCart()} className={styles[`nav-shopping-cart`]}><span className={styles[`shopping-cart-icon`]}/> <span className={styles[`shopping-cart-number`]}>{itemLength}</span> </Link></li>
                    </ul>
                    <Link onClick={() => this.onToggleNav()} className={`${styles[`mobile-nav-icon`]} ${styles[`js--nav-icon`]}`}><i className='ion-navicon-round'></i></Link>
                </div>
            </nav>
        )
    }   
} 

const mapStateToProps = state => {
    const { ShoppingCartReducers } = state 
    return {
        items: ShoppingCartReducers ? ShoppingCartReducers.items : null
    }
}

const mapDispatchToProps = {
    toggleShoppingCart
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
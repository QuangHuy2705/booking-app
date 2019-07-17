import React from 'react'
import LogoWhite from '../../resources/images/logo-white.png'
import Logo from '../../resources/images/logo.png'
import { withRouter } from 'react-router' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleShoppingCart } from '../../../components/shopping_cart/shopping_cart.actions'
import '../../../components/homepage/homepage.styles.css'
import '../../resources/css/queries.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileNavShown: false
        }
    }

    onScroll(ref) {
        if (ref) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    onToggleNav() {
        this.setState({
            isMobileNavShown: !this.state.isMobileNavShown
        })
    }

    onToggleCart() {
        this.props.toggleShoppingCart()
    }

    render() {
        const { menuRef, shoppingCart } = this.props
        const itemLength = shoppingCart ? shoppingCart.items.length : 0
        const { history: { location: {pathname} } } = this.props

        return (
            <header>
                <nav>
                    <div className="row">
                        <Link to='/'>
                            <img src={LogoWhite} alt="Omnifood logo" className="logo" />
                        </Link>
                        <Link to='/'>
                            <img src={Logo} alt="Omnifood logo" className="logo-black" />
                        </Link>
                        <ul className={this.state.isMobileNavShown ? `main-nav main-nav--active` : `main-nav main`}>
                            <li><Link  className={pathname === '/' ? 'nav-link--active' : ''}  to='/'>Homepage</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/article">Article</Link></li>
                            <li onClick={() => this.onToggleCart()} ><Link className='nav-shopping-cart'><span className='shopping-cart-icon'/> <span className='shopping-cart-number'>{itemLength}</span> </Link></li>
                        </ul>
                        <Link onClick={() => this.onToggleNav()} className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></Link>
                    </div>
                </nav>
                <div className="hero-text-box">
                    <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                    <Link className="btn btn-full js--scroll-to-plans" to="/menu">I'm hungry</Link>
                    <Link onClick={() => this.onScroll(menuRef)} className="btn btn-ghost js--scroll-to-start">Show me more</Link>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    const { ShoppingCartReducers } = state 
    return {
        shoppingCart: ShoppingCartReducers ? ShoppingCartReducers.shoppingCart : null
    }
}

const mapDispatchToProps = {
    toggleShoppingCart
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)) 
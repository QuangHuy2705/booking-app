import React from 'react'
import LogoWhite from '../../resources/images/logo-white.png'
import Logo from '../../resources/images/logo.png'
import '../../../components/homepage/homepage.styles.css'
import '../../resources/css/queries.css'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
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

    render() {
        const { featureRef, menuRef } = this.props

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
                            <li><Link to='/'>Homepage</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><a href="#plans">Sign up</a></li>
                        </ul>
                        <a onClick={() => this.onToggleNav()} className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                    </div>
                </nav>
                <div className="hero-text-box">
                    <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                    <Link className="btn btn-full js--scroll-to-plans" to="/menu">I'm hungry</Link>
                    <a onClick={() => this.onScroll(menuRef)} className="btn btn-ghost js--scroll-to-start">Show me more</a>
                </div>
            </header>
        )
    }
}
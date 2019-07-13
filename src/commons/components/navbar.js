import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../resources/images/logo-white.png'
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

    render() {
        return (
            <nav className={styles.navbar}>
                <div className={`${styles[`nav-items`]}`}>
                    <Link style={{border: 'none'}} to='/'>
                        <img src={LogoWhite} alt="Omnifood logo" className={styles.logo} />
                    </Link>
                    <ul className={this.state.isMobileNavShown ? `${styles['main-nav']} ${styles['main-nav--active']}` : `${styles[`main-nav`]}`}>
                        <li><Link to='/'>Homepage</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/">Sign up</Link></li>
                    </ul>
                    <a onClick={() => this.onToggleNav()} className={`${styles[`mobile-nav-icon`]} ${styles[`js--nav-icon`]}`}><i className='ion-navicon-round'></i></a>
                </div>
            </nav>
        )
    }   
} 

export default Navbar
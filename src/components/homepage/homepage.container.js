import React, { Component } from 'react'
import './homepage.styles.css'
import '../../commons/resources/css/queries.css'
import LogoWhite from '../../commons/resources/images/logo-white.png'
import Logo from '../../commons/resources/images/logo.png'
import One from '../../commons/resources/images/1.jpg'
import Two from '../../commons/resources/images/2.jpg'
import Four from '../../commons/resources/images/4.jpg'
import Five from '../../commons/resources/images/5.jpg'
import Six from '../../commons/resources/images/6.jpg'
import Seven from '../../commons/resources/images/7.jpg'
import Eight from '../../commons/resources/images/8.jpg'
import Three from '../../commons/resources/images/3.jpg'

class Homepage extends Component {

    render() {
        return(
            <div>
                <header>
                    <nav>
                        <div className="row">
                            <img src={LogoWhite} alt="Omnifood logo" className="logo" />
                            <img src={Logo} alt="Omnifood logo" className="logo-black" />
                            <ul className="main-nav js--main-nav">
                                <li><a href="#features">Food delivery</a></li>
                                <li><a href="#works">How it works</a></li>
                                <li><a href="#cities">Our cities</a></li>
                                <li><a href="#plans">Sign up</a></li>
                            </ul>
                            <a className="mobile-nav-icon js--nav-icon"  href="/"><i className="ion-navicon-round"></i></a>
                        </div>
                    </nav>
                    <div className="hero-text-box">
                        <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                        <a className="btn btn-full js--scroll-to-plans" href="/">I'm hungry</a>
                        <a className="btn btn-ghost js--scroll-to-start" href="/">Show me more</a>
                    </div>
                </header>
                <section className="section-features js--section-features" id="features">
                    <div className="row">
                        <h2>Get food fast &mdash; not fast food</h2>
                        <p className="long-copy">
                            Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                        </p>
                    </div>
            
                    <div className="row js--wp-1">
                        <div className="col span-1-of-3 box">
                            <i className="ion-ios-stopwatch-outline icon-big"></i>
                            <h3>Ready in 20 minutes</h3>
                            <p>
                                You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                            </p>
                        </div>
                        <div className="col span-1-of-3 box">
                            <i className="ion-ios-nutrition-outline icon-big"></i>
                            <h3>100% organic</h3>
                            <p>
                                All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                            </p>
                        </div>
                        <div className="col span-1-of-3 box">
                            <i className="ion-ios-cart-outline icon-big"></i>
                            <h3>Order anything</h3>
                            <p>
                                We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                            </p>
                        </div>
                    </div>   
                </section>
                <section className="section-meals">
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={One} alt="Korean bibimbap with egg and vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Two} alt="Simple italian pizza with cherry tomatoes" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Three} alt="Chicken breast steak with vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Four} alt="Autumn pumpkin soup" />
                            </figure>
                        </li>
                    </ul>
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={Five} alt="Paleo beef steak with vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Six} alt="Healthy baguette with egg and vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Seven} alt="Burger with cheddar and bacon" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Eight} alt="Granola with cherries and strawberries" />
                            </figure>
                        </li>
                    </ul>
                </section>
                <section className="section-cities" id="cities">
                    <div className="row">
                        <h2>We're currently in these cities</h2>
                    </div>
                    <div className="row js--wp-3">
                        <div className="col span-1-of-4 box">
                            <img src="resources/img/lisbon-3.jpg" alt="Lisbon" />
                            <h3>Lisbon</h3>
                            <div className="city-feature">
                                <i className="ion-ios-person icon-small"></i>
                                1600+ happy eaters
                            </div>
                            <div className="city-feature">
                                <i className="ion-ios-star icon-small"></i>
                                60+ top chefs
                            </div>
                            <div className="city-feature">
                                <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_lx</a>
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="resources/img/san-francisco.jpg" alt="San Francisco" />
                            <h3>San Francisco</h3>
                            <div className="city-feature">
                                <i className="ion-ios-person icon-small"></i>
                                3700+ happy eaters
                            </div>
                            <div className="city-feature">
                                <i className="ion-ios-star icon-small"></i>
                                160+ top chefs
                            </div>
                            <div className="city-feature">
                                <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_sf</a>
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="resources/img/berlin.jpg" alt="Berlin" />
                            <h3>Berlin</h3>
                            <div className="city-feature">
                                <i className="ion-ios-person icon-small"></i>
                                2300+ happy eaters
                            </div>
                            <div className="city-feature">
                                <i className="ion-ios-star icon-small"></i>
                                110+ top chefs
                            </div>
                            <div className="city-feature">
                                <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_berlin</a>
                            </div>
                        </div>
                        <div className="col span-1-of-4 box">
                            <img src="resources/img/london.jpg" alt="London" />
                            <h3>London</h3>
                            <div className="city-feature">
                                <i className="ion-ios-person icon-small"></i>
                                1200+ happy eaters
                            </div>
                            <div className="city-feature">
                                <i className="ion-ios-star icon-small"></i>
                                50+ top chefs
                            </div>
                            <div className="city-feature">
                                <i className="ion-social-twitter icon-small"></i>
                                <a href="#">@omnifood_london</a>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <section className="section-testimonials">
                    <div className="row">
                        <h2>Our customers can't live without us</h2>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <blockquote>
                                Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                                <cite><img src="resources/img/customer-1.jpg" />Alberto Duncan</cite>
                            </blockquote>
                        </div>
                        <div className="col span-1-of-3">
                            <blockquote>
                            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                                <cite><img src="resources/img/customer-2.jpg" />Joana Silva</cite>
                            </blockquote>
                        </div>
                        <div className="col span-1-of-3">
                            <blockquote>
        I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                            <cite><img src="resources/img/customer-3.jpg" />Milton Chapman</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className="section-form">
                    <div className="row">
                        <h2>We're happy to hear from you</h2>
                    </div>
                    <div className="row">
                        <form method="post" action="#" className="contact-form">
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="text" name="name" id="name" placeholder="Your name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="email" name="email" id="email" placeholder="Your email" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label htmlFor="find-us">How did you find us?</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <select name="find-us" id="find-us">
                                        <option value="friends" defaultChecked>Friends</option>
                                        <option value="search">Search engine</option>
                                        <option value="ad">Advertisement</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col span-1-of-3">
                                    <label>Newsletter?</label>
                                </div> */}
                                {/* <div className="col span-2-of-3">
                                    <input type="checkbox" name="news" id="news" checked> Yes, please </input>
                                </div> */}
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>Drop us a line</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <textarea name="message" placeholder="Your message"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="submit" value="Send it!" />
                                </div>
                            </div>
                            
                        </form>
                        
                    </div>
                </section>
                <footer>
                    <div className="row">
                        <div className="col span-1-of-2">
                            <ul className="footer-nav">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">iOS App</a></li>
                                <li><a href="#">Android App</a></li>
                            </ul>
                        </div>
                        <div className="col span-1-of-2">
                            <ul className="social-links">
                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Homepage
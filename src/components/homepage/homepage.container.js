import React, { Component } from 'react'
import './homepage.styles.css'
import '../../commons/resources/css/queries.css'
import { Header, Footer } from '../../commons/components/index'
import One from '../../commons/resources/images/One1.jpg'
import Two from '../../commons/resources/images/Two1.jpg'
import Four from '../../commons/resources/images/Four1.jpg'
import Five from '../../commons/resources/images/Five1.jpg'
import Six from '../../commons/resources/images/Six1.jpg'
import Seven from '../../commons/resources/images/Seven1.jpg'
import Eight from '../../commons/resources/images/Eight1.jpg'
import Three from '../../commons/resources/images/Three1.jpg'
import Cust1 from '../../commons/resources/images/customer-1.jpg'
import Cust2 from '../../commons/resources/images/customer-2.jpg'
import Cust3 from '../../commons/resources/images/customer-3.jpg'

class Homepage extends Component {
    constructor(props) {
        super(props) 
        this.featureRef = React.createRef()
        this.menuRef = React.createRef()
    }

    onSubmit(e) {
        e.preventDefault()
        alert('Thanks for your feedback! Hope to see you around =)')
    }

    render() {
        return(
            <div>
                <Header featureRef={this.featureRef} menuRef={this.menuRef} />
                <section ref={this.featureRef} className="section-features js--section-features" id="features">
                    <div className="row" style={{textAlign: 'center'}}>
                        <h2 style={{fontWeight: 'bold', letterSpacing: '7px'}} >HelloVietnam</h2>
                        <p className="long-copy">
                            Wellcome to HelloVietnam, your new favorite food service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                        </p>
                    </div>
            
                    <div className="row js--wp-1">
                        <div className="col span-1-of-3 box">
                            <i className="ion-ios-stopwatch-outline icon-big"></i>
                            <h3>Ready within 60 minutes</h3>
                            <p>
                                You're only minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
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
                                We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing dozens of delicious meals. It's up to you!
                            </p>
                        </div>
                    </div>   
                </section>
                <section ref={this.menuRef} className="section-meals">
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={One} alt="Vietnamese Pho" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Two} alt="Roasted Duck" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Three} alt="Spring Rolls" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Four} alt="Chicken Curry" />
                            </figure>
                        </li>
                    </ul>
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={Five} alt="Grilled Oyster" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Six} alt="Beef steak with fries" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Seven} alt="Shrimp Noodles" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={Eight} alt="Fried Shrimp" />
                            </figure>
                        </li>
                    </ul>
                </section>
                <section className="section-cities" id="cities">
                    <div className="row">
                        <h2>We're currently located in Cyprus</h2>
                    </div>
                    <div className="location">
                    <iframe style={{width: '800', height: '600'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2611234102352!2d33.05091412916554!3d34.67882650164105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e73317564c00e3%3A0x10c3fced5f4ca726!2sChristodoulou+Chatzipavlou+223%2C+Limassol%2C+Cyprus!5e0!3m2!1sen!2sfi!4v1562965475298!5m2!1sen!2sfi"  frameBorder="0" allowFullScreen></iframe>
                    </div>
                    
                </section>
                <section className="section-testimonials">
                    <div className="row">
                        <h2>Our customers can't live without us</h2>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <blockquote>
                            HelloVietnam is just awesome! I just launched a startup which leaves me with no time for cooking, so HelloVietnam is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                                <cite><img alt='customer1' src={Cust1} />Alberto Duncan</cite>
                            </blockquote>
                        </div>
                        <div className="col span-1-of-3">
                            <blockquote>
                            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Warsaw, but no one comes even close to HelloVietnam. Me and my family are so in love!
                                <cite><img alt='customer2' src={Cust2} />Joana Silva</cite>
                            </blockquote>
                        </div>
                        <div className="col span-1-of-3">
                            <blockquote>
                            I was looking for a quick and easy food delivery services. I tried a lot of them and ended up with HelloVietnam. Keep up the great work!
                            <cite><img alt='customer3' src={Cust3} />Milton Chapman</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className="section-form">
                    <div className="row">
                        <h2>We're happy to hear from you</h2>
                    </div>
                    <div className="row">
                        <form onSubmit={(e) => this.onSubmit(e)} className="contact-form">
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
                                    <input type='submit' value="Send it!" />
                                </div>
                            </div>
                            
                        </form>
                        
                    </div>
                </section>
                                
                <Footer />
            </div>
        )
    }
}

export default Homepage
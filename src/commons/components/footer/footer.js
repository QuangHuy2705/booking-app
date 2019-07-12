import React from 'react'
import * as styles from './footer.module.scss'

export default class Footer extends React.Component {

    render() {
        return (
            <div className={styles[`footer`]}>
                <div className={styles[`contact`]}>
                    <p className={styles[`title`]}>Let's keep in touch!</p>
                    <p className={styles[`contact-info`]}>Email us: <a href='mailto:Hellovietnam223@gmail.com'>Hellovietnam223@gmail.com</a></p>
                    <p className={styles[`contact-info`]}>Call us: <a href='tel:+357 99061839'>+357 99061839</a></p>
                    <p className={styles[`contact-info`]}>Location: <a target="_blank" rel="noopener noreferrer" href='https://goo.gl/maps/h56UmH6Amgc43vcD6'>Christodoulou Chatzipavlou 223 limassol 3036 cyprus</a></p>
                </div>
                <div className={styles[`social`]}>
                    <ul className="social-links">
                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
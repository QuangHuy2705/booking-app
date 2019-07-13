import React, { Component } from 'react'
import { Navbar, Loading, Footer } from '../../commons/components/index'
import '../homepage/homepage.styles.css'
import * as styles from './menu.module.scss'
import { connect } from 'react-redux'
import { getDishes } from './menu.actions'


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            dishesPerPage: 8
        }
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    onGetDishes(menuType) {
        this.props.getDishes(menuType)
        this.setState({
            currentPage: 1
        })
    }

    onOrder() {
        alert('This feature is coming soon, please hang with us for more fun eating!')
    }

    render() {
        const { menuType, items, loading } = this.props
        const { currentPage, dishesPerPage } = this.state

        //Logic for displaying dishes 
        const indexOfLastDish = currentPage * dishesPerPage;
        const indexOfFirstDish = indexOfLastDish - dishesPerPage;
        const currentDishes = items.slice(indexOfFirstDish, indexOfLastDish)

        const renderDishes = currentDishes.map((dish, idx) => {
            const { name } = dish
            return (
                <div key={idx} className={styles[`category`]}>
                    <img alt='food' src={dish.img} className={styles[`food-image`]} />
                    <h4 className={styles[`category-description`]}>
                        {name}
                    </h4>
                    <p className={styles[`food-price`]}>{dish.price}</p>
                    <button onClick={() => this.onOrder()} className={styles[`order-button`]}>Add to cart!</button>
                </div>
            )
        })

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / dishesPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className={this.state.currentPage === number ? `${styles[`number`]} ${styles[`number--active`]}` : styles[`number`]}
                    key={number}
                    id={number}
                    onClick={(e) => this.handleClick(e)}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <Navbar />
                <div className={styles.menu}>
                    <h2>Pick your favorites from our delicious menu</h2>
                    {loading && (<Loading />)}
                    {menuType === 'menu' ? (
                        <div className={styles[`menu-categories`]}>
                            {items && items.map((item, idx) => {
                                const { name } = item
                                return (
                                    <div key={idx} className={styles[`category`]}>
                                        <a onClick={() => this.onGetDishes(name.split(' ').join('').toUpperCase())} className={`${styles[`category-image`]} ${styles[`category-image--${name.split(' ').join('')}`]}`} />
                                        <h4 className={styles[`category-description`]}>
                                            {item.name}
                                        </h4>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className={styles[`menu-nav`]}>
                                <a onClick={() => this.onGetDishes('MENU')} className={styles[`back-button`]}>Menu</a> | <span style={{ fontWeight: 'bold' }}>{menuType}</span>
                            </div>

                            <div className={styles[`menu-categories`]}>
                                {renderDishes}
                            </div>
                            <ul className={styles[`page-numbers`]}>
                                {renderPageNumbers}
                            </ul>
                        </React.Fragment>
                    )}                    
                </div>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state[0].loading,
        menuType: state[0].menuType,
        items: state[0].items
    }
}

const mapDispatchToProps = {
    getDishes
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)
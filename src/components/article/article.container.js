import React, { Component } from 'react'
import { Navbar, Footer } from '../../commons/components/index'
import * as styles from './article.module.scss'
import { getArticle } from './article.actions'
import { Loading } from '../../commons/components/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Article extends Component {

    onGetArticle(name) {
        this.props.getArticle(name)
    }
 
    render() {
        const { loading, showing, articles, article } = this.props

        return (
            <div className={styles[`article-page`]}>
                <Navbar />  

                <div className={styles[`main-content`]}>
                    {loading && <Loading />}
                    {showing === 'home' ? (
                        <React.Fragment>
                            <h2>The greatest wealth is health</h2>
                            <div className={styles[`articles`]}>
                                {articles && articles.map((article, idx) => (
                                    <div key={idx} className={styles[`articles-item`]}>
                                        <img onClick={() => this.onGetArticle(article.name)} className={styles[`article-img`]} src={article.img} alt='article'/>
                                        <h4 className={styles[`article-title`]}>{article.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <h2>{article && article.title}</h2>
                            <div className={styles[`articles-nav`]}>
                                <Link onClick={() => this.onGetArticle('HOME')} className={styles[`back-button`]}>Articles</Link> | <span style={{ fontWeight: 'bold' }}>{article.title}</span>
                            </div>
                            <div className={styles[`article-content`]}>
                                <img className={styles[`article-content-img`]} src={article && article.img} />

                                <p className={styles[`article-description`]}>
                                    {article && article.description}
                                </p>

                                {article.paragraphs && article.paragraphs.map((item, idx) => (
                                    <div className={styles[`article-para`]}>
                                        <h4 className={styles[`para-title`]}>{idx + 1}. {item.title}</h4>
                                        <p className={styles[`para-content`]}>{item.content}</p>
                                    </div>
                                ))}
                            </div>

                        </React.Fragment>
                    )}

                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { loading, showing, articles, article } = state.ArticleReducers
    return {
        loading,
        showing,
        article,
        articles
    }
}

const mapDispatchToProps = {
    getArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
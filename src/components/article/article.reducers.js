import { SoyMilkArticle } from './articles/articles'

const initState = {
    loading: false,
    showing: 'home',
    articles: [
        {
            title: 'Benefits of soy milk',
            name: 'SOYMILK',
            img: 'https://i.imgur.com/mfwivhE.jpg'
        }
    ]
}

function ArticleReducers(state = initState, action) {
    switch(action.type) {
        case 'GET_HOME':
            return initState
        case 'GET_SOYMILK':
            return {
                ...state,
                loading: true
            }

        case 'GET_SOYMILK_DONE':
            return {
                ...state,
                loading: false,
                showing: 'article',
                article: SoyMilkArticle
            }

        default: 
            return initState
    }
}

ArticleReducers.reducerName = 'ArticleReducers'

export default ArticleReducers
import { SoyMilkArticle } from './articles/articles'

const initState = {
    loading: false,
    showing: 'home',
    articles: [
        {
            title: 'Benefits of soy milk',
            name: 'SOYMILK',
            img: 'https://askdrnandi.com/wp-content/uploads/2017/02/Health-benefits-of-Soy-Milk.png'
        }
    ]
}

export default function ArticleReducers(state = initState, action) {
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
import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import userReducer from './userReducer'
import commentsReducer from './commentsReducer'
import likesReducer from './likesReducer'

const rootReducer = combineReducers({
    cities: citiesReducer,
    user: userReducer,
    comments: commentsReducer,
    likes: likesReducer
})

export default rootReducer

import postReducer from './postReducer'
import {
    combineReducers
} from 'redux';

export default combineReducers({
    post: postReducer
})
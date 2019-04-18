import {combineReducers} from 'redux';
import postReducer from './postReducer';
import sqlDBReducer from './sqlDBReducer';

export default combineReducers({
    posts:postReducer,
    jsondata:sqlDBReducer
})
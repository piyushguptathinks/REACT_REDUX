import {FETCH_POSTS,NEW_POST,FETCH_POSTITEM,UPDATE_POST,DELETE_POST} from '../actions/types';

const initialState={
    items:[],
    item:{},
    itemDetails:[]
}

export default function(state=initialState,action){
    switch (action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            items:action.payload
        }
        case FETCH_POSTITEM:
        return {
            ...state,
            itemDetails:action.payload
        }
        case NEW_POST:
        return {
            ...state,
            item:action.payload
        }
        case UPDATE_POST:
        return {
            ...state,
            itemDetails:action.payload
        }
        case DELETE_POST:
        return {
            ...state,
            items:action.payload
        }
        default:
            return state
    }
}
import {GETALLRECORDS} from '../actions/types';

const initialState={
    allJSONData:[]
}

export default function(state=initialState,action){
    debugger;
    switch (action.type) {
        case GETALLRECORDS:{
            return {
                ...state,
                allJSONData:action.payload
            }
            break;
        }
        default:
            return state
    }
}
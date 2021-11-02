import {SET_SCREAMS , VOTE_SCREAM , LOADING_DATA, SET_SCREAM, POST_SCREAM} from '../types'

const initialState = {
    screams: [],
    scream: {},
    loading: false
}

export default function ChangeState (state= initialState , action) {
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_SCREAMS:
            return {
                ...state,
                screams: action.payload,
                loading: false
            }
        case SET_SCREAM:
            return{
                ...state,
                scream:action.payload
            }
        case POST_SCREAM:
            return {
                ...state,
                screams:[action.payload , ...state.screams]
            }
        default:
            return state
    }
}
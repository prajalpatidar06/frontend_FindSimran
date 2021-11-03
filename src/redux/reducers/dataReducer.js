import {SET_SCREAMS , LOADING_DATA, POST_SCREAM, DELETE_SCREAM} from '../types'

const initialState = {
    screams: [],
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
        case POST_SCREAM:
            return {
                ...state,
                screams:[action.payload , ...state.screams],
                loading:false
            }
        case DELETE_SCREAM:
                let index = state.screams.findIndex(
                    (scream => scream.screamId === action.payload)
                )
                state.screams.splice(index , 1)
            return {
                ...state
            }
        default:
            return state
    }
}
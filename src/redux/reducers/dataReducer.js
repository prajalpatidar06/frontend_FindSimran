import {SET_SCREAMS , LOADING_DATA, POST_SCREAM, DELETE_SCREAM, SET_AUTHSCREAMS , SET_USERDATA} from '../types'

const initialState = {
    screams: [],
    authScreams:[],
    scream:{},
    userData:{},
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
        case SET_AUTHSCREAMS:
            return {
                ...state,
                authScreams: action.payload,
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
                index = state.authScreams.findIndex(
                    (scream => scream.screamId === action.payload)
                )
                state.authScreams.splice(index , 1)
            return {
                ...state
            }
        case SET_USERDATA:
            return {
                ...state,
                userData:action.payload,
                loading:false,
            }
        default:
            return state
    }
}
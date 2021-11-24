import {
  SET_SCREAMS,
  SET_SCREAM,
  SET_AUTHSCREAMS,
  LOADING_DATA,
  POST_SCREAM,
  UPDATE_SCREAM,
  DELETE_SCREAM,
  SET_USERDATA,
  SET_VOTES,
} from "../types";

const initialState = {
  screams: [],
  authScreams: [],
  authVotes: [],
  scream: {},
  userData: {},
  loading: false,
};

export default function ChangeState(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
        loading: false
      }
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case SET_AUTHSCREAMS:
      return {
        ...state,
        authScreams: action.payload,
        loading: false,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
        loading: false,
      };
    case UPDATE_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
        authScreams: [action.payload, ...state.screams],
        loading: false,
      };
    case DELETE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      index = state.authScreams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.authScreams.splice(index, 1);
      return {
        ...state,
      };
    case SET_VOTES:
        return {
            ...state,
            authVotes: action.payload,
            loading:false
        }
    case SET_USERDATA:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

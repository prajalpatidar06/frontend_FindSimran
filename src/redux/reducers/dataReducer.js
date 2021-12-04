import {
  SET_SCREAMS,
  SET_SCREAM,
  SET_AUTHSCREAMS,
  LOADING_DATA,
  POST_SCREAM,
  UPDATE_SCREAM,
  DELETE_SCREAM,
  SET_USERDATA,
  SET_USERS,
  SET_VOTES,
  SET_PROJECTS,
  SET_AUTHPROJECTS,
  POST_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SET_ALERT,
} from "../types";

const initialState = {
  alert:"",
  screams: [],
  authScreams: [],
  authVotes: [],
  scream: {},
  users: [],
  userData: {},
  projects: [],
  authProjects: [],
  loading: false,
};

export default function ChangeState(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }
      
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
        loading: false,
      };
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
        authScreams: [action.payload, ...state.authScreams],
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
        loading: false,
      };
    case SET_USERDATA:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case SET_AUTHPROJECTS:
      return {
        ...state,
        authProjects: action.payload,
        loading: false,
      };
    case POST_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        authProjects: [action.payload, ...state.authProjects],
        loading: false,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        authProjects: [action.payload, ...state.authProjects],
        loading: false,
      };
    case DELETE_PROJECT:
      let idx = state.projects.findIndex(
        (project) => project.projectId === action.payload
      );
      state.projects.splice(idx, 1);
      idx = state.authProjects.findIndex(
        (project) => project.projectId === action.payload
      );
      state.authProjects.splice(idx, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}

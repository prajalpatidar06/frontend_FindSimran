import {
  SET_SCREAMS,
  SET_SCREAM,
  SET_AUTHSCREAMS,
  LOADING_DATA,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  POST_SCREAM,
  UPDATE_SCREAM,
  DELETE_SCREAM,
  SET_USERDATA,
  SET_VOTES,
} from "../types";
import axios from "axios";

export const getAllScreams = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/screams")
    .then((res) => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SCREAMS,
        payload: [],
      });
    });
};

export const getAuthScreams = (handle) => (dispatch) => {
  if (typeof handle === "undefined") {
    handle = localStorage.getItem('handle')
  }
  dispatch({ type: LOADING_DATA });
  axios
    .get(`screams/${handle}`)
    .then((res) => {
      dispatch({
        type: SET_AUTHSCREAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_AUTHSCREAMS,
        payload: [],
      });
    });
};

export const getAuthScream = (handle,screamId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`screams/${handle}/${screamId}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SCREAM,
        payload: [],
      });
    });
}

export const postScream = (newScream, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/screams", newScream)
    .then((res) => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data,
      });
      dispatch(clearErrors());
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const OpenUpdateScreamPage = (scream) => (dispatch) => {
  dispatch({ type: SET_SCREAM, payload: scream });
};

export const updateScream =
  (screamId, updatedScream, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    dispatch({type:DELETE_SCREAM , payload: screamId})
    axios
      .put(`/screams/${screamId}`, updatedScream)
      .then((res) => {
        dispatch({
          type: UPDATE_SCREAM,
          payload: res.data,
        });
        dispatch(clearErrors());
        history.push("/authorScreams");
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
  };

export const deleteScream = (screamId) => (dispatch) => {
  axios
    .delete(`screams/${screamId}`)
    .then((res) => {
      dispatch({
        type: DELETE_SCREAM,
        payload: screamId,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_USERDATA,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_USERDATA,
        payload: null,
      });
    });
};

export const getAuthVotes = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/votes")
    .then((res) => {
      dispatch({
        type: SET_VOTES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_VOTES,
        payload: [],
      });
    });
};

export const voteScream = (screamId, voteData) => (dispatch) => {
  axios
    .post(`/votes/${screamId}`, voteData)
    .then((res) => {
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const updateVote = (voteId, updatedVote) => (dispatch) => {
  axios
    .put(`/votes/${voteId}`, updatedVote)
    .then((res) => {
      dispatch(getAuthVotes());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const updateScreamStatus = (screamId, status, handle) => (dispatch) => {
  axios
    .put(`/screams/${screamId}/${status}`)
    .then((res) => {
      dispatch(getAuthScreams(handle));
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

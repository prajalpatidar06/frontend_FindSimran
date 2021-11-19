import {
  SET_SCREAMS,
  SET_AUTHSCREAMS,
  LOADING_DATA,
  VOTE_SCREAM,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  POST_SCREAM,
  DELETE_SCREAM,
  SET_USERDATA,
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

export const getAuthScreams = (handle) => (dispatch) => {
  if (typeof handle === "undefined") {
    return (window.location.href = "/");
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

export const voteScream = (screamId, voteData) => (dispatch) => {
  axios
    .post(`screams/${screamId}/vote`, voteData)
    .then((res) => {
      dispatch({
        type: VOTE_SCREAM,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .then(()=>{
      window.location.href = "/"
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
          payload:err.response.data
      })
    });
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_USERDATA,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: SET_USERDATA,
        payload: null
      });
    });
};
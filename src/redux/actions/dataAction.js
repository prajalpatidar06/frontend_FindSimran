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
  SET_PROJECTS,
  SET_AUTHPROJECTS,
  POST_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  SET_USERS,
  SET_ALERT,
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
    handle = localStorage.getItem("handle");
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

export const getAuthScream = (handle, screamId) => (dispatch) => {
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
      dispatch({type:SET_ALERT , payload:"Scream Posted Successfully!"})
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
    dispatch({ type: DELETE_SCREAM, payload: screamId });
    axios
      .put(`/screams/${screamId}`, updatedScream)
      .then((res) => {
        dispatch({
          type: UPDATE_SCREAM,
          payload: res.data,
        });
        dispatch(clearErrors());
        dispatch({type:SET_ALERT , payload:"Scream Updated Successfully!"})
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
      dispatch({type:SET_ALERT , payload:"Scream Deleted Successfully!"})
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

export const getUsers = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("user/users/getall")
    .then((res) => {
      dispatch({
        type: SET_USERS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_USERS,
        payload: [],
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
      dispatch({type:SET_ALERT , payload:"Successfully Voted on Scream!"})
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
      dispatch({type:SET_ALERT , payload:"Vote Updated Successfully!"})
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
      dispatch({type:SET_ALERT , payload:"Scream Status Updated Successfully!"})
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getAllProjects = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/projects")
    .then((res) => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_PROJECTS,
        payload: [],
      });
    });
};

export const getAuthProjects = (handle) => (dispatch) => {
  if (typeof handle === "undefined") {
    handle = localStorage.getItem("handle");
  }
  dispatch({ type: LOADING_DATA });
  axios
    .get(`projects/${handle}`)
    .then((res) => {
      dispatch({
        type: SET_AUTHPROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_AUTHPROJECTS,
        payload: [],
      });
    });
};

export const postProject = (newProject) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/projects", newProject)
    .then((res) => {
      dispatch({
        type: POST_PROJECT,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch({type:SET_ALERT , payload:"Project Posted Successfully!"})
    })
    .then(() => {
      window.location.href = "profile";
    });
};

export const updateProject = (projectId, updatedProject) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  dispatch({ type: DELETE_PROJECT, payload: projectId });
  axios.put(`/projects/${projectId}`, updatedProject).then((res) => {
    dispatch({
      type: UPDATE_PROJECT,
      payload: res.data,
    });
    dispatch(clearErrors());
    dispatch({type:SET_ALERT , payload:"Project Updated Successfully!"})
  });
};

export const deleteProject = (projectId) => (dispatch) => {
  axios.delete(`projects/${projectId}`).then((res) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
    dispatch({type:SET_ALERT , payload:"Project Deleted Successfully!"})
  });
};

export const ClearAlertsMessages = () => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: "" });
};

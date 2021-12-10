import {
  SET_CHAT,
  SET_CHATS,
  UPDATE_CHAT,
  LOADING_CHATS,
  SET_ERRORS,
} from "../types";
import axios from "axios";

export const getAllGroups = () => (dispatch) => {
  dispatch({ type: LOADING_CHATS });
  axios
    .get("/chats")
    .then((res) => {
      dispatch({ type: SET_CHATS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_CHATS,
        payload: [],
      });
    });
};

export const getOneGroup = (groupId) => (dispatch) => {
  dispatch({ type: LOADING_CHATS });
  axios
    .get(`chats/${groupId}`)
    .then((res) => {
      dispatch({ type: SET_CHAT, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_CHAT,
        payload: {},
      });
    });
};

export const sendMessage = (groupId, message) => (dispatch) => {
  dispatch({ type: LOADING_CHATS });
  let StoreMessage = {
    message: message,
    handle: localStorage.getItem("handle"),
    createdAt: new Date().toISOString(),
  };
  axios.post(`chats/${groupId}`, {message}).then((res) => {
    dispatch({ type: UPDATE_CHAT, payload: StoreMessage });
  });
};

export const editGroupName = (groupId, groupName) => (dispatch) => {
  axios
    .put(`chats/${groupId}/editName`, groupName)
    .then((res) => {
      dispatch(getOneGroup(groupId));
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const removeGroupMember = (groupId, removeMember) => (dispatch) => {
  axios
    .put(`chats/${groupId}/removeMember`, removeMember)
    .then((res) => {
      dispatch(getOneGroup(groupId));
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const leaveFromGroup = (groupId) => (dispatch) => {
  axios
    .put(`chats/${groupId}/leave`)
    .then((res) => {
      window.location.href = "/chats";
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

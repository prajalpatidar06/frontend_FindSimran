import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_UNAUTHENTICATED,
} from "../types";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
let allGood = false;

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/user/signup", newUserData)
    .then((res) => {
      setAuthorizationHeaders(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      allGood = true;
      history.push("/");
    })
    .catch((err) => {
      if (!allGood) {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      }
    });
};

export const SignInWithGoogle = () => (dispatch) => {
  dispatch({type: LOADING_UI})
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCred) => {
      return firebase.auth().onAuthStateChanged(async (user) => {
        await user.getIdToken().then((token) => {
          setAuthorizationHeaders(token);
          if (userCred.additionalUserInfo.isNewUser) {
            axios.post("user/signupWithGoogle").then(() => {
              window.location.href = "/";
            });
          }
          else{
            window.location.href = "/"
          }
        });
      });
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/user/login", userData)
    .then((res) => {
      setAuthorizationHeaders(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      allGood = true;
      history.push("/");
    })
    .catch((err) => {
      if (!allGood) {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      }
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  localStorage.removeItem("handle");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  allGood = false;
  window.location.href = "/";
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      localStorage.setItem("handle", res.data.credentials.handle);
    })
    .catch((err) => console.log(err));
};

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user/image", formData)
    .then(() => {
      dispatch({type: LOADING_USER})
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .then(() => {
      window.location.href = "profile";
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeaders = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
// pages stuff
import home from "./pages/home";
import profile from "./pages/profile";
import notifications from "./pages/notifications";
import aboutUs from "./pages/aboutUs";
import chats from "./pages/chats"
import login from "./pages/login";
// Components stuff
import Navbar from "./components/Navbar";
import AuthRoute from "./utils/AuthRoute";
// Redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser , getUserData } from "./redux/actions/userAction";
import doubtExchange from "./pages/doubtExchange";

const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp*1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
  else{
    store.dispatch({type: SET_AUTHENTICATED})
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(getUserData())
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/doubtExchange" component={doubtExchange} />
              <Route exact path="/profile" component={profile} />
              <Route exact path="/chats" component={chats} />
              <Route exact path="/notifications" component={notifications} />
              <Route exact path="/aboutUs" component={aboutUs} />
              <AuthRoute exact path="/login" component={login} />
              <Route component={home} />
            </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const IsLoginRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
  )
};

const mapStateToProps = (state) =>({
  authenticated: state.user.authenticated
})

IsLoginRoute.propTypes = {
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(IsLoginRoute);

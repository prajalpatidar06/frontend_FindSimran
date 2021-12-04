import React, { Component } from "react";
import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
export class profile extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="min-h-screen bg-gray-100">
            <Profile />
          </div>
        )}
      </div>
    );
  }
}

profile.propTypes = {
  loading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

export default connect(mapStateToProps)(profile);

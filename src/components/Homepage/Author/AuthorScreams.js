import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthScreams } from "../../../redux/actions/dataAction";
import AuthScreamCard from "./AuthScreamCard";

export class AuthorScreams extends Component {
  componentDidMount() {
    this.props.getAuthScreams(this.props.user.credentials.handle);
  }
  render() {
    const { authScreams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      authScreams.map((scream) => (
        <AuthScreamCard
          key={scream.screamId}
          scream={scream}
          handle={this.props.user.credentials.handle}
        />
      ))
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
    return (
      <div>
        <h2 className="text-center text-blue-600 text-2xl font-bold">
          Your Screams
        </h2>
        {recentScreamsMarkup}
      </div>
    );
  }
}

AuthorScreams.propTypes = {
  getAuthScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

export default connect(mapStateToProps, { getAuthScreams })(AuthorScreams);

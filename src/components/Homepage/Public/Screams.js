import React, { Component } from "react";
import Scream from "./Scream";
import LoginCard from "./LoginCard"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllScreams } from "../../../redux/actions/dataAction";

export class Screams extends Component {
  componentDidMount() {
    this.props.getAllScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
    return (
      <div>
        {!this.props.user.authenticated && <LoginCard />}
        {recentScreamsMarkup}
      </div>
    );
  }
}

Screams.propTypes = {
  getAllScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  user:PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user
});

export default connect(mapStateToProps, { getAllScreams })(Screams);

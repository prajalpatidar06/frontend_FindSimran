import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthVotes } from "../../../redux/actions/dataAction";
import AuthVoteCard from "./AuthVoteCard";

export class AuthorVotes extends Component {
  componentDidMount() {
    this.props.getAuthVotes();
  }
  render() {
    const { authVotes, loading } = this.props.data;
    let recentVotesMarkup = !loading ? (
      authVotes.length > 0 ? (
        authVotes.map((data) => (
          <AuthVoteCard
            key={data.scream.screamId}
            vote={data.vote}
            scream={data.scream}
          />
        ))
      ) : (
        <div className="flex justify-center fixed top-[50%]  sm:left-[50%] items-center">
        <h1 className="text-red-500 text-2xl">No votes found</h1>
      </div>
      )
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[40%] sm:left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
    return (
      <div>
        <h2 className="text-center text-blue-600 text-2xl font-bold">
          Your Votes
        </h2>
        {recentVotesMarkup}
      </div>
    );
  }
}

AuthorVotes.propTypes = {
  getAuthVotes: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getAuthVotes })(AuthorVotes);

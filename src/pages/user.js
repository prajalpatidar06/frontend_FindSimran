import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserData } from "../redux/actions/dataAction";
import UserProfileCard from "../components/User/UserProfileCard";

export class user extends Component {
  componentDidMount() {
    this.props.getUserData(
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ]
    );
    
  }
  render() {
    const { userData, loading } = this.props;

    return (
      <div>
        {!loading ? (
          <>
            {userData == null ? (
              <div className="font-bold text-2xl flex text-red-500 absolute top-[50%] left-[30%] sm:left-[45%]">User Not Found</div>
            ) : (
              <div className="min-h-screen bg-gray-100">
                <UserProfileCard user={userData} />
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
    );
  }
}

user.propTypes = {
  userData: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
  loading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.data.userData,
  loading: state.data.loading,
});

export default connect(mapStateToProps, { getUserData })(user);

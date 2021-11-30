import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../redux/actions/dataAction";
import UsersCard from "../components/users/UsersCard";

export class users extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users, loading } = this.props.data;

    let finalData = !loading
      ? users
          .filter((val) => {
            if (this.state.search.trim() === "") {
              return val;
            } else if (
              val.handle.toLowerCase().includes(this.state.search.toLowerCase())
            ) {
              return val;
            } else if (
              val.name &&
              val.name.toLowerCase().includes(this.state.search.toLowerCase())
            ) {
              return val;
            }
            return val
          })
          .sort((a, b) => {
            return a.handle.localeCompare(b.handle);
          })
      : [];

    let usersMarkup = !loading ? (
      finalData.length > 0 ? (
        finalData.map((user) => <UsersCard key={user.handle} user={user} />)
      ) : (
        <p className="text-xl font-medium text-center">No User Found</p>
      )
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <div className="bg-white shadow-sm">
          <div className="flex justify-center font-medium ">
            <input
              title="search user"
              type="text"
              name="user"
              className="p-2 sm:text-sm border-b-2 border-blue-300 focus:outline-none"
              placeholder="Search for User"
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
              value={this.state.search}
            />
          </div>
        </div>
        <div className="flex-grow h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide">
          <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            {usersMarkup}
          </div>
        </div>
      </div>
    );
  }
}

users.propTypes = {
  data: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUsers })(users);

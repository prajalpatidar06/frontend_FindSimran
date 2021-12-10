import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllGroups } from "../redux/actions/chatAction";
import Groups from "../components/chats/Groups";
import Messages from "../components/chats/Messages";
import "./chats.css";

export class chats extends Component {
  constructor() {
    super();
    this.state = {
      mobiDisplay: false,
    };
  }
  componentDidMount() {
    this.props.getAllGroups();
  }
  render() {
    let locationQuery =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    const { groups, loading } = this.props.chat;
    console.log(locationQuery);
    return (
      <div className="sm:flex bg-gray-100 overflow-hidden">
        <div
          className={`mx-2 sm:w-1/4 ${
            locationQuery !== "chats" && "hidden"
          } sm:inline sm:border-r-2 border-blue-500`}
        >
          <p className="text-center pt-4 text-2xl text-blue-500 font-bold">
            Groups
          </p>
          <div className="manageDisplay pt-6 pb-4 overflow-y-auto scrollbar-hide">
            {!loading ? (
              groups.length > 0 ? (
                groups.map((group) => (
                  <Groups
                    key={group}
                    group={group}
                    active={locationQuery === group.split("{~!@#$%^&*()_+}")[0]}
                  />
                ))
              ) : (
                <p className="text-xl">No groups found</p>
              )
            ) : (
              <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`flex-1 ${
            locationQuery === "chats" && "hidden"
          } sm:inline`}
        >
          {locationQuery !== "chats" && <Messages />}
        </div>
      </div>
    );
  }
}

chats.propTypes = {
  chat: PropTypes.object.isRequired,
  getAllGroups: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps, { getAllGroups })(chats);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllGroups } from "../redux/actions/chatAction";
import Groups from "../components/chats/Groups";
import Messages from "../components/chats/Messages";

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
    return (
      <div className="sm:flex bg-gray-100 overflow-hidden">
        <div 
          className={`mx-2 sm:w-1/4 ${
            locationQuery !== "chats" && "hidden"
          } sm:inline`}
        >
          <p className="text-center pt-4 text-2xl text-blue-500 font-bold">
            Groups
          </p>
          <div className="h-screen pt-6 pb-4 overflow-y-auto scrollbar-hide">
            {!loading &&
              groups.map((group) => <Groups key={group} group={group} active={locationQuery === group} />)}
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

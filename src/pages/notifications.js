import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NotificationCard from "../components/Notification/NotificationCard";
export class notifications extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        {notifications.map((notification) => (
          <NotificationCard notification={notification} />
        ))}
      </div>
    );
  }
}

notifications.propTypes = {
  notifications: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.user.notifications,
});

export default connect(mapStateToProps)(notifications);

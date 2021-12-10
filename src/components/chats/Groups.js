import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Groups extends Component {
  render() {
    let groupId = this.props.group.split("{~!@#$%^&*()_+}")[0];
    let groupName =
      this.props.group.split("{~!@#$%^&*()_+}").length > 1
        ? this.props.group.split("{~!@#$%^&*()_+}")[1]
        : this.props.group.split("{~!@#$%^&*()_+}")[0];
    return (
      <div className={`flex flex-col ${this.props.active && "bg-blue-300"}`}>
        <Link to={`/chats/${groupId}`}>
          <div className="relative p-5 mt-5 bg-white rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">{groupName}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Groups;

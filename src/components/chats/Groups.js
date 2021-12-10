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
      <div className="flex flex-col">
        <Link to={`/chats/${groupId}`}>
          <div className={`relative p-5 mt-5 bg-white rounded-t-2xl shadow-sm ${this.props.active && "bg-blue-500"}`}>
            <div className={`flex items-center space-x-2 text-medium ${this.props.active && "text-white"}`}>{groupName}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Groups;

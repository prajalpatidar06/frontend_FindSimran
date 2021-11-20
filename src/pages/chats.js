import React, { Component } from "react";

export class chats extends Component {
  render() {
    return (
      <div className="min-h-screen py-10 px-3 sm:px-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/findcodingpartner.appspot.com/o/noChat.jpg?alt=media"
          alt="no new Chat"
          style={{position:"absolute", left:"37%" , top:"45%"}}
        />
      </div>
    );
  }
}

export default chats;

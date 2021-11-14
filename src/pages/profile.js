import React, { Component } from "react";
import ProfileCard from "../components/ProfileCard";
export class profile extends Component {
  render() {
    return (
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
          <ProfileCard />
      </div>
    );
  }
}

export default profile;

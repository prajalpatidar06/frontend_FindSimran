import React, { Component } from "react";
import Sidebar from "../components/Homepage/Sidebar";
import ProfileCard from "../components/Profile/ProfileCard";
export class profile extends Component {
  render() {
    return (
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        {/* <Sidebar /> */}
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
          <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <ProfileCard />
          </div>
        </div>
      </div>
    );
  }
}

export default profile;

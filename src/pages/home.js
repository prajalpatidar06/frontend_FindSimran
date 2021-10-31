import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export class home extends Component {
  render() {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Feed />
        </main>
      </div>
    );
  }
}

export default home;

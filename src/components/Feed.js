import React, { Component } from "react";
import Screams from "./Screams";

export class Feed extends Component {
  render() {
    return (
      <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
          <Screams />
        </div>
      </div>
    );
  }
}

export default Feed;

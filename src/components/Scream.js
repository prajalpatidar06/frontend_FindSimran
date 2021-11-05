import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LinkIcon } from "@heroicons/react/solid";

export class Scream extends Component {
  userProfile = (handle) => {
    console.log(handle);
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      scream: {
        body,
        title,
        url,
        handle,
        userImage,
        createdAt,
        requiredSkills,
      },
    } = this.props;
    return (
      <div className="flex flex-col">
        <div className="relative p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full cursor-pointer"
              src={userImage}
              alt="Profile"
              width="40"
              height="40"
              layout="fixed"
              onClick={() => this.userProfile(handle)}
            />
            <div>
              <p
                className="font-medium cursor-pointer"
                onClick={() => this.userProfile(handle)}
              >
                {handle}
              </p>
              <p className="text-xs text-gray-400">
                {dayjs(createdAt).fromNow()}
              </p>
            </div>
          </div>
          <p className="pt-4 font-medium text-2xl text-blue-300">{title}</p>
          <div className="pt-3 font-mono">
          {body.length > 0 && body.map((para) => (
            <p>{para}</p>
          ))}
          </div>
          {url !== "" && (
            <a
              className="pt-3 font-mono text-green-400 hover:underline flex"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon width={20} height={20} />
              {url}
            </a>
          )}
          {requiredSkills.length > 0 && (
              <p className="mx-2 break-words break-normal md:break-all">
                {requiredSkills.map((element) => (<span className="mx-2 text-red-500">{ element } <span className="text-black sm:text-xl">|</span></span>))}
              </p>
          )}
          <div className="my-3 py-3 relative">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0">
              Lets Collab
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scream;

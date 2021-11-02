import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LinkIcon } from "@heroicons/react/solid";

export class Scream extends Component {
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
            />
            <div>
              <p className="font-medium">{handle}</p>
              <p className="text-xs text-gray-400">
                {dayjs(createdAt).fromNow()}
              </p>
            </div>
          </div>
          <p className="pt-4 font-medium text-2xl text-blue-300">{title}</p>
          <p className="pt-3 font-mono">{body}</p>
          {url !== "" && (<a
            className="pt-3 font-mono text-green-400 hover:underline flex"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon width={20} height={20}/>
            {url}
          </a>)}
          {requiredSkills.length > 0 ? (<ul className="flex mr-8">
            <li className="text-red-300">Required Skills: </li>
            {requiredSkills.map((element) => (
              <li className="mx-2">{element}</li>
            ))}
          </ul>) : (<p className="mt-7"></p>)}
          <div className="sm:absolute bottom-2 right-2 py-2">
            <button
              className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Lets Collab
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scream;

import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteScream } from "../redux/actions/dataAction";

import {
  DotsCircleHorizontalIcon,
  LinkIcon,
  LockClosedIcon,
  LockOpenIcon,
  TrashIcon,
} from "@heroicons/react/solid";

export class AuthScreamCard extends Component {
  userProfile = (handle) => {
    console.log(handle);
  };

  handleDelete = (screamId) => {
      const confirm = window.confirm('Deleting Scream')
      if(confirm){
        this.props.deleteScream(screamId);
      }
  };

  render() {
    dayjs.extend(relativeTime);
    const {
      scream: {
        body,
        title,
        url,
        userImage,
        createdAt,
        requiredSkills,
        active,
        screamId,
      },
      handle,
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
            {body.length > 0 && body.map((para) => <p>{para}</p>)}
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
            <p className="mx-2 mt-2 break-words break-normal md:break-all">
              {requiredSkills.map((element) => (
                <span className="mx-2 text-red-500">{element}</span>
              ))}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center bg-white px-2 py-2 sm:px-4 shadow-md sm:text-xl border-t">
          <div className="InputIcon rounded-none rounded-bl-2xl">
            {active ? (
              <div className="text-green-700">
                <LockOpenIcon className="h-4 w-4 text-green-500" />
                <p className="text-xs sm:text-bases">active</p>
              </div>
            ) : (
              <div className="text-red-600">
                <LockClosedIcon className="h-4 w-4 text-red-500" />
                <p className="text-xs sm:text-bases">inactive</p>
              </div>
            )}
          </div>
          <div className="InputIcon rounded-none cursor-pointer hover:text-blue-500">
            <DotsCircleHorizontalIcon className="h-4" />
            <p className="text-xs sm:text-bases">votes</p>
          </div>
          <div
            className="InputIcon rounded-none rounded-br-2xl text-red-400 cursor-pointer hover:text-red-700"
            onClick={() => this.handleDelete(screamId)}
          >
            <TrashIcon className="h-4" />
            <p className="text-xs sm:text-bases">delete</p>
          </div>
        </div>
      </div>
    );
  }
}

AuthScreamCard.propTypes = {
  deleteScream: PropTypes.func.isRequired,
};

export default connect(null, { deleteScream })(AuthScreamCard);

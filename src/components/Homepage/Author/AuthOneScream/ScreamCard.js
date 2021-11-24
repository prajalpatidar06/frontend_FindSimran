import React, { Component } from "react";
import dayjs from "dayjs";

export class ScreamCard extends Component {
  render() {
    const {
      scream: {
        userImage,
        handle,
        createdAt,
        url,
        title,
        body,
        requiredSkills,
      },
      FormateDate,
    } = this.props;
    return (
      <div>
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
                {FormateDate(createdAt)
                  ? dayjs(createdAt).format("DD/MM/YY")
                  : dayjs(createdAt).fromNow()}
              </p>
            </div>
          </div>
          <p className="pt-4 font-medium text-2xl text-blue-600">{title}</p>
          <div className="pt-3">
            {body &&
              body.map((para) => (
                <p style={{ wordBreak: "break-all" }}>{para}</p>
              ))}
          </div>
          <a
            className="pt-3 text-green-400"
            href={url}
            target="_blank"
            rel="noreferrer"
            title="link"
            style={{ wordBreak: "break-all" }}
          >
            {url}
          </a>
          <p className="mt-2 break-words break-normal md:break-all">
            {requiredSkills && requiredSkills.map((element) => (
              <span className="mx-2 text-red-500">
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default ScreamCard;

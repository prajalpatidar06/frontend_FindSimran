import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export class AuthVoteCard extends Component {
  userProfile = (handle) => {
    if(handle === this.props.vote.handle){
        window.location.href = "/profile";
    }
    else{
        window.location.href = `user/${handle}`
    }
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      scream: {
        userImage,
        handle,
        title,
        url,
        body,
        createdAt,
        requiredSkills,
      },
      vote,
    } = this.props;
    const FormateDate = (createdAt) => {
      return (
        parseInt(dayjs().format("YY")) >
          parseInt(dayjs(createdAt).format("YY")) ||
        parseInt(dayjs().format("MM")) >
          parseInt(dayjs(createdAt).format("MM")) ||
        parseInt(dayjs().format("DD")) -
          parseInt(dayjs(createdAt).format("DD")) >=
          1
      );
    };
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
                {FormateDate(createdAt)
                  ? dayjs(createdAt).format("DD/MM/YY")
                  : dayjs(createdAt).fromNow()}
              </p>
            </div>
            {url !== "" && (
              <a
                className="pt-3 text-green-400 absolute right-2 top-1"
                href={url}
                target="_blank"
                rel="noreferrer"
                title="link"
              >
                <ExternalLinkIcon width={26} height={26} />
              </a>
            )}
          </div>
          <p className="pt-4 font-medium text-2xl text-blue-600">{title}</p>
          <div className="pt-3">
            {body.length > 0 &&
              body.map((para) => (
                <p style={{ wordBreak: "break-all" }}>{para}</p>
              ))}
          </div>
          {requiredSkills.length > 0 && (
            <p className="mt-2 break-words break-normal md:break-all">
              {requiredSkills.map((element) => (
                <span className="mx-2 text-red-500">
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </span>
              ))}
            </p>
          )}
          <div className="shadow sm:rounded-md sm:overflow-hidden mt-1">
            <div className="bg-gray-100 space-y-6">
              <div className="text-center text-2xl text-blue-500 font-medium">
                Your Vote
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="rounded-full cursor-pointer"
                  src={vote.userImage}
                  alt="Profile"
                  width="40"
                  height="40"
                  layout="fixed"
                  onClick={() => this.userProfile(vote.handle)}
                />
                <div>
                  <p
                    className="font-medium cursor-pointer"
                    onClick={() => this.userProfile(vote.handle)}
                  >
                    {vote.handle}
                  </p>
                  <p className="text-xs text-gray-400">
                    {FormateDate(vote.createdAt)
                      ? dayjs(vote.createdAt).format("DD/MM/YY")
                      : dayjs(vote.createdAt).fromNow()}
                  </p>
                </div>
              </div>
              <div>
                {vote.comment.length > 0 &&
                  vote.comment.map((para) => (
                    <p style={{ wordBreak: "break-all" }}>{para}</p>
                  ))}
              </div>
              <div className="mt-4 mx-1">
                <p className="mt-2 break-words break-normal md:break-all">
                  {vote.skills.map((element) => (
                    <span className="mx-2 text-red-500">
                      {element.charAt(0).toUpperCase() + element.slice(1)}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthVoteCard;

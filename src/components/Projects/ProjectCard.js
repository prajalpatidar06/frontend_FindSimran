import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ExternalLinkIcon } from "@heroicons/react/solid";

function ProjectCard({
  project: {
    projectId,
    body,
    title,
    url,
    techUsed,
    handle,
    userImage,
    createdAt,
  },
}) {
  dayjs.extend(relativeTime);

  const userProfile = (handle) => {
    window.location.href =
      localStorage.getItem("handle") === handle ? "profile" : `user/${handle}`;
  };

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
            onClick={() => userProfile(handle)}
          />
          <div>
            <p
              className="font-medium cursor-pointer"
              onClick={() => userProfile(handle)}
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
          {body.length > 0 && body.map((para) => <p>{para}</p>)}
        </div>
        {techUsed.length > 0 && (
          <p className="mx-2 mt-2 break-words break-normal md:break-all border-t">
            {techUsed.map((element) => (
              <span className="mx-2 text-red-500">
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

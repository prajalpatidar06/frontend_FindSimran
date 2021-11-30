import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function AuthProjectCard({
  project: { projectId, body, title, url, techUsed, userImage, createdAt },
  handle,
}) {
  dayjs.extend(relativeTime);
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
    <div>
      <p className="pt-4 font-medium text-2xl text-blue-600">{title}</p>
      <p className="text-xs text-gray-400">
        {FormateDate(createdAt)
          ? dayjs(createdAt).format("DD/MM/YY")
          : dayjs(createdAt).fromNow()}
      </p>
      <div className="pt-3">
        {body.length > 0 && body.map((para) => <p>{para}</p>)}
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
  );
}

export default AuthProjectCard;

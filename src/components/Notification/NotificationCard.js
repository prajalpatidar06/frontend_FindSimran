import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);
function NotificationCard({ notification }) {
  const userProfile = (handle) => {
    window.location.href =
      notification.sender === notification.recipient
        ? "profile"
        : `user/${handle}`;
  };
  return (
    <div className="flex flex-col">
      <div className="relative p-5 mt-5 bg-white rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full cursor-pointer"
            src={notification.senderImage}
            alt="Profile"
            width="60"
            height="60"
            layout="fixed"
            onClick={() => userProfile(notification.sender)}
          />
          <div>
            <span
              className="font-medium cursor-pointer hover:text-blue-500"
              onClick={() => userProfile(notification.sender)}
            >
              {notification.sender}
            </span>
            {notification.type === "vote" ? (
              <p className="flex">
                voted on your scream
                <Link
                  to={`/scream/${notification.screamId}`}
                  className="text-blue-500"
                >
                  <span className="mx-2">view</span>
                </Link>
              </p>
            ) : (
              <span>accept your collab request for scream</span>
            )}
          </div>
          <p className="text-xs text-gray-400 sm:absolute right-2">
            {dayjs(notification.createdAt).fromNow().slice(1) === " days ago"
              ? dayjs(notification.createdAt).format("DD/MM/YY")
              : dayjs(notification.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;

import React from "react";

function UsersCard({ user: { handle, imageUrl, email, name } }) {
  const userProfile = (handle) => {
    window.location.href =
      localStorage.getItem("handle") === handle ? "profile" : `user/${handle}`;
  };
  return (
    <div className="flex flex-col bg-white justify-center mt-5 rounded-2xl shadow-sm">
      <div
        className="my-3 mx-3 py-3 font-medium cursor-pointer"
        onClick={() => userProfile(handle)}
      >
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={imageUrl}
            alt="Profile"
            style={{width:"50px",height:"50px"}}
            layout="fixed"
          />
          <div>
            <p className="font-medium">{name ? name : handle}</p>
            <p className="text-gray-400">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;

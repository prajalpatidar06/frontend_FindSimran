import React from "react";

function UserProfileCard({
  user: {
    handle,
    imageUrl,
    email,
    bio,
    gender,
    onlinePlateform,
    skills,
    website,
  },
}) {
  return (
    <div className="flex items-center">
      <div className="mx-auto bg-white shadow-xl rounded-xl p-2">
        <div className="flex">
          <img
            className="shadow-xl rounded-full mx-auto mt-5"
            width={140}
            height={140}
            src={imageUrl}
            alt="Profile face"
          />
        </div>
        <div className="mt-5">
          <p className="text-xl px-5 sm:text-2xl font-semibold text-gray-900">
            {handle}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 px-5 w-auto">
            <span className="text-red-500 mx-1">email : </span>
            {email}
          </p>
          {gender && (
            <p className="text-xs sm:text-base text-gray-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">gender : </span>
              {gender}
            </p>
          )}
          {website && (
            <p className="text-xs sm:text-base flex text-gray-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">website : </span>
              <a href={website} className="text-green-500 hover:underline">
                {website}
              </a>
            </p>
          )}
          {bio && (
            <p className="text-xs sm:text-base text-green-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">bio : </span> {bio}
            </p>
          )}
          {skills && (
            <div className="align-center break-words px-5 justify-center mt-3">
              <span className="text-blue-600">skills : </span>
              {skills.map((skill) => (
                <span className="mx-1 text-red-500">{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;

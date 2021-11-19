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
    name,
    collage,
    city,
    state
  },
}) {
  return (
    <div className="flex items-center">
      <div className="mx-auto bg-white shadow-xl rounded-xl p-2">
        <div className="flex">
          <img
            className="shadow-xl rounded-full mx-auto mt-5"
            width={160}
            height={160}
            src={imageUrl}
            alt="Profile face"
          />
        </div>
        <div className="mt-5">
          <p className="text-xl px-5 sm:text-2xl font-semibold text-gray-900">
            {handle}
          </p>
          {name && (
            <p className="text-xs sm:text-base text-gray-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">name : </span>
              {name}
            </p>
          )}
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
          {collage && (
            <p className="text-xs sm:text-base flex text-gray-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">collage : </span>
                {collage}
            </p>
          )}
          {city && (
            <p className="text-xs sm:text-base flex text-gray-600 pt-2 px-5 w-auto">
              <span className="text-red-500 mx-1">city : </span>
                {city}, {state}
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
                <span className="mx-1 text-red-500">
                  {skill.charAt(0).toUpperCase() + skill.slice(1)}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;

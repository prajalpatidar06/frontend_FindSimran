import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProfileCard({
  user: {
    credentials: {
      handle,
      imageUrl,
      email,
      bio,
      gender,
      onlinePlateform,
      skills,
      website,
    },
  },
}) {
  return (
    <div className="w-full">
      <div className="mx-auto bg-white shadow-xl rounded-xl p-2">
        <div className="flex">
          <img
            className="shadow-xl rounded-full"
            width={140}
            height={140}
            src={imageUrl}
            alt="Profile face"
          />
          <div className="hidden sm:block">
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
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xl px-5 sm:text-2xl font-semibold text-gray-900">
            {handle}
          </p>
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

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileCard);

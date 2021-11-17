import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {CameraIcon, PencilIcon} from '@heroicons/react/solid'
import {uploadImage} from '../../redux/actions/userAction'
import {Link} from 'react-router-dom'

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
  uploadImage
}) {

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    uploadImage(formData);
  }

  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  }

  return (
    <div className="flex items-center">
      <div className="mx-auto bg-white shadow-xl rounded-xl p-2">
        <div className="flex relative">
          <Link to="/edit-profile"><PencilIcon width={22} height={22} className="absolute right-0 cursor-pointer hover:text-blue-500" /></Link>
          <img
            className="shadow-xl rounded-full mx-auto mt-5"
            width={140}
            height={140}
            src={imageUrl}
            alt="Profile face"
          />
          <input type="file" id="imageInput" hidden="hidden" onChange={handleImageChange} />
          <CameraIcon className="absolute right-5 bottom-0 hover:text-blue-500 cursor-pointer" width={25} height={25} type="button" title="update Image" onClick={handleEditPicture} />
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

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps,{uploadImage})(ProfileCard);

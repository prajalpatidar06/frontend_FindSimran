import React, { Component, Fragment } from "react";
import HeaderIcon from "./HeaderIcon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import {
  HomeIcon,
  FlagIcon,
  BellIcon,
  InformationCircleIcon,
  ChatIcon,
} from "@heroicons/react/solid";

import { SearchIcon, LoginIcon, LogoutIcon } from "@heroicons/react/outline";

function Navbar({ user }) {
  const [state, setstate] = React.useState(1)
  const LogoutUser = () => {
    this.props.logoutUser();
  };
  let chatnotificationIcon ="";
  if (user.authenticated) {
  chatnotificationIcon = <Fragment>
      <Link to="/chats">
        <div onClick={() => setstate(2)}>
          <HeaderIcon active={state === 2} Icon={ChatIcon} />
        </div>
      </Link>
      <Link to="/notifications">
        <div onClick={() => setstate(3)}>
          <HeaderIcon active={state === 3} Icon={BellIcon} />
        </div>
      </Link>
    </Fragment>
  }
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/findcodingpartner.appspot.com/o/findsimran-logo.png?alt=media"
            alt="Logo"
            width={45}
            height={40}
            layout="fixed"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search FindSimran"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link to="/">
            <div onClick={() => setstate(1)}>
              <HeaderIcon active={state === 1} Icon={HomeIcon} />
            </div>
          </Link>
          <Link to="/">
            <div onClick={() => setstate(4)}>
              <HeaderIcon active={state === 4} Icon={FlagIcon} />
            </div>
          </Link>
          {chatnotificationIcon}
          <Link to="/aboutUs">
            <div onClick={() => setstate(5)}>
              <HeaderIcon active={state === 5} Icon={InformationCircleIcon} />
            </div>
          </Link>
          {user.authenticated ? (
            <div onClick={LogoutUser}>
              <HeaderIcon Icon={LogoutIcon} />
            </div>
          ) : (
            <Link to="/login">
              <div onClick={() => setstate(6)}>
                <HeaderIcon active={state === 6} Icon={LoginIcon} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);

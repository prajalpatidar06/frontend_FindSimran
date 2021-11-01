import React, {Fragment } from "react";
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
  ChatAlt2Icon,
} from "@heroicons/react/solid";

import { SearchIcon, LoginIcon, LogoutIcon } from "@heroicons/react/outline";

function Navbar({ user, logoutUser }) {
  let activeTab = window.location.href.split('/')[window.location.href.split('/').length - 1]
  console.log(activeTab)
  const [state, setstate] = React.useState(activeTab);
  const LogoutUser = () => {
    logoutUser();
  };
  let chatnotificationIcon = "";
  if (user.authenticated) {
    chatnotificationIcon = (
      <Fragment>
        <Link to="/chats">
          <div title="chat" onClick={() => setstate("chats")}>
            <HeaderIcon active={state === "chats"} Icon={ChatAlt2Icon} />
          </div>
        </Link>
        <Link to="/notifications">
          <div title="notifications" onClick={() => setstate("notifications")}>
            <HeaderIcon active={state === "notifications"} Icon={BellIcon} />
          </div>
        </Link>
      </Fragment>
    );
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
            onClick={()=>(setstate(""))}
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
            <div title="home" onClick={() => setstate("")}>
              <HeaderIcon active={state === ""} Icon={HomeIcon} />
            </div>
          </Link>
          <Link to="/doubtExchange">
            <div title="Doubt Exchange" onClick={() => setstate("doubtExchange")}>
              <HeaderIcon active={state === "doubtExchange"} Icon={FlagIcon} />
            </div>
          </Link>
          {chatnotificationIcon}
          <Link to="/aboutUs">
            <div title="About Us" onClick={() => setstate("aboutUs")}>
              <HeaderIcon active={state === "aboutUs"} Icon={InformationCircleIcon} />
            </div>
          </Link>
          {user.authenticated ? (
            <div title="logout" onClick={LogoutUser}>
              <HeaderIcon Icon={LogoutIcon} />
            </div>
          ) : (
            <Link to="/login">
              <div title="login" onClick={() => setstate("login")}>
                <HeaderIcon active={state === "login"} Icon={LoginIcon} />
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

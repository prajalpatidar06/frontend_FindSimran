import React from "react";
import HeaderIcon from "./HeaderIcon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";
import {
  HomeIcon,
  BellIcon,
  InformationCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";

function Navbar({ user, logoutUser }) {
  let activeTab =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  const [state, setstate] = React.useState(activeTab);
  const LogoutUser = () => {
    logoutUser();
  };
  return (
    <div className="sticky flex top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/findcodingpartner.appspot.com/o/findsimran-logo.png?alt=media"
            alt="Logo"
            layout="fixed"
            className="cursor-pointer h-8 w-8"
            onClick={() => setstate("")}
          />
        </Link>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link to="/">
            <div title="home" onClick={() => setstate("")}>
              <HeaderIcon active={state === ""} Icon={HomeIcon} />
            </div>
          </Link>
          <Link to="/projects">
            <div title="projects" onClick={() => setstate("projects")}>
              <HeaderIcon active={state === "projects"} Icon={LightBulbIcon} />
            </div>
          </Link>
          <Link to="/users">
            <div title="users" onClick={() => setstate("users")}>
              <HeaderIcon active={state === "users"} Icon={UserGroupIcon} />
            </div>
          </Link>
          {user.authenticated && (
            <Link to="/notifications">
              <div
                title="notifications"
                onClick={() => setstate("notifications")}
              >
                <HeaderIcon
                  active={state === "notifications"}
                  Icon={BellIcon}
                />
              </div>
            </Link>
          )}
          <Link to="/aboutUs">
            <div title="About Us" onClick={() => setstate("aboutUs")}>
              <HeaderIcon
                active={state === "aboutUs"}
                Icon={InformationCircleIcon}
              />
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

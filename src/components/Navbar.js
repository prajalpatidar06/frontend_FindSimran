import React, { Component} from "react";
import HeaderIcon from "./HeaderIcon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import {
  HomeIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  SearchIcon,
  ChatIcon,
  BellIcon,
  InformationCircleIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

class Navbar extends Component{
  LogoutUser = () =>{
    this.props.logoutUser()
  }
  render(){
    const {user} = this.props
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
            <Link to="/"><HeaderIcon active Icon={HomeIcon} /></Link>
            <HeaderIcon Icon={ChatIcon} />
            <HeaderIcon Icon={BellIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={InformationCircleIcon} />
            {user.authenticated ? <div onClick={this.LogoutUser}><HeaderIcon Icon={LogoutIcon} /></div> : <Link to="/login"><HeaderIcon Icon={LoginIcon} /></Link>}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps , {logoutUser})(Navbar);

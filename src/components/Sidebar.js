import React, { Component } from "react";
import SidebarRow from "./SidebarRow";
import {connect} from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userAction";

import {
  AnnotationIcon,
  BookOpenIcon,
  CalendarIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

import {
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";


export class Sidebar extends Component {
  Logoutfunc = ()=>{
    this.props.logoutUser()
  }
  render() {
    const {user:{credentials:{handle,imageUrl},authenticated}} = this.props
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
          {authenticated && (<SidebarRow src={imageUrl} title={handle} />)}
          {authenticated && (<SidebarRow Icon={AnnotationIcon} title="Post Scream" />)}
          {authenticated && (<SidebarRow Icon={CollectionIcon} title="My Screams" />)}
          <SidebarRow Icon={CalendarIcon} title="Upcoming Contest" />
          <SidebarRow Icon={BookOpenIcon} title="Study Resource" />
          {authenticated ? (<div onClick={this.Logoutfunc} ><SidebarRow Icon={LogoutIcon} id="logout" title="Logout" /></div>) : (<Link to="/login"><SidebarRow Icon={LoginIcon} title="Login"/></Link>)}
        </div>
    );
    
  }
}

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps,{logoutUser})(Sidebar);

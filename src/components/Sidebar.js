import React, { Component } from "react";
import SidebarRow from "./SidebarRow";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userAction";

import {
  AcademicCapIcon,
  AnnotationIcon,
  BookOpenIcon,
  CalendarIcon,
  CodeIcon,
  CollectionIcon,
  DocumentAddIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

export class Sidebar extends Component {
  constructor(){
    super()
    this.state = {
      activeTab: window.location.href.split('/')[window.location.href.split('/').length - 1]
    }
  }
  Logoutfunc = () => {
    this.props.logoutUser();
  };
  redirectUrl = (urlParams) => {
    let actionUrl = window.location.href;
    console.log(urlParams);
    if (actionUrl.split("/")[actionUrl.split("/").length - 1] !== "") {
      actionUrl.split("/")[actionUrl.split("/").length - 1] = urlParams;
    } else {
      actionUrl += urlParams;
    }
    window.location.href = actionUrl;
  };
  render() {
    const {
      user: {
        credentials: { handle, imageUrl },
        authenticated,
      },
    } = this.props;
    return (
      <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        {authenticated && (
          <div onClick={() => this.redirectUrl("profile")} title="profile">
            <Link to="/profile"><SidebarRow src={imageUrl} title={handle} /></Link>
          </div>
        )}
        <Link to="/" title="all screams" onClick={() =>(this.setState({activeTab: ""}))}>
          <SidebarRow Icon={CollectionIcon} active = {this.state.activeTab === ""} title="All Screams" />
        </Link>
        {authenticated && (
          <Link to="/postScream" title="post scream" onClick={() =>(this.setState({activeTab: "postScream"}))}>
            <SidebarRow Icon={DocumentAddIcon} active = {this.state.activeTab === "postScream"} title="Post Scream" />
          </Link>
        )}
        {authenticated && (
          <Link to="/authorScreams" title="your screams" onClick={() =>(this.setState({activeTab: "authorScreams"}))} >
            <SidebarRow Icon={AnnotationIcon} active = {this.state.activeTab === "authorScreams"} title="My Screams" />
          </Link>
        )}
        <Link to="/upcomingContest" title="contest watcher" onClick={() =>(this.setState({activeTab: "upcomingContest"}))}>
          <SidebarRow Icon={CalendarIcon} active = {this.state.activeTab === "upcomingContest"} title="Upcoming Contest" />
        </Link>
        <Link to="/careerOpportunities" title="career" onClick={() =>(this.setState({activeTab: "careerOpportunities"}))}>
          <SidebarRow Icon={AcademicCapIcon} active = {this.state.activeTab === "careerOpportunities"} title="Career Opportunities" />
        </Link>
        <Link to="/studyResources" title="study resources" onClick={() =>(this.setState({activeTab: "studyResources"}))}>
          <SidebarRow Icon={BookOpenIcon} active = {this.state.activeTab === "studyResources"} title="Study Resources" />
        </Link>
        <Link to="/codingProblems" title="coding problems" onClick={() =>(this.setState({activeTab: "codingProblems"}))}>
          <SidebarRow Icon={CodeIcon} active = {this.state.activeTab === "codingProblems"} title="Coding Problems" />
        </Link>
        {authenticated ? (
          <div onClick={this.Logoutfunc} title="logout">
            <SidebarRow Icon={LogoutIcon} title="Logout" />
          </div>
        ) : (
          <div onClick={() => (this.redirectUrl("login"))} title="login">
            <Link to="/login"><SidebarRow Icon={LoginIcon} title="Login" /></Link>
          </div>
        )}
      </div>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Sidebar);

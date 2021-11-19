import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ExternalLinkIcon , XIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import VoteScreamCard from "./VoteScreamCard";

export class Scream extends Component {
  constructor() {
    super();
    this.state = {
      vote: false,
    };
  }
  userProfile = (handle) => {
    window.location.href =
      this.props.user.authenticated &&
      this.props.user.credentials.handle === handle
        ? "profile"
        : `user/${handle}`;
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      scream: {
        screamId,
        body,
        title,
        url,
        handle,
        userImage,
        createdAt,
        requiredSkills,
      },
    } = this.props;
    const FormateDate = (createdAt) => {
      return (
        parseInt(dayjs().format("YY")) >
          parseInt(dayjs(createdAt).format("YY")) ||
        parseInt(dayjs().format("MM")) >
          parseInt(dayjs(createdAt).format("MM")) ||
        parseInt(dayjs().format("DD")) -
          parseInt(dayjs(createdAt).format("DD")) >=
          1
      );
    };

    const handleVote = (event) => {
      this.props.user.authenticated
        ? this.setState({ vote: true })
        : (window.location.href = "login");
    };

    return (
      <div className="flex flex-col">
        <div className="relative p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full cursor-pointer"
              src={userImage}
              alt="Profile"
              width="40"
              height="40"
              layout="fixed"
              onClick={() => this.userProfile(handle)}
            />
            <div>
              <p
                className="font-medium cursor-pointer"
                onClick={() => this.userProfile(handle)}
              >
                {handle}
              </p>
              <p className="text-xs text-gray-400">
                {FormateDate(createdAt)
                  ? dayjs(createdAt).format("DD/MM/YY")
                  : dayjs(createdAt).fromNow()}
              </p>
            </div>
            {url !== "" && (
              <a
                className="pt-3 text-green-400 absolute right-2 top-1"
                href={url}
                target="_blank"
                rel="noreferrer"
                title="link"
              >
                <ExternalLinkIcon width={26} height={26} />
              </a>
            )}
          </div>
          <p className="pt-4 font-medium text-2xl text-blue-600">{title}</p>
          <div className="pt-3">
            {body.length > 0 && body.map((para) => <p>{para}</p>)}
          </div>
          {requiredSkills.length > 0 && (
            <p className="mx-2 mt-2 break-words break-normal md:break-all border-t">
              {requiredSkills.map((element) => (
                <span className="mx-2 text-red-500">
                  {element.charAt(0).toUpperCase() + element.slice(1)}
                </span>
              ))}
            </p>
          )}
          <div className="my-3 py-3 relative">
            {this.state.vote ? (
              <div>
              <XIcon width={23} height={23} className="text-red-600 cursor-pointer absolute right-2" onClick={()=> this.setState({vote:false})} />
              <VoteScreamCard ScreamId={screamId} />
              </div>
            ) : (
              <button
                onClick={handleVote}
                className="bg-blue-500 sm:bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0"
              >
                Lets Collab
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Scream);

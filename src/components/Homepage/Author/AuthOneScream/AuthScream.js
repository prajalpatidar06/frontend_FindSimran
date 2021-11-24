import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthScream } from "../../../../redux/actions/dataAction";
import ScreamCard from "./ScreamCard";
import VoteCard from "./VoteCard";

export class AuthScream extends Component {
  componentDidMount = () => {
        this.props.getAuthScream(
          this.props.user.credentials.handle,
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ]
        )
    }
  render(){
    dayjs.extend(relativeTime);
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
    const {votes} = this.props.scream
    return (
      <div>
        <ScreamCard scream={this.props.scream} FormateDate={FormateDate} />
        <div className="flex flex-col">
          <h1 className="mx-auto text-blue-500 text-2xl">Votes</h1>
          {Array.isArray(votes) && votes.map(vote => (
            <VoteCard vote={vote} FormateDate={FormateDate}/>
          ))}
        </div>
      </div>
    );
    }
  }

AuthScream.propTypes = {
  getAuthScream: PropTypes.func.isRequired,
  scream: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  scream: state.data.scream,
});

export default connect(mapStateToProps, { getAuthScream })(AuthScream);

import React, { Component } from "react";
import Scream from "./Scream";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getAllScreams } from "../redux/actions/dataAction";

export class Screams extends Component {
  componentDidMount() {
   this.props.getAllScreams() 
  }
  render() {
    const {screams , loading} = this.props.data
    let recentScreamsMarkup = !loading ?
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
      : (<p>Loading</p>)
    return <>{recentScreamsMarkup}</>
  }
}

Screams.propTypes = {
  getAllScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps ,{getAllScreams} )(Screams);

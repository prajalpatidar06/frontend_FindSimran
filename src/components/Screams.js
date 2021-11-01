import React, { Component } from "react";
import Scream from "./Scream";
import axios from "axios";

export class Screams extends Component {
  state = {
    screams: [],
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let recentScreamsMarkup = ((this.state.screams.length > 0) ?
      this.state.screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
      : (<p>Loading</p>)
    )
    return <>{recentScreamsMarkup}</>
  }
}

export default Screams;

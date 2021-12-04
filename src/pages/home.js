import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components stuff
import Sidebar from "../components/Homepage/Sidebar";
import Screams from "../components/Homepage/Public/Screams";
import UpcomingContest from "../components/Homepage/Static/UpcomingContest/UpcomingContest";
import StudyResources from "../components/Homepage/Static/StudyResources/StudyResources";
import CodingProblems from "../components/Homepage/Static/CodingProblems/CodingProblems";
import PostScream from "../components/Homepage/Author/PostScream";
import UpdateScream from "../components/Homepage/Author/UpdateScream";
import AuthorScreams from "../components/Homepage/Author/AuthorScreams";
import AuthorVotes from "../components/Homepage/Author/AuthorVotes";
import AuthScream from "../components/Homepage/Author/AuthOneScream/AuthScream";
import IsLoginRoute from "../utils/IsLoginRoute";
import { XIcon } from "@heroicons/react/solid";

// Redux Stuff
import { ClearAlertsMessages } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class home extends Component {
  CloseAlerts = () => {
    this.props.ClearAlertsMessages();
  };
  render() {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <main className="flex">
          <Router>
            <Sidebar />
            <Switch>
              <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
                <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                  {this.props.alert && (
                    <div
                      className="flex relative px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg mb-4"
                      role="alert"
                    >
                      <p className="mr-4">{this.props.alert}</p>
                      <XIcon
                        width={21}
                        height={21}
                        className="absolute right-2 cursor-pointer"
                        onClick={() => this.CloseAlerts()}
                      />
                    </div>
                  )}
                  <Route exact path="/" component={Screams} />
                  <Route
                    exact
                    path="/upcomingContest"
                    component={UpcomingContest}
                  />
                  <Route
                    exact
                    path="/studyResources"
                    component={StudyResources}
                  />
                  <Route
                    exact
                    path="/codingProblems"
                    component={CodingProblems}
                  />
                  <IsLoginRoute
                    exact
                    path="/postScream"
                    component={PostScream}
                  />
                  <IsLoginRoute
                    exact
                    path="/authorScreams"
                    component={AuthorScreams}
                  />
                  <IsLoginRoute
                    exact
                    path="/authorVotes"
                    component={AuthorVotes}
                  />
                  <IsLoginRoute
                    exact
                    path="/updateScream"
                    component={UpdateScream}
                  />
                  <IsLoginRoute
                    exact
                    path="/scream/:screamId"
                    component={AuthScream}
                  />
                </div>
              </div>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

home.propTypes = {
  alert: PropTypes.object.isRequired,
  ClearAlertsMessages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  alert: state.data.alert,
});

export default connect(mapStateToProps, { ClearAlertsMessages })(home);

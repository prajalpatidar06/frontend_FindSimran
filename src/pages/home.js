import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components stuff
import Sidebar from "../components/Homepage/Sidebar";
import Screams from "../components/Homepage/Public/Screams";
import UpcomingContest from "../components/Homepage/Static/UpcomingContest/UpcomingContest";
import StudyResources from "../components/Homepage/Static/StudyResources";
import codingProblems from "../components/Homepage/Static/codingProblems";
import PostScream from "../components/Homepage/Author/PostScream";
import UpdateScream from "../components/Homepage/Author/UpdateScream";
import AuthorScreams from "../components/Homepage/Author/AuthorScreams";
import AuthorVotes from "../components/Homepage/Author/AuthorVotes";
import AuthScream from "../components/Homepage/Author/AuthOneScream/AuthScream";
import IsLoginRoute from "../utils/IsLoginRoute";

export class home extends Component {
  render() {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <main className="flex">
          <Router>
            <Sidebar />
            <Switch>
              <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
                <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
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
                    component={codingProblems}
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

export default home;

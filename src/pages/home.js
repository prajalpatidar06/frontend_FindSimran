import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components stuff
import Sidebar from "../components/Homepage/Sidebar";
import Screams from "../components/Homepage/Public/Screams";
import UpcomingContest from "../components/Homepage/Static/UpcomingContest";
import CareerOpportunities from "../components/Homepage/Static/CareerOpportunities";
import StudyResources from "../components/Homepage/Static/StudyResources";
import codingProblems from "../components/Homepage/Static/codingProblems";
import PostScream from "../components/Homepage/Author/PostScream";
import AuthorScreams from "../components/Homepage/Author/AuthorScreams";

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
                    path="/careerOpportunities"
                    component={CareerOpportunities}
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
                  <Route exact path="/postScream" component={PostScream} />
                  <Route
                    exact
                    path="/authorScreams"
                    component={AuthorScreams}
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

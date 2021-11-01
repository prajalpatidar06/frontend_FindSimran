import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components stuff
import Sidebar from "../components/Sidebar";
import Screams from "../components/Screams";
import UpcomingContest from "../components/UpcomingContest";
import CareerOpportunities from "../components/CareerOpportunities";
import StudyResources from "../components/StudyResources";
import codingProblems from "../components/codingProblems";
import PostScream from "../components/PostScream";
import AuthorScreams from "../components/AuthorScreams";

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
                  <Route exact path="/upcomingContest" component={UpcomingContest} />
                  <Route exact path="/careerOpportunities" component={CareerOpportunities} />
                  <Route exact path="/studyResources" component={StudyResources} />
                  <Route exact path="/codingProblems" component={codingProblems} />
                  <Route exact path="/postScream" component={PostScream} />
                  <Route exact path="/authorScreams" component={AuthorScreams} />
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

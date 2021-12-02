import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProjects } from "../redux/actions/dataAction";
import ProjectCard from "../components/Projects/ProjectCard";

export class projects extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    const { projects, loading } = this.props.data;

    let finalData = !loading
      ? projects.filter((val) => {
          if (this.state.search.trim() === "") {
            return val;
          } else if (
            val.techUsed.length > 0 &&
            val.techUsed
              .toString()
              .toLowerCase()
              .includes(this.state.search.toLowerCase())
          ) {
            return val;
          }
        })
      : [];

    let recentProjectsMarkup = !loading ? (
      finalData.length > 0 ? (
        finalData.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))
      ) : (
        <p className="text-xl font-medium text-center mt-20">
          No Project Found
        </p>
      )
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );

    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <div className="bg-white shadow-sm">
          <div className="flex justify-center">
            <input
              title="search Project"
              type="text"
              className="p-2 sm:text-sm border-b-2 border-blue-300  font-medium focus:outline-none"
              placeholder="Search for language"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
            />
          </div>
        </div>
        <div className="flex-grow h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide">
          <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            {recentProjectsMarkup}
          </div>
        </div>
      </div>
    );
  }
}

projects.propTypes = {
  data: PropTypes.object.isRequired,
  getAllProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getAllProjects })(projects);

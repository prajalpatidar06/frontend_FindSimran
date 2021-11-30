import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProjects } from "../redux/actions/dataAction";
import ProjectCard from "../components/Projects/ProjectCard";

export class projects extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    const { projects, loading } = this.props.data;
    let recentProjectsMarkup = !loading ? (
      projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))
      ) : (
        <p className="text-xl font-medium text-center mt-20">No Project Found</p>
      )
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );

    return (
      <div className="bg-gray-100 h-screen">
        <div className="flex-grow pb-5 pt-5 overflow-y-auto scrollbar-hide">
          <p className="text-center font-bold text-2xl text-blue-500">
            Projects
          </p>
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

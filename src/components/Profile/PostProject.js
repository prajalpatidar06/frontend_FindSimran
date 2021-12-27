import React, { Component } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

export class PostProject extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      url: "",
      requiredSkills: [],
      errors: {},
    };
    this.inputSkill = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const answer = window.confirm("Add New Project!");
    if (answer) {
      const ProjectData = {
        title: this.state.title,
        body: this.state.body.trim().split("\n"),
        url: this.state.url,
        techUsed: this.state.requiredSkills,
      };
      if (this.state.body.trim() === "") {
        this.setState({ errors: { body: "must not be empty" } });
        return;
      } else {
        this.props.postProject(ProjectData);
      }
    }
  };

  handleChange = (event) => {
    if (event.target.name === "body" && event.target.value.length >= 1000) {
      this.setState({
        errors: { body: "max char length is not more than 1000" },
      });
    } else if (
      event.target.name === "title" &&
      event.target.value.length >= 100
    ) {
      this.setState({
        errors: { title: "max char length is not more than 100" },
      });
    } else if (event.target.name === "url" && event.target.value.length >= 150) {
      this.setState({
        errors: { url: "max char length is not more than 150" },
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        errors: {},
      });
    }
  };

  handleArrayChange = (ref, stateName) => {
    if (ref.current.value.length > 13) {
      this.setState({
        errors: { requiredSkills: "max char length is not more than 13" },
      });
    } else if (ref.current.value !== "") {
      this.setState({
        requiredSkills: [...stateName, ref.current.value],
        errors: {},
      });
      ref.current.value = "";
    }
  };

  handleRemoveFromRequiredSkill = (skill) => {
    let filteredArray = this.state.requiredSkills.filter(
      (item) => item !== skill.skill
    );
    this.setState({ requiredSkills: filteredArray });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="mt-4">
                  <textarea
                    title="Title"
                    id="title"
                    name="title"
                    rows="3"
                    className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md"
                    placeholder="Project Title"
                    onChange={this.handleChange}
                    value={this.state.title}
                  ></textarea>
                  {errors.title && (
                    <p className="text-red-500 text-xs italic">
                      {errors.title}
                    </p>
                  )}
                </div>
                <div className="mt-4 rounded-md shadow-sm">
                  <input
                    title="Url"
                    type="text"
                    name="url"
                    id="url"
                    className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-blue-300"
                    placeholder="Url"
                    onChange={this.handleChange}
                    value={this.state.url}
                  />
                  {errors.url && (
                    <p className="text-red-500 text-xs italic">{errors.url}</p>
                  )}
                </div>

                <div className="mt-4">
                  <textarea
                    title="Body"
                    id="body"
                    name="body"
                    rows="5"
                    className={`shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md ${
                      errors.body && "border-red-500"
                    } `}
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={this.state.body}
                  ></textarea>
                  {errors.body && (
                    <p className="text-red-500 text-xs italic">{errors.body}</p>
                  )}
                </div>

                <div className="mt-4">
                  <div className="sm:flex">
                    <p className="text-blue-400 p-2">Tech Used :</p>
                    <div className="flex items-center">
                      <input
                        title="Add Skill"
                        type="text"
                        name="skill"
                        className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-blue-300"
                        placeholder="Add Tech"
                        ref={this.inputSkill}
                      />
                      <PlusCircleIcon
                        className="mx-1 h-9 w-9 cursor-pointer hover:text-blue-500"
                        onClick={() =>
                          this.handleArrayChange(
                            this.inputSkill,
                            this.state.requiredSkills
                          )
                        }
                      />
                    </div>
                    {errors.requiredSkills && (
                      <p className="text-red-500 text-xs italic">
                        {errors.requiredSkills}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {this.state.requiredSkills.map((skill) => (
                      <p className="flex m-1 items-center rounded-2xl">
                        {skill}
                        <XCircleIcon
                          className="h-5 w-5 sm:h-7 sm:w-7 items-center cursor-pointer m-1 hover:text-red-600"
                          onClick={() =>
                            this.handleRemoveFromRequiredSkill({ skill })
                          }
                        />
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                >
                  <span>Add Project</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostProject;

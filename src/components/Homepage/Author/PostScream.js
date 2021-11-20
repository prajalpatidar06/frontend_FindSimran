import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postScream } from "../../../redux/actions/dataAction";
import { XCircleIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

export class PostScream extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const answer = window.confirm("Post scream!");
    console.log(answer)
    if (answer) {
      const ScreamData = {
        title: this.state.title,
        body: this.state.body.trim().split("\n"),
        url: this.state.url,
        requiredSkills: this.state.requiredSkills,
      };
      this.props.postScream(ScreamData, this.props.history);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleArrayChange = (ref, stateName) => {
    if (ref.current.value !== "") {
      this.setState({
        requiredSkills: [...stateName, ref.current.value],
      });
    }
    ref.current.value = "";
  };

  handleRemoveFromRequiredSkill = (skill) => {
    let filteredArray = this.state.requiredSkills.filter(
      (item) => item !== skill.skill
    );
    this.setState({ requiredSkills: filteredArray });
  };

  render() {
    const { errors } = this.state;
    const {
      UI: { loading },
    } = this.props;
    return (
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="mt-4 text-center text-blue-600 text-3xl sm:text-2xl font-bold">
                  Post Scream
                </div>
                <div className="mt-4">
                  <textarea
                    title="Title"
                    id="title"
                    name="title"
                    rows="3"
                    className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md"
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={this.state.title}
                  ></textarea>
                </div>
                <div className="mt-4 flex rounded-md shadow-sm">
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
                    placeholder="Body*"
                    onChange={this.handleChange}
                    value={this.state.body}
                  ></textarea>
                  {errors.body && (
                    <p className="text-red-500 text-xs italic">{errors.body}</p>
                  )}
                </div>

                <div className="mt-4">
                  <div className="sm:flex">
                    <p className="text-blue-400 p-2">Required Skills :</p>
                    <div className="flex items-center">
                      <input
                        title="Add Skill"
                        type="text"
                        name="skill"
                        className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-blue-300"
                        placeholder="Add Skill"
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
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {!loading && <span>Post Scream</span>}
                  {loading && (
                    <div class="flex justify-center items-center">
                      <div class="animate-spin rounded-full h-7 w-7 border-b-2 border-gray-900"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postScream })(PostScream);

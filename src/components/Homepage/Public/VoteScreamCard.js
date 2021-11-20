import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { voteScream } from "../../../redux/actions/dataAction";
import { XCircleIcon} from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

export class VoteScreamCard extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      skills: [],
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
    const answer = window.confirm("Vote scream!");
    console.log(answer);
    if (answer) {
      const VoteData = {
        comment: this.state.comment.trim().split("\n"),
        skills: this.state.skills,
      };
      this.props.voteScream(this.props.ScreamId , VoteData);
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
        skills: [...stateName, ref.current.value],
      });
    }
    ref.current.value = "";
  };

  handleRemoveFromSkill = (skill) => {
    let filteredArray = this.state.skills.filter(
      (item) => item !== skill.skill
    );
    this.setState({ skills: filteredArray });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white space-y-6">
              <div className="text-center text-2xl font-medium">
                Vote Scream
              </div>
              <div className="mt-4">
                <textarea
                  title="comment"
                  id="comment"
                  name="comment"
                  rows="3"
                  className={`shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md ${
                    errors.comment && "border-red-500"
                  } `}
                  placeholder="comment*"
                  onChange={this.handleChange}
                  value={this.state.comment}
                ></textarea>
                {errors.comment && (
                  <p className="text-red-500 text-xs italic">
                    {errors.comment}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <div className="sm:flex">
                  <p className="text-blue-400 p-2">Skills :</p>
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
                          this.state.skills
                        )
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {this.state.skills.map((skill) => (
                    <p className="flex m-1 items-center rounded-2xl">
                      {skill}
                      <XCircleIcon
                        className="h-5 w-5 sm:h-7 sm:w-7 items-center cursor-pointer m-1 hover:text-red-600"
                        onClick={() => this.handleRemoveFromSkill({ skill })}
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
                Vote Scream
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

VoteScreamCard.propTypes = {
  voteScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { voteScream })(VoteScreamCard);

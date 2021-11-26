import React, { Component } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";
import axios from "axios";

export class UpdateVoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.vote.comment.toString().split(",").join("\n"),
      skills: this.props.vote.skills,
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
    if (answer) {
      const VoteData = {
        comment: this.state.comment.trim().split("\n"),
        skills: this.state.skills,
      };
      axios
        .put(`/votes/${this.props.vote.voteId}`, VoteData)
        .then((res) => {
          window.location.href = "/authorVotes"
        })
        .catch((err) => {
          this.setState({errors:{comment:"must not be empty"}})
        });
    }
  };

  handleChange = (event) => {
    if (event.target.name === "comment" && event.target.value.length >= 500) {
      this.setState({
        errors: { comment: "max char length is not more than 500" },
      });
    } else {
      this.setState({ errors: {} });
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleArrayChange = (ref, stateName) => {
    if (ref.current.value.length > 13) {
      this.setState({
        errors: { skills: "max char length is not more than 13" },
      });
    } else if (ref.current.value !== "") {
      this.setState({ errors: {} });
      this.setState({
        skills: [...stateName, ref.current.value],
      });
      ref.current.value = "";
    }
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
                  {errors.skills && (
                  <p className="text-red-500 text-xs italic">
                    {errors.skills}
                  </p>
                )}
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
                Update Vote
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateVoteCard;

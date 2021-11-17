import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { XCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { editUserDetails } from "../redux/actions/userAction";

export class editProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.credentials.name,
      contactNumber: this.props.credentials.contact,
      gender: this.props.credentials.gender
        ? this.props.credentials.gender
        : "male",
      collage: this.props.credentials.collage,
      city: this.props.credentials.city,
      state: this.props.credentials.state,
      bio: this.props.credentials.bio,
      website: this.props.credentials.website,
      skills: this.props.credentials.skills
        ? this.props.credentials.skills
        : [],
      onlinePlateform: this.props.credentials.onlinePlateform
        ? this.props.credentials.onlinePlateform
        : {},
      projects: this.props.credentials.projects
        ? this.props.credentials.projects
        : [],
    };
    this.inputSkill = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const answer = window.confirm("Update Profile!");
    if (answer) {
      const userDetails = {
        name: this.state.name,
        contactNumber: this.state.contactNumber,
        gender: this.state.gender,
        collage: this.state.collage,
        city: this.state.city,
        state: this.state.state,
        bio: this.state.bio,
        website: this.state.website,
        skills: this.state.skills,
        onlinePlateform: this.state.onlinePlateform,
        projects: this.state.projects,
      };
      this.props.editUserDetails(userDetails);
      window.location.href = "profile"
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePlateformChange = (event) => {
    this.setState({
      onlinePlateform: {
        ...this.state.onlinePlateform,
        [event.target.name]: event.target.value,
      },
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
    return (
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <Link to="/profile"><XCircleIcon width={26} height={26} className="absolute right-5 cursor-pointer text-red-600 sm:text-black hover:text-red-600" /></Link>
                <div className="text-center text-blue-600 text-3xl sm:text-2xl font-bold">
                  Edit Profile
                </div>
                {/* Personal details */}
                <div className="mt-4 mx-2 sm:flex">
                  <div className="mt-4 mx-2">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      Name :
                    </label>
                    <input
                      type="text"
                      title="name"
                      id="name"
                      name="name"
                      className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                      placeholder="Name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </div>
                  <div className="mt-4 mx-2">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      Contact :
                    </label>
                    <input
                      type="text"
                      title="contact"
                      id="contact"
                      name="contactNumber"
                      className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                      placeholder="Phone Number"
                      onChange={this.handleChange}
                      value={this.state.contactNumber}
                    />
                  </div>
                  <div className="mt-4 mx-2 items-center">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      Website :
                    </label>
                    <input
                      title="Url"
                      type="text"
                      name="website"
                      id="website"
                      className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
                      placeholder="Url"
                      onChange={this.handleChange}
                      value={this.state.website}
                    />
                  </div>
                  <div className="mt-4 mx-2 items-center">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      Gender :
                    </label>
                    <select id="gender" onChange={this.handleSubmit}>
                      <option>{this.state.gender}</option>
                      <option>
                        {this.state.gender === "male" ? "female" : "male"}
                      </option>
                    </select>
                  </div>
                </div>
                {/* Collage  & location*/}
                <div className="mt-4 mx-2 sm:flex">
                  <div className="mt-4 mx-2 items-center">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      Collage :
                    </label>
                    <input
                      title="Collage"
                      type="text"
                      name="collage"
                      id="collage"
                      className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
                      placeholder="Collage"
                      onChange={this.handleChange}
                      value={this.state.collage}
                    />
                  </div>
                  <div className="mt-4 mx-2 items-center">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      City :
                    </label>
                    <input
                      title="City"
                      type="text"
                      name="city"
                      id="city"
                      className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
                      placeholder="City"
                      onChange={this.handleChange}
                      value={this.state.city}
                    />
                  </div>
                  <div className="mt-4 mx-2 items-center">
                    <label class="text-sm font-medium text-gray-700 mx-2">
                      State :
                    </label>
                    <input
                      title="State"
                      type="text"
                      name="state"
                      id="state"
                      className="focus:ring-blue-500 p-2 focus:border-blue-500 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
                      placeholder="State"
                      onChange={this.handleChange}
                      value={this.state.state}
                    />
                  </div>
                </div>
                {/* Bio */}
                <div className="mt-4 mx-2">
                  <label class="text-sm font-medium text-gray-700 mx-2">
                    About Us :
                  </label>
                  <textarea
                    title="bio"
                    id="bio"
                    name="bio"
                    rows="3"
                    className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md"
                    placeholder="About yourself"
                    onChange={this.handleChange}
                    value={this.state.bio}
                  ></textarea>
                </div>
                {/* online Plateform */}
                <div className="mt-4 mx-2 sm:flex">
                    <div className="mt-4 mx-2">
                      <label class="text-sm font-medium text-gray-700 mx-2">
                        Linkedin :
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                        placeholder="@username"
                        onChange={this.handlePlateformChange}
                        value={this.state.onlinePlateform['linkedin']}
                      />
                    </div>
                    <div className="mt-4 mx-2">
                      <label class="text-sm font-medium text-gray-700 mx-2">
                        Github :
                      </label>
                      <input
                        type="text"
                        name="github"
                        className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                        placeholder="@username"
                        onChange={this.handlePlateformChange}
                        value={this.state.onlinePlateform['github']}
                      />
                    </div>
                    <div className="mt-4 mx-2">
                      <label class="text-sm font-medium text-gray-700 mx-2">
                        Codechef :
                      </label>
                      <input
                        type="text"
                        name="codechef"
                        className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                        placeholder="@username"
                        onChange={this.handlePlateformChange}
                        value={this.state.onlinePlateform['codechef']}
                      />
                    </div>
                    <div className="mt-4 mx-2">
                      <label class="text-sm font-medium text-gray-700 mx-2">
                        Codeforces :
                      </label>
                      <input
                        type="text"
                        name="codeforces"
                        className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                        placeholder="@username"
                        onChange={this.handlePlateformChange}
                        value={this.state.onlinePlateform['codeforces']}
                      />
                    </div>
                    <div className="mt-4 mx-2">
                      <label class="text-sm font-medium text-gray-700 mx-2">
                        GFG :
                      </label>
                      <input
                        type="text"
                        name="gfg"
                        className="shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border-blue-300 rounded-md"
                        placeholder="@username"
                        onChange={this.handlePlateformChange}
                        value={this.state.onlinePlateform['gfg']}
                      />
                    </div>
                </div>
                {/* Skills */}
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
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 mt-1">
                    {this.state.skills.map((skill) => (
                      <p className="flex m-1 items-center rounded-2xl">
                        {skill}
                        <XCircleIcon
                          className="h-9 w-9 items-center cursor-pointer hover:text-red-600"
                          onClick={() => this.handleRemoveFromSkill({ skill })}
                        />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

editProfile.propTypes = {
  credentials: PropTypes.object.isRequired,
  editUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(editProfile);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  CameraIcon,
  LibraryIcon,
  LinkIcon,
  MailIcon,
  PencilAltIcon,
  PhoneIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";
import { uploadImage } from "../../redux/actions/userAction";
import {
  getAuthProjects,
  postProject,
  updateProject,
  deleteProject,
} from "../../redux/actions/dataAction";
import { Link } from "react-router-dom";
import AuthProjectCard from "./AuthProjectCard";
import { PostProject } from "./PostProject";
import UpdateProject from "./UpdateProject";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      tab: 1,
      card: "",
    };
  }

  componentDidMount() {
    this.props.getAuthProjects(this.props.user.credentials.handle);
  }

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  render() {
    const {
      user: {
        credentials: {
          handle,
          imageUrl,
          email,
          bio,
          gender,
          onlinePlateform,
          skills,
          website,
          name,
          collage,
          city,
          state,
          contactNumber,
        },
      },
      data: { authProjects, loading },
    } = this.props;

    const recentProjectMarkup = !loading ? (
      authProjects.map((project) =>
        this.state.card === project.projectId ? (
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6 relative">
              <XIcon width={21} height={21} className="hover:text-red-500 absolute right-2" onClick={()=> this.setState({card:""})} />
              <UpdateProject
                key={project.projectId}
                updateProject={this.props.updateProject}
                deleteProject={this.props.deleteProject}
                project={project}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="relative p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <PencilAltIcon
                  width={21}
                  height={21}
                  className="absolute right-2 top-1 hover:text-blue-500 cursor-pointer"
                  onClick={() => this.setState({ card: project.projectId })}
                />
              </div>
              <AuthProjectCard key={project.projectId} project={project} />
            </div>
          </div>
        )
      )
    ) : (
      <div className="flex justify-center fixed top-[50%] left-[50%] items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );

    return (
      <div className="">
        <div className="">
          <div
            style={{ background: "lightblue" }}
            className="flex bg-white h-[130px] sm:h-[150px] text-center relative mb-10 sm:mb-20"
          >
            <div className="flex-1 relative">
              <img
                src={imageUrl}
                alt={handle}
                className="w-48 h-42 rounded-full border-4 border-white shadow absolute top-5 left-5"
              />
              <div>
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
                />
                <CameraIcon
                  className=" absolute bottom-0 hover:text-blue-500 cursor-pointer"
                  width={25}
                  height={25}
                  type="button"
                  title="update Image"
                  onClick={this.handleEditPicture}
                />
              </div>
            </div>
            <div className="flex-1 relative p-5">
              <h3 className="text-2xl font-semibold">{handle}</h3>
              {city && (
                <h3 className="text-gray-500 font-medium">
                  {city} , {state}
                </h3>
              )}
            </div>
          </div>
          <div className="sm:flex">
            <div className="flex-1 mx-2 sm:mr-10 sm:ml-3 mt-15">
              <div className="bg-white flex-1 p-2 rounded-2xl shadow mt-2">
                <div className="mx-2 mt-2 flex text-xl font-medium relative">
                  <Link to="edit-profile">
                    <PencilAltIcon
                      width={22}
                      height={22}
                      className="absolute right-0 hover:text-blue-500 cursor-pointer"
                    />
                  </Link>
                  {name && (
                    <p className="items-center flex">
                      <UserIcon width={22} height={22} className="mx-1" />
                      {name}
                    </p>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 mt-2">
                  {contactNumber && (
                    <p className="flex items-center mx-1">
                      <PhoneIcon width={20} height={20} className="mx-1" />{" "}
                      {contactNumber}
                    </p>
                  )}
                  <p className="flex items-center mx-1">
                    <MailIcon width={20} height={20} className="mx-1" /> {email}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2">
                  {collage && (
                    <p className="flex items-center mx-1">
                      <LibraryIcon width={20} height={20} className="mx-1" />{" "}
                      {collage}
                    </p>
                  )}
                  {website && (
                    <a
                      className="flex items-center mx-1 text-green-500 hover:text-blue-500"
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkIcon width={20} height={20} className="mx-1" />{" "}
                      {website}
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 mt-5 mx-2">
                  {onlinePlateform && "linkedin" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://in.linkedin.com/in/${onlinePlateform.linkedin}`}
                      rel="noreferrer"
                      className="items-center"
                    >
                      <img
                        class="website-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>Linkedin</p>
                    </a>
                  )}

                  {onlinePlateform && "github" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://github.com/${onlinePlateform.github}`}
                      rel="noreferrer"
                      className="items-center"
                    >
                      <img
                        class="website-logo"
                        src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>GitHub</p>
                    </a>
                  )}

                  {onlinePlateform && "codechef" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://www.codechef.com/users/${onlinePlateform.codechef}`}
                      rel="noreferrer"
                      className="items-center"
                    >
                      <img
                        class="website-logo"
                        src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>Codechef</p>
                    </a>
                  )}

                  {onlinePlateform && "hackerrank" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://www.hackerrank.com/${onlinePlateform.hackerrank}`}
                      rel="noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>Hackerank</p>
                    </a>
                  )}

                  {onlinePlateform && "gfg" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://auth.geeksforgeeks.org/user/${onlinePlateform.gfg}/practice/`}
                      rel="noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/color/452/GeeksforGeeks.png"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>GFG</p>
                    </a>
                  )}

                  {onlinePlateform && "codeforces" in onlinePlateform && (
                    <a
                      target="_blank"
                      href={`https://codeforces.com/profile/${onlinePlateform.codeforces}`}
                      rel="noreferrer"
                    >
                      <img
                        src="https://apprecs.org/gp/images/app-icons/300/0b/com.SoftTechs.CodeForces.jpg"
                        alt=""
                        className="w-8 h-8"
                      />
                      <p>Codeforces</p>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex-1 mx-1 mt-2 bg-white p-2 rounded-2xl shadow">
                {bio && (
                  <div>
                    <p className="font-medium text-xl">About</p>
                    <p>{bio}</p>
                  </div>
                )}
                {skills && skills.length > 0 && (
                  <div className="px-2 mt-3">
                    <p className="font-medium text-xl">Skills</p>
                    <div className="grid grid-cols-3 sm:grid-cols-5">
                      {skills.map((skill) => (
                        <p className="mx-3 text-red-500">
                          {skill.charAt(0).toUpperCase() + skill.slice(1)}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex mb-0 list-none flex-wrap pb-4 flex-row">
                <li
                  className="m-2 last:mr-0 flex-auto text-center"
                  role="tablist"
                >
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                      this.state.tab === 1 && "text-blue-600"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ tab: 1 });
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Projects
                  </a>
                </li>
                <li
                  className="m-2 last:mr-0 flex-auto text-center"
                  role="tablist"
                >
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                      this.state.tab === 2 && "text-blue-600"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ tab: 2 });
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Add New Project
                  </a>
                </li>
              </ul>
              <div className="flex-grow h-screen mx-1 sm:mr-5 overflow-y-auto ">
                <div
                  className={this.state.tab === 1 ? "block" : "hidden"}
                  id="#link1"
                >
                  {recentProjectMarkup}
                </div>
                <div
                  className={this.state.tab === 2 ? "block" : "hidden"}
                  id="#link2"
                >
                  <PostProject postProject={this.props.postProject} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
  postProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapActionsToProps = {
  uploadImage,
  getAuthProjects,
  postProject,
  updateProject,
  deleteProject,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);

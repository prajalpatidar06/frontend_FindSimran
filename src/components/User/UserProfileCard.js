import React from "react";
import Scream from "../Homepage/Public/Scream";
import {
  LibraryIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import ProjectCard from "../Projects/ProjectCard";

function UserProfileCard({
  user: {
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
    screams,
    projects,
  },
}) {
  let recentScreamsMarkup =
    screams && screams.length > 0 ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p className="text-center mt-4 text-xl font-medium">No Screams Found</p>
    );

  let recentProjectsMarkup =
    projects && projects.length > 0 ? (
      projects.map((project) => (
        <ProjectCard key={project.projectId} project={project} />
      ))
    ) : (
      <p className="text-center mt-4 text-xl font-medium">No Project Found</p>
    );

  const [tab, setTab] = React.useState(1);

  return (
    <div className="">
      <div className="">
        <div
          style={{ background: "lightblue" }}
          className="flex bg-white h-[130px] sm:h-[150px] text-center relative"
        >
          <div className="flex-1 relative">
            <img
              src={imageUrl}
              alt={handle}
              style={{ width: "140px", height: "140px" }}
              className="rounded-full border-4 border-white shadow absolute top-5 left-5"
            />
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
          <div className="flex-1 mx-2 sm:mr-10 sm:ml-3 mt-20">
            <div className="bg-white p-2 rounded-2xl shadow">
              <div className="mx-2 mt-2 flex text-xl font-medium relative">
                {name && (
                  <p className="items-center flex">
                    {gender === "male" && <span classNam="mr-2">👦</span>}
                    {gender === "female" && <span className="mr-2">👧</span>}
                    {name}
                  </p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 grid-gap-2 mt-2">
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
            <div className="bg-white px-4 py-2 rounded-2xl shadow mt-2">
              {bio && (
                <div>
                  <p className="font-medium text-xl">About</p>
                  <p className="mx-2">{bio}</p>
                </div>
              )}
              {skills && skills.length > 0 && (
                <div className="mt-3">
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
          <div className="flex-1 pt-6">
            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li
                className="m-2 last:mr-0 flex-auto text-center"
                role="tablist"
              >
                <a
                  className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                    tab === 1 && "text-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Screams
                </a>
              </li>
              <li
                className="m-2 last:mr-0 flex-auto text-center"
                role="tablist"
              >
                <a
                  className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                    tab === 2 && "text-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Projects
                </a>
              </li>
            </ul>
            <div className="flex-grow h-screen mx-1 sm:mr-5 overflow-y-auto ">
              <div className={tab === 1 ? "block" : "hidden"} id="#link1">
                {recentScreamsMarkup}
              </div>
              <div className={tab === 2 ? "block" : "hidden"} id="#link2">
                {recentProjectsMarkup}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;

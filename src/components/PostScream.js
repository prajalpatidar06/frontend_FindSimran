import React, { Component } from "react";

export class PostScream extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="mt-4">
                  <textarea
                    title="Title"
                    id="about"
                    name="about"
                    rows="3"
                    className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Title"
                  ></textarea>
                </div>
                <div className="mt-4 flex rounded-md shadow-sm">
                  <input
                    title="Url"
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="focus:ring-indigo-500 p-2 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Url"
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    title="Body"
                    id="about"
                    name="about"
                    rows="5"
                    className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Body"
                  ></textarea>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post Scream
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostScream;

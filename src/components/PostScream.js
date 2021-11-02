import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { postScream } from "../redux/actions/dataAction";


export class PostScream extends Component {
  constructor(){
    super();
    this.state = {
      title:"",
      body:"",
      url:"",
      requiredSkills:[],
      errors:{}
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.state({errors: nextProps.UI.errors})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const ScreamData = {
      title: this.state.title,
      body: this.state.body,
      url: this.state.url,
      requiredSkills: this.state.requiredSkills
    }
    this.props.postScream(ScreamData , this.props.history)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    })
  }

  render() {
    const { errors } = this.state;
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
                    className={`shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-blue-300 rounded-md ${errors.body ? "border-red-500" : true} `}
                    placeholder="Body*"
                    onChange={this.handleChange}
                    value={this.state.body}
                  ></textarea>
                  {errors.body && (<p className="text-red-500 text-xs italic">{errors.body}</p>)}
                </div>

                <div className="mt-4">
                  <span className="text-blue-400">Required Skills: </span>
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

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  UI: state.UI
})

export default connect(mapStateToProps , {postScream})(PostScream);

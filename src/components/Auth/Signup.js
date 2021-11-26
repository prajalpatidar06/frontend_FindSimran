import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.password.length < 6){
      this.setState({errors:{password:"password length must be of 6-15"}})
    }
    else{
      const userData = {
        email: this.state.email,
        handle: this.state.handle,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };
      this.props.signupUser(userData, this.props.history);
    }
  };

  handleChange = (event) => {
    if(event.target.name === "handle" && event.target.value.length > 31){
      this.setState({errors:{handle:"max char length is not more than 30"}})
    }
    else if(event.target.name === "handle" && event.target.value[event.target.value.length -1] === ' '){
      this.setState({errors:{handle:"username does not contain space"}})
    }
    else{
      this.setState({
        [event.target.name]: event.target.value,
        errors:{}
      });
    }
  };
  render() {
    const {
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.handle ? "border-red-500" : true
              }`}
              id="handle"
              type="text"
              name="handle"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.handle}
            />
            {errors.handle && (
              <p className="text-red-500 text-xs italic">{errors.handle}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : true
              }`}
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : true
              } `}
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
            <input
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.ConfirmPassword ? "border-red-500" : true
              } `}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-xs my-2">{errors.general}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {!loading && <span>Create Account</span>}
              {loading && (
                <div class="flex justify-center items-center">
                  <div class="animate-spin rounded-full h-7 w-7 border-b-2 border-gray-900"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

Signup.prototypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);

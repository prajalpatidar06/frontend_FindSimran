import React from "react";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SignInWithGoogle } from "../redux/actions/userAction";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-blue-500">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Login
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-blue-500">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Signup
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Login />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function login({ SignInWithGoogle, loading }) {
  return (
    <>
       {loading &&(
        <div className="flex justify-center fixed top-[50%] left-[50%] items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
        </div>
      )}
      <button
        className="flex bg-blue-300 hover:bg-blue-700 mx-auto hover:text-white my-7 py-2 px-4 rounded focus:outline-none"
        onClick={() => SignInWithGoogle()}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt="google"
          className="w-8 h-8"
        />
        <p className="font-bold mx-2">Sign In with Google</p>
      </button>
      <p className="my-5 text-center font-medium text-xl">or</p>
      <Tabs />
    </>
  );
}

login.propTypes = {
  SignInWithGoogle: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.UI.loading,
});

export default connect(mapStateToProps, { SignInWithGoogle })(login);

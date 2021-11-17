import React from "react";
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'

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
                onClick={e => {
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
                onClick={e => {
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

export default function login() {
  return (
    <>
       <Tabs />
    </>
  );
}
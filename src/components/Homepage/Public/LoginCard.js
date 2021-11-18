import React from "react";

function LoginCard() {
  return (
    <div className="flex flex-col bg-white mt-5 rounded-t-2xl shadow-sm">
      <div className="my-3 py-3 text-center">
        <button onClick={()=>(window.location.href="login")}  className="bg-blue-500 sm:bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2">
          Login
        </button>
        <button onClick={()=>(window.location.href="login")} className="bg-blue-500 sm:bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2">
          SignUp
        </button>
      </div>
    </div>
  );
}

export default LoginCard;

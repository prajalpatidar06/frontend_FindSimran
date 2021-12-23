import React from "react";

function LoginCard() {
  return (
    <div className="flex flex-col bg-white mt-5 rounded-2xl shadow-sm">
      <div className="my-3 py-3 text-center font-medium">
        You are not Logged In. Do you want to  
        <button onClick={()=> window.location.href = "login"} className="text-blue-500 font-medium mx-1">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginCard;

import React from "react";

function SidebarRow({ src, Icon, active, title, expand }) {
  return (
    <div
      className={`flex p-2 items-center space-x-1 ${
        !active && "hover:bg-gray-200"
      } rounded-xl cursor-pointer ${active && "bg-blue-300"}`}
    >
      {src && (
        <img
          className="rounded-full cursor-pointer my-2"
          src={src}
          alt="Profile"
          style={{ width: "35px", height: "35px" }}
          layout="fixed"
        />
      )}
      <div className="p-2">{Icon && <Icon className="h-5 sm:h-7 text-blue-500" />}</div>
      <p
        className={`${
          !expand && "hidden"
        } sm:inline-flex z-10  sm:font-small delay-100`}
        title={title}
      >
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;

import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOneGroup, sendMessage } from "../../redux/actions/chatAction";
import "./Messages.css";
import { FingerPrintIcon } from "@heroicons/react/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function Messages({ chat: { group }, getOneGroup, sendMessage }) {
  dayjs.extend(relativeTime);
  const location = useLocation();
  React.useEffect(() => {
    const query =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    if (query !== "chats") {
      getOneGroup(query);
    }
  }, [location]);

  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(group.groupId , message);
    setMessage("");
  };

  const FormateDate = (createdAt) => {
    return (
      parseInt(dayjs().format("YY")) >
        parseInt(dayjs(createdAt).format("YY")) ||
      parseInt(dayjs().format("MM")) >
        parseInt(dayjs(createdAt).format("MM")) ||
      parseInt(dayjs().format("DD")) -
        parseInt(dayjs(createdAt).format("DD")) >=
        1
    );
  };

  return (
    <div>
      <div className="relative p-5 bg-white shadow-sm">
        <p className="text-xl text-blue-500 font-medium">{group.groupName}</p>
      </div>
      <div>
        <div className="manageDisplay pt-6 overflow-y-auto scrollbar-hide">
          {group.messages &&
            group.messages.map((message) => (
              <div className="block">
                {localStorage.getItem("handle") === message.handle ? (
                  <div className="flex">
                    <div className="flex-1"></div>
                    <div style={{ width: "50%" }}>
                      <p className="text-gray-500 text-sm mx-2">you</p>
                      <p className="shadow-sm bg-white rounded-l-2xl p-2">
                        {message.message}
                      </p>
                      <p className="text-gray-500 text-xs mx-2">
                        {FormateDate(message.createdAt)
                          ? dayjs(message.createdAt).format("DD/MM/YY")
                          : dayjs(message.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ width: "50%" }} className="block">
                    <p className="text-gray-500 text-sm">{message.handle}</p>
                    <p className="shadow-sm bg-white rounded-r-2xl p-2">
                      {message.message}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {FormateDate(message.createdAt)
                        ? dayjs(message.createdAt).format("DD/MM/YY")
                        : dayjs(message.createdAt).fromNow()}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="rounded-t-2xl shadow-sm bg-white p-2">
          <form
            className="flex items-center"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              title="message"
              type="text"
              name="message"
              className="p-2 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
              placeholder="type message..."
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            <FingerPrintIcon
              width={23}
              height={23}
              className="mx-2 text-blue-500 cursor-pointer"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
  getOneGroup: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps, { getOneGroup, sendMessage })(Messages);

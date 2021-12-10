import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {PaperAirplaneIcon} from '@heroicons/react/solid'
import "./Feed.css"

function Feed({ sendMessage, group }) {
  dayjs.extend(relativeTime);
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(group.groupId, message);
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

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [group.messages]);

  return (
    <div>
      <div className="manageMessageDisplay pt-6 overflow-y-auto scrollbar-hide">
        {group.messages &&
          group.messages.map((message) => (
            <div className="block my-2">
              {localStorage.getItem("handle") === message.handle ? (
                <div className="flex mt-2">
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
                <div style={{ width: "50%" }} className="block mt-2">
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
        <div ref={messagesEndRef} />
      </div>
      <div className="rounded-t-2xl shadow-sm bg-white p-2">
        <form className="flex items-center" noValidate onSubmit={handleSubmit}>
          <input
            title="message"
            type="text"
            name="message"
            className="p-2 flex-1 rounded-none rounded-r-md sm:text-sm border-blue-300"
            placeholder="type message..."
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
          <PaperAirplaneIcon
            width={23}
            height={23}
            className="mx-2 text-blue-500 cursor-pointer"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Feed;

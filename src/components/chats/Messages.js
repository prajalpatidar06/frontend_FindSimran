import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getOneGroup,
  sendMessage,
  editGroupName,
  removeGroupMember,
  leaveFromGroup,
} from "../../redux/actions/chatAction";
import { ArrowLeftIcon, DotsVerticalIcon } from "@heroicons/react/solid";

import { Link } from "react-router-dom";
import Feed from "./Feed";
import GroupMembers from "./GroupMembers";

function Messages({
  chat: { group },
  getOneGroup,
  sendMessage,
  editGroupName,
  removeGroupMember,
  leaveFromGroup
}) {
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

  const [groupInfo, setGroupInfo] = React.useState(false);

  return (
    <div className="flex">
      <div className={`flex-1 ${groupInfo && "hidden"} sm:inline`}>
        <div className="flex p-5 bg-white shadow-sm items-center">
          <div className="flex flex-1">
            <Link to="/chats">
              <ArrowLeftIcon
                width={23}
                height={23}
                className="cursor-pointer"
              />
            </Link>
            <p className="text-xl text-blue-500 font-medium mx-2">
              {group.groupName}
            </p>
          </div>
          <DotsVerticalIcon
            width={23}
            height={23}
            className="cursor-pointer"
            onClick={() => setGroupInfo(1 ^ groupInfo)}
          />
        </div>
        <Feed sendMessage={sendMessage} group={group} />
      </div>
      <div className={`${!groupInfo && "hidden"}`}>
        <div className="sm:w-60 mx-2 mt-4">
          <ArrowLeftIcon
            width={23}
            height={23}
            className="cursor-pointer"
            onClick={() => setGroupInfo(false)}
          />
          <GroupMembers group={group} editGroupName={editGroupName} removeGroupMember={removeGroupMember} leaveFromGroup={leaveFromGroup} />
        </div>
      </div>
    </div>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
  getOneGroup: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  editGroupName: PropTypes.func.isRequired,
  removeGroupMember: PropTypes.func.isRequired,
  leaveFromGroup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps, {
  getOneGroup,
  sendMessage,
  editGroupName,
  removeGroupMember,
  leaveFromGroup
})(Messages);

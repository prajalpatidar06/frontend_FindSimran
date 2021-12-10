import React from "react";
import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import "./GroupMembers.css";

function GroupMembers({ group, editGroupName , removeGroupMember , leaveFromGroup }) {
  const [name, setName] = React.useState(group.groupName);

  const handleSubmit = (event) => {
    event.preventDefault();

    editGroupName(group.groupId, { groupName: name });
  };

  const handleLeave = () =>{
    const answer = window.confirm("do you want to leave group?")
    if(answer){
        leaveFromGroup(group.groupId)
    }
  }

  const handleRemove = (member) =>{
    const answer = window.confirm(`do you want to remove ${member} from group?`)
    if(answer){
        removeGroupMember(group.groupId , {removeMember: member})
    }
  }

  return (
    <div className="flex flex-col mt-2">
      {group.admin === localStorage.getItem("handle") ? (
        <div className="mx-auto rounded-t-2xl shadow-sm p-2">
          <p className="font-medium">edit Group Name</p>
          <form
            className="flex items-center bg-white mt-2"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              title="message"
              type="text"
              name="message"
              className="p-2 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-blue-300"
              placeholder="edit Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <RefreshIcon
              width={23}
              height={23}
              className="mx-2 text-blue-500 cursor-pointer"
              onClick={handleSubmit}
            />
          </form>
        </div>
      ) : (
        <p className="mx-auto text-xl text-blue-500 font-bold">
          {group.groupName}
        </p>
      )}
      <div className="mt-4 mx-auto overflow-hidden">
        <p className="text-center text-blue-500 font-medium ">Members</p>
        <div className="overflow-y-auto scrollbar-hide manageMemberDisplay">
          {group.members &&
            group.members.map((member) => (
              <>
                {group.admin === localStorage.getItem("handle") ? (
                  <p className="mt-2 mx-2 flex items-center">
                    {member}
                    {member === group.admin ? (
                      <span className="text-red-500 text-xs mx-2">admin</span>
                    ) : <TrashIcon width={18} height={18} className="mx-2 text-red-500 cursor-pointer" onClick={()=>handleRemove(member)} />}
                  </p>
                ) : (
                  <p className="mt-2 mx-2">
                    {member}
                    {member === group.admin && (
                      <span className="text-red-500 text-xs mx-2">admin</span>
                    )}
                  </p>
                )}
              </>
            ))}
        </div>
      </div>
      <button className="flex bg-red-500 hover:bg-red-700 mx-auto text-white my-7 py-2 px-4 rounded focus:outline-none" onClick={()=>handleLeave()}>
        Leave Group
      </button>
    </div>
  );
}

export default GroupMembers;

import React from "react";
import dayjs from "dayjs";
import axios from "axios";

if (window.performance) {
  if (performance.navigation.type === 1) {
    window.location.href = "/authorScreams";
  }
}

function VoteCard({ vote, FormateDate }) {
    const deleteVote = () => {
        let answer = window.confirm("Remove Vote?");
        console.log(answer)
        if (answer) {
          axios
            .delete(`screams/${vote.screamId}/${vote.voteId}`)
            .then((res) => {
              window.location.href = "/authorScreams";
            })
        }
    };

    const AcceptCollab = () => {
        let answer = window.confirm("Accept Collab?");
        console.log(answer)
        if (answer) {
          axios
            .post(`screams/${vote.screamId}/${vote.voteId}`)
            .then((res) => {
              window.location.href = "/authorsScreams";
            })
        }
    }

  return (
    <div className="space-y-6 bg-white mt-2 shadow sm:rounded-md sm:overflow-hidden">
      <div className="flex items-center space-x-2 mt-2 mx-2">
        <img
          className="rounded-full cursor-pointer"
          src={vote.userImage}
          alt="Profile"
          width="40"
          height="40"
          layout="fixed"
          onClick={() => this.userProfile(vote.handle)}
        />
        <div>
          <p
            className="font-medium cursor-pointer"
            onClick={() => this.userProfile(vote.handle)}
          >
            {vote.handle}
          </p>
          <p className="text-xs text-gray-400">
            {FormateDate(vote.createdAt)
              ? dayjs(vote.createdAt).format("DD/MM/YY")
              : dayjs(vote.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div>
        {vote.comment.length > 0 &&
          vote.comment.map((para) => (
            <p style={{ wordBreak: "break-all" }} className="mx-2">
              {para}
            </p>
          ))}
      </div>
      <div className="mt-4 mx-1">
        <p className="mt-2 break-words break-normal md:break-all">
          {vote.skills.map((element) => (
            <span className="mx-2 text-red-500">
              {element.charAt(0).toUpperCase() + element.slice(1)}
            </span>
          ))}
        </p>
      </div>
      <div className="flex list-none flex-wrap pt-3 px-2 flex-row">
        <div onClick={AcceptCollab} className="m-2  flex-auto text-center bg-blue-500 text-bold text-white cursor-pointer hove:bg-blue-700">
          Accept Collab
        </div>
        <div onClick={deleteVote} className="m-2 flex-auto text-center bg-red-500 text-white cursor-pinter cursor-pointer hover:bg-red-700">
          Remove Vote
        </div>
      </div>
    </div>
  );
}


export default VoteCard;

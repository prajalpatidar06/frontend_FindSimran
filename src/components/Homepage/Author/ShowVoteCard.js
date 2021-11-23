import React from 'react'
import dayjs from 'dayjs'

function ShowVoteCard({vote , FormateDate}) {
    return (
        <div className="space-y-6">
              <div className="flex items-center space-x-2 mt-2 mx-1">
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
                    <p style={{ wordBreak: "break-all" }} className="mx-1">
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
            </div>
    )
}

export default ShowVoteCard

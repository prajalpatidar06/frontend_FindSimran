import React, { Component } from "react";
import Data from "./450DSA";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

export class CodingProblems extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-2xl text-blue-600 font-bold">
          450 DSA Questions
        </h1>
        {Data.map((block) => (
          <div className="flex flex-col bg-white rounded-t-2xl mt-2 shadow-sm">
            <div
              className={`relative px-3 py-3 flex rounded-t-2xl font-medium cursor-pointer border-b-2 ${
                this.state.topic === block.topicName && "bg-blue-300"
              }`}
              onClick={() =>
                this.setState({
                  topic:
                    this.state.topic === block.topicName ? "" : block.topicName,
                })
              }
            >
              {this.state.topic === block.topicName ? (
                <MinusIcon
                  width={21}
                  height={21}
                  className="mx-3 text-red-600"
                />
              ) : (
                <PlusIcon
                  width={21}
                  height={21}
                  className="mx-3 text-blue-600"
                />
              )}
              <p className="mr-5">{block.topicName}</p>
              <p className="text-gray-500 absolute right-2">
                {block.questions.length}
              </p>
            </div>
            {this.state.topic === block.topicName &&
              block.questions.map((question) => (
                <div className="flex flex-col bg-white mt-2 rounded-t-2xl shadow-sm">
                  <a
                    href={question.URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-3 flex font-medium cursor-pointer text-green-500 border-b-2"
                  >
                    <li>{question.Problem}</li>
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CodingProblems;

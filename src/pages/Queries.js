import React, { useState } from "react";
import { Data } from "./QnA";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const Queries = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="mt-5">
      {Data.map((item, index) => {
        return (
          <>
            <div className="flex flex-col w-full sm:items-center">
              <div
                className="relative p-5 bg-grey shadow-sm block justify-left items-center border-2 sm:w-2/4 inline-flex cursor-pointer"
                onClick={() => toggle(index)}
                key={index}
              >
                <h1>
                  <span className="mr-5 font-bold">{item.id}</span>
                  {item.question}
                </h1>
                <span className="flex relative justify-right mr-0 ml-auto items-right block">
                  {clicked === index ? (
                    <ChevronUpIcon
                      width={21}
                      height={21}
                      className="flex flex-col justify-left items-center  bg-center text-blue-600"
                    />
                  ) : (
                    <ChevronDownIcon
                      width={21}
                      height={21}
                      className="text-blue-600 relative inline-flex justify-right items-right  cursor-pointer"
                    />
                  )}
                </span>
              </div>
            </div>
            {clicked === index ? (
              <div className="flex flex-col w-full sm:items-center">
                <div className="relative p-5 bg-grey shadow-sm block justify-left items-center border-2   sm:w-2/4 ">
                  <p className="ml-10">{item.answer}</p>
                  <div>
                    {item.url.map((it) => {
                      return (
                        <img
                          className="flex flex-col justify-center items-center bg-center w-full h-2/4 p-2"
                          src={it}
                          alt="description"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Queries;

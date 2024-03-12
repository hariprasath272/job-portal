import React, { useState } from "react";
import { Button, Progress, Flex } from "antd";
import Group from "../assets/images/Group.svg";
import Save from "../assets/images/Save.svg";
import Vector from "../assets/images/VectorVector.svg";

const Cards = ({ cardData, filteredData, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = cardData.filter((item) =>
      item.jobTitle.toLowerCase().includes(query)
    );
    console.log(filtered, "filtered");
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="w-full md:w-3/4 p-4 ">
        <div className="flex justify-between mt-5 mb-4">
          <h3 className="font-bold">
            SEARCH RESULT/{" "}
            <span className="font-light">JOBS - 2049 result</span>
          </h3>
          <div className="flex gap-2">
            <p>Sort by</p>
            <Button className="bg-white text-black w-24" size="middle">
              <div className="flex gap-2">
                Latest <img src={Vector} />{" "}
              </div>
            </Button>
          </div>
        </div>
        <div className="p-7 bg-gray-800 rounded">
          <input
            placeholder="Search Your Job"
            id="searchQueryInput"
            type="text"
            style={{ border: "1px solid grey" }}
            name="searchQueryInput"
            className="w-96 h-12 mb-4 bg-gray-800 outline-none rounded-full px-6 text-white text-base"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
          />
          <button
            id="searchQuerySubmit"
            type="submit"
            name="searchQuerySubmit"
            className="w-14 h-11 bg-transparent outline-none border-none bg-none -ml-10"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              ></path>
            </svg>
          </button>
          {filteredData.length ? (
            filteredData.map((val, id) => (
              <div className="mb-4" key={id}>
                <div className="bg-gray-700 border-none  p-7 rounded-t-lg">
                  <div>
                    <div className=" border-none ">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex ">
                            <img src={Group}></img>
                            <div className="ps-8">
                              <p className="font-semibold text-xl">
                                {val?.jobTitle}
                              </p>
                              <p className="mt-1">{val?.companyName}</p>
                              <p className="mt-1">{val?.locations}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                          <p>Skills Match</p>

                          <Flex gap="small" wrap="wrap" te>
                            <Progress
                              type="circle"
                              percent={val?.skillsMatch}
                              size="small"
                              trailColor="red"
                              strokeColor="#5CA4A9"
                              format={() => (
                                <span
                                  style={{ color: "white" }}
                                  className="font-extrabold"
                                >
                                  {val?.skillsMatch}%
                                </span>
                              )}
                            />
                          </Flex>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-gray-600 h-20 flex w-full justify-between p-7 rounded-b-lg">
                  <div>
                    <p>Posted 1 day ago . 10 applications </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      style={{
                        backgroundColor: "#5CA4A9",
                        color: "white",
                        border: "none",
                      }}
                    >
                      APPLY NOW
                    </Button>

                    <div>
                      <img src={Save} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1 className="text-2xl">No jobs found</h1>
              <p className="pt-2">
                Jobs are not available with your search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;

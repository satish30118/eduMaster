import React, { useEffect, useState } from "react";
import StudentMenu from "./StudentMenu";
import axios from "axios";

const StAssignment = () => {
  const [allAssignment, setAllAssignment] = useState([]);
  const getAllAssignment = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/assignment/get-all-assignment`
      );
      setAllAssignment(res?.data?.allAssignment);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllAssignment();
  }, []);

  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className=" overflow-y-scroll   w-[100%] p-2">
          <div className=" space-y-2">
            <div className=" text-2xl font-semibold text-gray-500">
              My Assignment:
            </div>
            <div className=" grid lg:grid-cols-3 lg:gap-3">
              {/* card  */}
              {allAssignment.map((element) => (
                <div
                  key={element._id}
                  className="max-w-sm p-6 relative  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="active absolute right-0 bg-red-600 px-2 rounded-lg text-white top-0 ">
                    new
                  </div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {element.assCategory} Assignment
                    </h5>
                  </a>
                  <p className="mb-3 flex flex-col font-normal text-gray-700 dark:text-gray-400">
                    <span>Topic : {element.assTitle}</span>
                    <span>Total questions : {element.assQuestion}</span>
                    <span>Question Type : {element.assType}</span>
                    <span> Deadline : {element.assDeadline}</span>
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Check out
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StAssignment;

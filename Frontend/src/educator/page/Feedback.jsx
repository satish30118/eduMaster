import React from "react";
import edStudentProf from "../../assets/educator.png";
import EducatorMenu from "../EducatorMenu";

function Feedback() {
  return (
    <div>
      <div className="dashboard">
        <div className="menu">
          <EducatorMenu />
        </div>
        <div className="content">
          {" "}
          <div className="border p-4">
            <div className=" space-y-4">
              <div className=" flex items-center text-2xl  justify-center">
                Your Feedback
              </div>
              <div className="feedbackcard">
                <div className=" grid lg:grid-cols-2">
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-2">
                    <div className="flex flex-col items-center pb-10">
                      <div className="h-24 w-24 flex items-center justify-center overflow-hidden  border rounded-full shadow-lg mb-3">
                        <img
                          className="  "
                          src={edStudentProf}
                          alt="Bonnie image"
                        />
                      </div>
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        StudentName
                      </h5>
                      <span className=" px-4 text-gray-500 dark:text-gray-400">
                        Your courses is really helpful for me. It's help me a
                        lot and thank's for helping me to achieving my goal.
                      </span>
                      <div className="flex mt-4 md:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Connect Request
                        </a>
                        <a
                          href="#"
                          className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

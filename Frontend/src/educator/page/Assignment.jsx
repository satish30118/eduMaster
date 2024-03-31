import React, { useEffect, useState } from "react";
import Img from "../../assets/educator.png";
import EducatorMenu from "../EducatorMenu";
import axios from "axios";
// import { NavLink } from 'react-router-dom'
function TestSeries() {
  const [assignmentForm, setAssignmentForm] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [allAssignment, setAllAssignment] = useState([]);
  const [assData, setAssData] = useState({
    assTitle: "",
    assCategory: "",
    assDeadline: "",
    assQuestion: "",
    assType: "",
  });

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setAssData({ ...assData, [name]: value });
  };

  const addNewAssignment = async (e) => {
    e.preventDefault();
    try {
      const { assTitle, assCategory, assDeadline, assQuestion, assType } =
        assData;

      if (
        !assTitle ||
        !assCategory ||
        !assDeadline ||
        !assQuestion ||
        !assType
      ) {
        alert("Fill all data!!");
        return;
      }

      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/assignment/add-new-assignment`,
        {
          assTitle,
          assCategory,
          assDeadline,
          assQuestion,
          assType,
        }
      );
      setAnimation(false);

      if (res?.status == 201) {
        alert(res.data.message);
        setAssignmentForm(false);
        getAllAssignment();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setAnimation(false);
      alert("Something went wrong, please try again");
    }
  };

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
    <div>
      <div className="dashboard">
        <div className="menu">
          <EducatorMenu />
        </div>
        <div className="content">
          <div className="  p-2  py-10 lg:space-y-2">
            <div className="Add a test">
              <div className=" space-y-4">
                <span className=" text-3xl font-semibold text-slate-500  ">
                  New Assignment:
                </span>
                <div className=" h-60 border flex items-center justify-center">
                  <button
                    onClick={() => {
                      setAssignmentForm(true);
                    }}
                    className="text-[5rem] border h-32 w-32 flex items-center justify-center rounded-full bg-gray-400 text-white "
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                className={` ${
                  assignmentForm ? "" : "hidden"
                }   flex items-center justify-center absolute z-[4]  w-full left-0 h-screen top-0 bg-[#403f3fcf] `}
              >
                <div className=" bg-white py-4 justify-between flex-col flex lg:w-[40vw] h-[50vh]">
                  <div className="flex items-center justify-center border-b-4  ">
                    <span className=" text-2xl font-bold text-gray-500  ">
                      {" "}
                      New Assignment
                    </span>
                    {/* <div className="">X</div> */}
                  </div>
                  <div className="px-4 space-y-4">
                    <div className="flex justify-between  items-center">
                      <label htmlFor="">Assignment Title</label>
                      <input
                        onChange={handleData}
                        value={assData.assTitle}
                        type="text"
                        className=" w-[50%] outline-none p-1"
                        name="assTitle"
                        id=""
                      />
                    </div>
                    <div className="testTitle space-x-2 items-center flex justify-between">
                      <label
                        htmlFor=" "
                        className=" text-[23px] font-semibold "
                      >
                        Assignment Subject:
                      </label>
                      <select
                        name="assCategory"
                        onChange={handleData}
                        value={assData.assCategory}
                        className=" w-[50%] p-1 outline-none focus:outline-none "
                        id=" SelectTitle"
                      >
                        <option value="">select Title</option>
                        <option value="Chemistry">Chemistry Assignment </option>
                        <option value="Physics">Physics Assignment </option>
                        <option value="Maths">Maths Assignment </option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="">Assignment Deadline</label>
                      <input
                        onChange={handleData}
                        value={assData.assDeadline}
                        type="date"
                        className=" w-[50%] outline-none p-1"
                        placeholder="...Time"
                        name="assDeadline"
                        id=""
                      />
                    </div>
                    <div className="flex justify-between  items-center">
                      <label htmlFor="">No of Questions</label>
                      <input
                        onChange={handleData}
                        value={assData.assQuestion}
                        type="number"
                        className=" w-[50%] outline-none p-1"
                        placeholder="...type here"
                        name="assQuestion"
                        id=""
                      />
                    </div>
                    <div className=" flex justify-between items-center">
                      <label htmlFor="">Questions Type</label>
                      <select
                        onChange={handleData}
                        value={assData.assType}
                        name="assType"
                        className="p-1 w-[50%]"
                        id=""
                      >
                        <option value="">select</option>
                        <option value="MCQs">MCQs</option>
                        <option value="Fill in">Fill in </option>
                        <option value="Subjective">Subjective</option>
                        <option value="Numerical">Numerical</option>
                        <option value="Mixed">Mixed</option>
                      </select>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2 justify-center">
                    <button
                      onClick={addNewAssignment}
                      className=" border px-2 hover:bg-gray-900  bg-gray-700 transition-all duration-300 text-white rounded-lg p-1"
                    >
                      {animation ? "Creating... " : "Create Assignment"}
                    </button>
                    <button
                      onClick={() => {
                        setAssignmentForm(false);
                      }}
                      className="  border px-2 bg-red-500 hover:bg-red-600 transition-all duration-300  text-white rounded-lg p-1"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Your All tests ">
              <div className=" lg:space-y-4">
                <span className=" text-3xl font-semibold text-slate-500">
                  Your All Assignment:
                </span>
                <div className=" grid  lg:grid-cols-2 gap-y-6 ">
                  {allAssignment.map((element) => (
                    <div
                      key={element._id}
                      class="max-w-sm relative   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <a href="#">
                        <img class="rounded-t-lg" src={Img} alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {element.assTitle}
                          </h5>
                        </a>
                        <p class="mb-3 font-normal flex flex-col text-gray-700 dark:text-gray-400">
                          <span>Subject: {element.assCategory}</span>
                          <span>
                            {" "}
                            Total number of problem: {element.assQuestion}
                          </span>

                          <span>Question Type: {element.assType}</span>
                          <span> Deadline: {element.assDeadline}</span>
                        </p>
                        <a
                          href="#"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Read more
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                        <div className=" bg-red-600 absolute right-0 top-0 text-white px-2 rounded-lg ">
                          {" "}
                          {element.New ? "new" : "ended"}{" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSeries;

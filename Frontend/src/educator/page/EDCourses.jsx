import React, { useEffect, useState } from "react";
import EducatorMenu from "../EducatorMenu";
import axios from "axios";
import Img from "../../assets/educator.png";

function EDCourses() {
  const [assignmentForm, setAssignmentForm] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [allCourse, setAllCourse] = useState([]);
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCategory: "",
    coursePrice: "",
    courseDuration: "",
    courseEducator: "",
    courseStartDate: "",
  });

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCourseData({ ...courseData, [name]: value });
  };

  const addNewCourse = async (e) => {
    e.preventDefault();
    try {
      const {
        courseName,
        courseCategory,
        coursePrice,
        courseDuration,
        courseEducator,
        courseStartDate,
      } = courseData;

      if (
        !courseName ||
        !courseEducator ||
        !coursePrice ||
        !courseDuration ||
        !courseCategory ||
        !courseStartDate ||
        !courseEducator
      ) {
        alert("Fill all data!!");
        return;
      }

      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/course/add-new-course`,
        {
          courseName,
          courseCategory,
          coursePrice,
          courseDuration,
          courseEducator,
          courseStartDate,
        }
      );
      setAnimation(false);

      if (res?.status == 201) {
        alert(res.data.message);
        getAllCourse()
        setAssignmentForm(false)
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setAnimation(false);
      alert("Something went wrong, please try again");
    }
  };

  const getAllCourse = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/get-all-course`
      );
      setAllCourse( res?.data?.allCourse)
      console.log(allCourse);
      console.log(res?.data?.allCourse)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourse()
  },[]);

  return (
    <div>
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
                    Add New Course:
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
                      <div className="testTitle space-x-2 items-center flex justify-between">
                        <label
                          htmlFor=" "
                          className=" text-[23px] font-semibold "
                        >
                          Course Title:
                        </label>
                        <input
                          onChange={handleData}
                          value={courseData.courseName}
                          type="text"
                          className=" w-[50%] outline-none p-1"
                          placeholder="...Name"
                          name="courseName"
                          id=""
                        />
                      </div>
                      <div className="testTitle space-x-2 items-center flex justify-between">
                        <label
                          htmlFor=" "
                          className=" text-[23px] font-semibold "
                        >
                          Assignment Title:
                        </label>
                        <select
                          name="courseCategory"
                          value={courseData.courseCategory}
                          className=" w-[50%] p-1 outline-none focus:outline-none "
                          id=" SelectTitle"
                          onChange={handleData}
                        >
                          <option value="">select Type</option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="Physics">Physics</option>
                          <option value="Maths">Maths</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center">
                        <label htmlFor="">Course Educator</label>
                        <input
                          onChange={handleData}
                          value={courseData.courseEducator}
                          type="text"
                          className=" w-[50%] outline-none p-1"
                          placeholder="...Educator"
                          name="courseEducator"
                          id=""
                        />
                      </div>
                      <div className="flex justify-between  items-center">
                        <label htmlFor="">Course Price</label>
                        <input
                          onChange={handleData}
                          value={courseData.coursePrice}
                          type="number"
                          className=" w-[50%] outline-none p-1"
                          placeholder="...Price"
                          name="coursePrice"
                          id=""
                        />
                      </div>
                      <div className=" flex justify-between items-center">
                        <label htmlFor="">Course Duration in Months</label>
                        <input
                          onChange={handleData}
                          value={courseData.courseDuration}
                          type="number"
                          className=" w-[50%] outline-none p-1"
                          placeholder="...duration"
                          name="courseDuration"
                          id=""
                        />
                      </div>
                      <div className=" flex justify-between items-center">
                        <label htmlFor="">Course Start Date</label>
                        <input
                          onChange={handleData}
                          value={courseData.courseStartDate}
                          type="date"
                          className=" w-[50%] outline-none p-1"
                          placeholder="...duration"
                          name="courseStartDate"
                          id=""
                        />
                      </div>
                    </div>
                    <div className=" flex items-center space-x-2 justify-center">
                      <button
                        onClick={addNewCourse}
                        className=" border px-2 hover:bg-gray-900  bg-gray-700 transition-all duration-300 text-white rounded-lg p-1"
                      >
                        {animation ? "Creating..." : "Create New Course"}
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
                    Your All Courses:
                  </span>
                  <div className=" grid  lg:grid-cols-2 gap-y-6 ">
                    {allCourse.map((element) => (
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
                              {element.courseName}
                            </h5>
                          </a>
                          <p class="mb-3 font-normal flex flex-col text-gray-700 dark:text-gray-400">
                            <span>
                              {" "}
                             Course Duration: {element.courseDuration} months
                            </span>
                            <span> Course Category: {element.courseCategory}</span>
                            <span>Course Educator :  {element.courseEducator} </span>
                            <span>Course Price :  {element.coursePrice} </span>
                            <span>Course Start :  {element.courseStartDate} </span>
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
    </div>
  );
}

export default EDCourses;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import ProfileImg from '../assets/profilesample.png'
import educatorprof from "../assets/educator.png";
import EducatorMenu from "./EducatorMenu";

function EducatorProfile() {
  const navigate = useNavigate();
  const edCourses = [
    {
      id: 1,
      aboutcourse:
        "This is will help you to achieve your goal within time limit",
      active: false,
      endsDate: "2026",
      batchTitle: "Arjuna Batch",
      imgsource: educatorprof,
    },
    {
      id: 1,
      aboutcourse:
        "This is will help you to achieve your goal within time limit",
      active: false,
      endsDate: "2026",
      batchTitle: "Arjuna Batch",
      imgsource: educatorprof,
    },
    {
      id: 1,
      aboutcourse:
        "This is will help you to achieve your goal within time limit",
      active: false,
      endsDate: "2026",
      batchTitle: "Arjuna Batch",
      imgsource: educatorprof,
    },
    {
      id: 1,
      aboutcourse:
        "This is will help you to achieve your goal within time limit",
      active: false,
      endsDate: "2026",
      batchTitle: "Arjuna Batch",
      imgsource: educatorprof,
    },
  ];

  return (
    <>
      <div className="dashboard">
        <div className="menu">
          <EducatorMenu />
        </div>
        <div className="content">
          <div className=" overflow-y-scroll border border-green-500  w-[100%] p-2">
            <div className="">
              <div className=" relative">
                <div className=" h-52 border cover">cover</div>
                <div className=" h-32 w-32 border flex items-center justify-center border-blue-600 border-[4px] bg-gray-200 rounded-full absolute top-32 right-24  profile">
                  <span className=" right-0    text-2xl p-2 h-10 w-10 rounded-full  material-symbols-rounded flex items-center justify-center text-white bg-gray-400 bottom-1 absolute">
                    photo_camera
                  </span>
                </div>
              </div>
              <div className=" p-4 space-y-3">
                <div className=" flex-col  flex ">
                  <span className=" text-3xl font-semibold">Teacher'Name</span>
                  <span className=" flex flex-col">
                    <span className=" space-x-2">
                      {" "}
                      <span>4k</span>
                      <span> Connections</span>
                    </span>
                    <span> Teachers bio</span>
                  </span>
                </div>

                <div className=" flex  justify-between ">
                  <div className=" space-y-2">
                    <h1 className=" text-2xl  text-gray-500">Experience</h1>
                    {/* {
            experienceList.map((ele)=>(
              <li key={ele.id}> {ele.content} </li>
            ))
          } */}
                    <ul className=" list-decimal px-4 text-[20px]">
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                    </ul>
                  </div>
                  <div className=" space-y-2">
                    <div className=" flex items-center space-x-2">
                      <span className=" text-3xl text-blue-600 flex items-center material-symbols-rounded">
                        school
                      </span>
                      <h1 className=" text-2xl  text-gray-500">Educations</h1>
                    </div>

                    <ul className=" list-decimal px-4 text-[20px]">
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                      <li> 2 years worked at unacedmy </li>
                    </ul>
                  </div>
                </div>

                <div className=" ">
                  <ul className=" py-4 space-y-3">
                    <NavLink
                      to="/edcourses"
                      className=" bg-gray-400 shadow-lg text-white px-2 rounded-xl p-2 "
                    >
                      My Active Courses
                    </NavLink>

                    <div className="  grid lg:grid-cols-2 gap-y-3 flex items-center justify-center">
                      {edCourses.map((element) => (
                        <NavLink key={element.id} className=" ">
                          <div className="max-w-sm relative bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <i className="bg-[red] rounded-xl right-0  px-1 absolute font-bold text-white ">
                              {element.active ? "New" : "has ended"}{" "}
                            </i>
                            <a href="#">
                              <img
                                className="rounded-t-lg"
                                src={element.imgsource}
                                alt=""
                              />
                            </a>
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {element.batchTitle}
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {element.aboutcourse}
                              </p>
                              <a
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                {`ends in ${element.endsDate}`}
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
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducatorProfile;

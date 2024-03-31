
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import educatorprof from "../assets/educator.png";
import EducatorMenu from "./EducatorMenu";
import coverphoto from "../assets/CoverImg.jpg";
import profiileImg from "../assets/profileimg.avif";
import { useAuth } from "../context/authContext";

function EducatorProfile() {

  const [auth, setAuth] = useAuth();

  return (
    <>
      <div className="dashboard  ">
        <div className={`  menu`}>
          <EducatorMenu />
        </div>
        <div className="content  w-full ">
          <div className=" overflow-y-scroll border  w-[100%] lg:p-2">
            <div className="">
              <div className=" relative">
                <div className=" lg:h-52 border overflow-hidden cover">
                  <img src={coverphoto} className=" opacity-55 " alt="" />
                </div>
                <div className=" lg:h-32 lg:w-32 h-16 w-16 border overflow-hidden  flex items-center justify-center border-blue-600 border-[2px] lg:border-[4px] bg-gray-200 rounded-full absolute lg:top-32 lg:right-24 right-3 top-20  profile">
                  <img src={profiileImg} className="  " alt="" />
                </div>
              </div>

              <div className=" lg:p-4 lg:space-y-3">
                <div className=" flex-col border-b-2 flex px-4 py-2 ">
                  <span className=" lg:text-3xl font-semibold">
                    {auth?.user?.name}
                  </span>
                  <span className=" flex flex-col">
                    <span className=" space-x-2">
                      {" "}
                      <span>4k</span>
                      <span> Connections</span>
                    </span>
                    <span> Teachers bio</span>
                  </span>
                </div>

                <div className=" grid lg:grid-cols-3  ">
                  <div className=" px-4 py-2  lg:space-y-2 lg:border-b-0 border-b-2">
                    <h1 className=" lg:text-2xl font-semibold  text-gray-500">
                      Experience
                    </h1>

                    <ul className="font-semibold text-gray-400 list-decimal px-4 lg:px-0 text-[19px] lg:text-[19px] ">
                      <li> 5 years worked at Allen </li>
                      <li> 7 years worked at Motion </li>
                      <li> 3 years worked at Unacedmy </li>
                    </ul>
                  </div>

                  <div className=" px-4 py-2  lg:space-y-2 lg:border-b-0 border-b-2">
                    <div className=" flex space-x-2">
                      <span className=" lg:text-3xl text-blue-600 flex items-center material-symbols-rounded">
                        school
                      </span>
                      <h1 className=" lg:text-2xl font-semibold  text-gray-500">
                        Educations
                      </h1>
                    </div>

                    <ul className="font-semibold text-gray-400 list-decimal px-4 lg:px-0 lg:text-[19px] ">
                      <li> Primary Education from DPS, Delhi </li>
                      <li> B.Tech from IIT Delhi </li>
                      <li> M.Tech from IIT Bombay </li>
                      <li> P.hd from IISc Banglore </li>
                    </ul>
                  </div>

                  <div className=" px-4 py-2  lg:space-y-2 lg:border-b-0 border-b-2">
                    <h1 className=" lg:text-2xl font-semibold  text-gray-500">
                      Address
                    </h1>

                    <ul className="font-semibold text-gray-400 list-decimal px-4 lg:px-0 lg:text-[19px] ">
                      <span className=" flex items-center">
                        {" "}
                        <span className=" lg:text-3xl text-red-600 flex items-center material-symbols-rounded">
                          home_pin
                        </span>
                        <span> John Smith</span>
                      </span>
                      123 Main Street Anytown, State 12345 Country
                    </ul>
                  </div>

                  <div className=" px-4 py-2  lg:space-y-2 lg:border-b-0 border-b-2">
                    <div className=" flex space-x-2 py-2">
                      <h1 className=" lg:text-2xl font-semibold  text-gray-500">
                        Contact Me
                      </h1>
                    </div>

                    <ul className=" px-4 lg:px-0 flex justify-between flex-row space-x-2 lg:text-[24px] ">
                      <li className=" border h-8 flex items-center justify-center rounded-lg  shadow-lg w-8 bg-slate-200 ">
                        <i className="text-blue-700 fa-brands text-[26px] fa-facebook"></i>
                      </li>
                      <li className=" border h-8 flex items-center justify-center rounded-lg  shadow-lg w-8 bg-slate-200 ">
                        <i className="text-blue-700 fa-solid text-[26px] fa-envelope"></i>
                      </li>
                      <li className=" border h-8 flex items-center justify-center rounded-lg  shadow-lg w-8 bg-slate-200 ">
                        <i className="text-blue-700 fa-brands text-[26px] fa-instagram"></i>
                      </li>
                      <li className=" border h-8 flex items-center justify-center rounded-lg  shadow-lg w-8 bg-slate-200 ">
                        <i className="text-blue-700 fa-brands text-[26px] fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
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

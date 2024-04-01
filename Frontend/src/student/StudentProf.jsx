import React, { useState } from "react";
import StudentMenu from "./StudentMenu";
import coverphoto from '../assets/CoverImg.jpg'
import profiileImg from '../assets/profileimg.avif'
import courses from '../assets/educator.png'
import { useAuth } from "../context/authContext";

const StudentProf = () => {
  const [auth, setAuth] = useAuth()
  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className=" overflow-y-scroll   w-[100%] p-2">
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
                <span className=" lg:text-3xl text-[23px]  font-semibold">{auth?.user?.name}</span>
                <span className=" flex flex-col">
                  <span className=" space-x-2">
                    {" "}
                    <span>4k</span>
                    <span> Connections</span>
                  </span>
                  <span> Students</span>
                </span>
              </div>

              <div className=" lg:space-y-2">
                <div className=" p-2 text-[20px] lg:text-[23px]">Enrolled courses:</div>
                <div className=" grid lg:grid-cols-2 grid-cols-1  xl:grid-cols-3 gap-x-2 gap-y-4">


                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="rounded-t-lg" src={courses} alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         Arjuna batch'26 </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        
                     <div className=" flex flex-col">
                      <span className=" font-semibold "> Sameer Sir </span>
                      <span className="font-semibold">Jayant sir </span>
                      <span className="font-semibold"> Anupam sir</span>
                      <span className="font-semibold"> Ends on 3 oct </span>
                      <span> </span>
                     </div>
                     
                     
                        </p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Check out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="rounded-t-lg" src={courses} alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         Arjuna batch'26 </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        
                     <div className=" flex flex-col">
                      <span className=" font-semibold "> Sameer Sir </span>
                      <span className="font-semibold">Jayant sir </span>
                      <span className="font-semibold"> Anupam sir</span>
                      <span className="font-semibold"> Ends on 3 oct </span>
                      <span> </span>
                     </div>
                     
                     
                        </p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Check out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="rounded-t-lg" src={courses} alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         Arjuna batch'26 </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        
                     <div className=" flex flex-col">
                      <span className=" font-semibold "> Sameer Sir </span>
                      <span className="font-semibold">Jayant sir </span>
                      <span className="font-semibold"> Anupam sir</span>
                      <span className="font-semibold"> Ends on 3 oct </span>
                      <span> </span>
                     </div>
                     
                     
                        </p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Check out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="rounded-t-lg" src={courses} alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         Arjuna batch'26 </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        
                     <div className=" flex flex-col">
                      <span className=" font-semibold "> Sameer Sir </span>
                      <span className="font-semibold">Jayant sir </span>
                      <span className="font-semibold"> Anupam sir</span>
                      <span className="font-semibold"> Ends on 3 oct </span>
                      <span> </span>
                     </div>
                     
                     
                        </p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Check out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
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
  );
};

export default StudentProf;

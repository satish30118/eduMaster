import React from 'react'
import StudentMenu from './StudentMenu'

const StAssignment = () => {
  
  return (
    <div className="dashboard">
    <div className="menu">
      <StudentMenu/>
    </div>
    <div className="content">
      <div className=" overflow-y-scroll   w-[100%] p-2">
        <div className=" space-y-2">
          <div className=" text-2xl font-semibold text-gray-500">My Assignment:</div>
          <div className=" grid lg:grid-cols-3">
            
{/* card  */}
<div className="max-w-sm p-6 relative  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="active absolute right-0 bg-red-600 px-2 rounded-lg text-white top-0 ">
    new
  </div>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Physics assignment
          </h5>
    </a>
    <p className="mb-3 flex flex-col font-normal text-gray-700 dark:text-gray-400">
      <span> Deadline:23/34/3002</span>
      <span>Total questions:32</span>
      <span>Question Type: MCQs</span>
      <span>Topic:</span>

      </p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Check out
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>




          </div>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default StAssignment

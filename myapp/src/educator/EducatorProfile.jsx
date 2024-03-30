import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ProfileImg from '../assets/profilesample.png'

function EducatorProfile() {
  const navigate = useNavigate();
  return (
    <div className=' border border-red-700 h-full'>
      <div className="">
        <div className=" relative">
          <div className=" h-52 border cover">cover</div>
          <div className=" h-32 w-32 border flex items-center justify-center border-blue-600 border-[4px] bg-gray-200 rounded-full absolute top-32 right-24  profile">
            <span class=" right-0 border text-2xl p-2 h-10 w-10 rounded-full  material-symbols-rounded flex items-center justify-center text-white bg-gray-400 bottom-1 absolute">
              photo_camera
            </span>


          </div>

        </div>
        <div className=" p-4 space-y-3">

          <div className=" flex-col  flex ">
            <span className=' text-3xl font-semibold'>Teacher'Name</span>
            <span className=' flex flex-col'>
              <span className=' space-x-2'> <span>4k</span>
                <span> Connections</span></span>
              <span> Teachers bio</span>
            </span>
          </div>


          <div className=" flex  justify-between ">
            <div className=" space-y-2">
              <h1 className=' text-2xl  text-gray-500'>Experience</h1>
              {/* {
            experienceList.map((ele)=>(
              <li key={ele.id}> {ele.content} </li>
            ))
          } */}
              <ul className=' list-decimal px-4 text-[20px]'>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
              </ul>


            </div>
            <div className=" space-y-2">
              <div className=" flex items-center space-x-2">
              <span class=" text-3xl text-blue-600 flex items-center material-symbols-rounded">
                school
              </span>
              <h1 className=' text-2xl  text-gray-500'>Educations</h1>
              </div>
            
              <ul className=' list-decimal px-4 text-[20px]'>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
                <li>  2 years worked at unacedmy </li>
              </ul>


            </div>

          </div>

          <div className=" border ">
            <ul className=' py-4'>
              <NavLink to="/edcourses" className=' bg-gray-400 shadow-lg text-white px-2 rounded-xl p-2 '>My Active Courses
              </NavLink>
              <NavLink className=" border">
                <div className="">
                  Image
                </div>
                <div className=" h-72 w-[30%] border">
                  <span> My Courses </span>
                  <span>Batch name</span>
                  <span> This is courses will help you to crack jee main and advanced within 1 years. Enroll My coursesx  </span>
                  

                </div>

              </NavLink>



            </ul>


          </div>


        </div>





      </div>
    </div>
  )
}

export default EducatorProfile

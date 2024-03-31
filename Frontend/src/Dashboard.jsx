import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import useData from './context/Context'

function Dashboard() {
  const {home,setHome,student} = useData()
  const educatorComp = [
    
    {
      id: 2,
      slug: "/educatorprofile",
      title: "My Profile",
      icon: "person"
    },
    {
      id: 3,
      slug: "/testseries",
      title: "Tests",
      icon: "text_increase"
    },
    {
      id: 4,
      slug: "/assignment",
      title: "Assigntment",
      icon: "assignment"
    },
    {
      id: 5,
      slug: "/liveclass",
      title: "Live class",
      icon: "smart_display"
    },
    {
      id: 6,
      slug: "/doubtbox",
      title: "Student's doubts",
      icon: "comment"
    },
    {
      id: 7,
      slug: "/edcourses",
      title: "My courses",
      icon: "comment"
    },
    {
      id: 8,
      slug: "/feedback",
      title: "Feedback",
      icon: "home"
    },
    {
      id: 9,
      slug: "/edplaylist",
      title: "My Playlists",
      icon: "video_library"
    },
    {
      id: 10,
      slug: "/calendar",
      title: "My Calendar",
      icon: "calendar_month"
    },
    {
      id: 11,
      slug: "/edteam",
      title: "My Team",
      icon: "Groups"
    },
   

  ]
  const studentsComp = [
    
    {
      id: 2,
      slug: "/studentprofile",
      title: "My Profile",
      icon: "person"
    },
    {
      id: 3,
      slug: "/studenttests",
      title: "Test Series",
      icon: "text_increase"
    },
    {
      id: 4,
      slug: "/stassignment",
      title: "My Assigntment",
      icon: "assignment"
    },
    {
      id: 5,
      slug: "/stliveclass",
      title: "Live class",
      icon: "smart_display"
    },
    {
      id: 6,
      slug: "/doubtbox",
      title: "Ask doubts",
      icon: "comment"
    },
    {
      id: 7,
      slug: "/stcourses",
      title: "My courses",
      icon: "comment"
    },
    {
      id: 8,
      slug: "/stfeedback",
      title: "Feedback",
      icon: "home"
    },
    {
      id: 9,
      slug: "/stplaylist",
      title: "My Playlists",
      icon: "video_library"
    },
    {
      id: 10,
      slug: "/stcalendar",
      title: "My Schedule",
      icon: "calendar_month"
    },
    
   

  ]

  
  const { educator } = useData();
  if (educator) {


    return (
      <div className=" w-[100vw]   h-screen">
        <div className="dashboard h-14 border z-[2] bg-white  px-2 w-full items-center fixed flex"> Dashboard</div>

        <div className="  flex items-center justify-center pt-14">
          <div className='flex container  justify-between    w-full   '>
            <ul className=' fixed space-y-4 w-[20%] z-[2] bg-white font-semibold  flex-col text-[26px]  flex  p-2 '>
            <NavLink onClick={()=>{setHome(true)}}  className=" px-2 lg:hover:bg-[#e4e3e3] lg:hover:text-blue-600 rounded-md  transition-all duration-300  flex items-center space-x-2" >
                  <span class="material-symbols-rounded  font-bold">
                    home
                  </span>
                  <span >Home</span>
                </NavLink>

              {educatorComp.map((element) => (
                <NavLink key={element.id} className={ ({isActive})=>` ${isActive?" text-blue-600 bg-[#e4e3e3]  ":" bg-[white] text-slate-500 "} px-2  lg:hover:text-blue-600 lg:hover:bg-[#e4e3e3] rounded-md  transition-all duration-300  flex items-center space-x-2`} to={element.slug}>
                  <span class="material-symbols-rounded  font-bold">
                    {element.icon}
                  </span>
                  <span >{element.title}</span>
                </NavLink>

              ))}
            </ul>
            <div className="   w-[80%] lg:ml-[26%]  p-2">
              <Outlet />
            </div>
          </div>

        </div>
      </div>
    )
  }
  else if(student){
    return (
      <div className=" w-[100vw]  h-screen space-y-12 border border-red-600">
      <div className="dashboard h-12 border z-[2] bg-white px-2 w-full items-center fixed flex"> Dashboard</div>

      <div className="  flex items-center justify-center">
        <div className='flex container  justify-between    w-full   '>
          <ul className=' fixed border space-y-4 w-[20%] z-[10] bg-white font-semibold  flex-col text-[26px] text-slate-500 flex  p-2 '>
          <NavLink onClick={()=>{setHome(true)}}  className=" px-2 lg:hover:bg-[#e4e3e3] lg:hover:text-blue-600 rounded-md  transition-all duration-300  flex items-center space-x-2" >
                <span class="material-symbols-rounded  font-bold">
                  home
                </span>
                <span >Home</span>
              </NavLink>

            {studentsComp.map((element) => (
              <NavLink key={element.id} className=" px-2 lg:hover:bg-[#e4e3e3] lg:hover:text-blue-600 rounded-md  transition-all duration-300  flex items-center space-x-2" to={element.slug}>
                <span class="material-symbols-rounded  font-bold">
                  {element.icon}
                </span>
                <span >{element.title}</span>
              </NavLink>

            ))}
          </ul>
          <div className=" overflow-y-scroll border border-green-500  w-[80%] lg:ml-[27%]  p-2">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
    )

  }

  else {
    return (<div>Please Login</div>)
  }


}

export default Dashboard

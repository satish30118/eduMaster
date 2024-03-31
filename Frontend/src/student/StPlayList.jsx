import React from 'react'
import StudentMenu from './StudentMenu'
import live from '../Components/Image/live.svg';
import './LiveClass.css'
const StPlayList = () => {
  const MathsVideo = [
    {
      id:1,
      token:"FguTJYCVbQE?si=wmU42Iu0IlMwbDad"
    },
    {
      id:2,
      token:"29zEmx4i_C8?si=dtKbfJTJGKxeExJ9"
    },
    {
      id:3,
      token:"83ADM1OiTAU?si=zwSnoz7pnu9TQa6p"
    },
    {
      id:4,
      token:"zdY1xxviVaw?si=xco2MPYcWdqVhG19"
    },
    {
      id:5,
      token:"XovilwJsOLU?si=vNKeLBtIt4br76-q"

    },
    {
      id:6,
      token:"0ktJxd4BMx8?si=oHsYYOPdfCtH8Y25"
    }
  ]
  return (
    <div>
      <div className="dashboard">
    <div className="menu ">
      <StudentMenu/>
    </div>
    <div className="content">
      <div className=" w-[100%] p-2">


      <div className=" space-y-3">
       <span className=' text-2xl font-semibold text-gray-500 '>Maths Playlist: </span>
       <div className=" grid lg:grid-cols-3 gap-4 ">
         
        {
          MathsVideo.map((element)=>(
            <div key={element.id} className=" h-52 w-[23.4rem] border-[4px] shadow-xl rounded-xl overflow-hidden">
       <iframe
        title="YouTube Video"
        className={`w-full h-full`}
        src={`https://www.youtube.com/embed/${element.token}`}
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >hello </iframe>
       </div>
          ))
        }
        </div>
          
       
       </div>
      <div className=" space-y-3">
       <span className=' text-2xl font-semibold text-gray-500 '>Physics Playlist: </span>
       <div className=" grid lg:grid-cols-3 gap-4 ">
         
        {
          MathsVideo.map((element)=>(
            <div key={element.id} className=" h-52 w-[23.4rem] border-[4px] shadow-xl rounded-xl overflow-hidden">
       <iframe
        title="YouTube Video"
        className={`w-full h-full`}
        src={`https://www.youtube.com/embed/${element.token}`}
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >hello </iframe>
       </div>
          ))
        }
        </div>
          
       
       </div>
      <div className=" space-y-3">
       <span className=' text-2xl font-semibold text-gray-500 '>Chemistry Playlist: </span>
       <div className=" grid lg:grid-cols-3 gap-4 ">
         
        {
          MathsVideo.map((element)=>(
            <div key={element.id} className=" h-52 w-[23.4rem] border-[4px] shadow-xl rounded-xl overflow-hidden">
       <iframe
        title="YouTube Video"
        className={`w-full h-full`}
        src={`https://www.youtube.com/embed/${element.token}`}
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >hello </iframe>
       </div>
          ))
        }
        </div>
          
       
       </div>
      

      </div>
    </div>
  </div>
    </div>
  )
}

export default StPlayList


const PlaylistData = [
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
  {
    subject: 'Science',
    line1: "61 Courses",
  },
]


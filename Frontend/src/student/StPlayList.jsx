import React from 'react'
import StudentMenu from './StudentMenu'
import live from '../Components/Image/live.svg';
import './LiveClass.css'
const StPlayList = () => {
  return (
    <div>
      <div className="dashboard">
    <div className="menu">
      <StudentMenu/>
    </div>
    <div className="content">
      <div className=" overflow-y-scroll border border-green-500  w-[100%] p-2">
      <div className="LiveClass_Box">
        <div className="LiveClass_Box_right">
          <div className="LiveClass_Box_right_first">
            <button className='button_box'>CBSE Class 10</button><button className='button_box'>Free live classes</button>
            <p>CBSE Class 10 Playlist</p>
            <h1>Watch free online coaching classes for CBSE Class 10 by our best educators. You can watch free recorded and live classes.</h1>
          </div>
          <div className="LiveClass_Box_right_second">
            <div>
              <div className="live_png">
                <img src={live} alt='' className='' />
              </div>
              <div className="live_text">
                <h1>Access more than</h1>
                <h2>4,110+ courses for CBSE Class 10</h2>
              </div>
            </div>
            <div className="card_elements mt-5">
              {PlaylistData.map((B) => (
                <a href='/'>
                  <div className="card_playlist m-2">
                    <h1>{B.subject}</h1>
                    <p>{B.line1}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
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


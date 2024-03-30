import React from 'react'
import './LiveClass.css'
import { Link } from 'react-router-dom'
import maths from '../Image/math.png'
import physics from '../Image/physics.png'
import chemistry from '../Image/flask.png'
import Teacher from '../Image/Teacher.png'
import house from '../Image/house.png'
import live from '../Image/live.svg';

function Playlist() {
  return (
    <>
      <div className="LiveClass_Box">
        <div className="LiveClass_Box_left">
          <Link to="/Home" ><p><span><img src={house} alt='' className='maths' /></span>Home</p></Link>
          <p>Subjects-</p>
          <a href=''><p><span><img src={maths} alt='' className='maths' /></span>Maths Classes</p></a>
          <a href=''><p><span><img src={chemistry} alt='' className='maths' /></span>Chemistry Classes</p></a>
          <a href=''><p><span><img src={physics} alt='' className='maths' /></span>Physics Classes</p></a>
        </div>
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
    </>
  )
}

export default Playlist

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

import React from 'react'
import StudentMenu from './StudentMenu'
import Teacher from '../Components/Image/Teacher.png'

function Stliveclass() {
  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className=" overflow-y-scroll border border-green-500  w-[100%] p-2">
          <div className="LiveClass_Box">
            <div className="LiveClass_Box_right">
              <div className="LiveClass_Box_right_first">
                <button className='button_box'>CBSE Class 10</button><button className='button_box'>Free live classes</button>
                <p>Free classes for CBSE Class 10</p>
                <h1>Watch free online coaching classes for CBSE Class 10 by our best educators. You can watch free recorded and live classes.</h1>
              </div>
              <div className="LiveClass_Box_right_second">
                <p>Trending classes</p>
                <h1>Watch popular classes for CBSE Class 10</h1>

                <div className="card_elements mt-5">
                  {CardData.map((A) => (
                    <div className="card_part m-2">
                      <div className="card_img">
                        <img src={A.img} alt='' />
                      </div>
                      <div className="card_text">
                        <h1>{A.title}</h1>
                        <p> {A.line1}</p>
                        <p> {A.line2}</p>
                        <p> {A.line3}</p>
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
  )
}

export default Stliveclass

const CardData = [
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "'Use Code KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  },
  {
    img: Teacher,
    title: 'HINDI  ENGLISH',
    line1: "Quiz on Tenses -",
    line2: "Use Code: 'KG31'",
    line3: "Ended on Mar 27, 2024",
  }
]



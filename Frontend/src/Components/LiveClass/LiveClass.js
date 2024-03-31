import React from 'react'
import './LiveClass.css'
import { Link } from 'react-router-dom'
import maths from '../Image/math.png'
import physics from '../Image/physics.png'
import chemistry from '../Image/flask.png'
import Teacher from '../Image/Teacher.png'
import house from '../Image/house.png'

function LiveClass() {
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
        </>
    )
}

export default LiveClass

const CardData = [
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"'Use Code KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    },
    {
        img: Teacher,
        title: 'HINDI  ENGLISH',
        line1: "Quiz on Tenses -",
        line2:"Use Code: 'KG31'",
        line3: "Ended on Mar 27, 2024",
    }
]

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import carouselImgFirst from '../Image/carouselImgFirst.jpg';
import carouselImgSecond from '../Image/carouselImgSecond.jpg';
import verify from '../Image/Verify.svg';
import live from '../Image/live.svg';
import user from '../Image/user.png';
import Batches from '../Image/Batches.png';
import Courses from '../Image/Courses.png';
import playlist from '../Image/playlist.png';
import pencil from '../Image/pencil.png';
import test from '../Image/test.png';
import question from '../Image/question.png';
import trofy from '../Image/trofy.svg';
import './HomePage.css';
import { Pagination } from 'swiper/modules';
import useData from '../../context/Context';
import Footer from '../Footer/Footer';


export default function Home() {
  const navigate = useNavigate();
  const{login,setHome,student,setStudent,setEducator}= useData()
  const facility = [
    {
      id:1,
      slug:"/stliveclass",
      imgLink:live,
      title:"Live Classes",
      content:"Watch free online coaching classes by our best educators.",
      classes:"col_item",
    },
    {
      id:2,
      slug:"",
      imgLink:user,
      title:"Top Educators",
      content:"Learn from some of the best educators in the country.",
      classes:"col_item"

    },
    {
      id:3,
      slug:"",
      imgLink:Batches,
      title:"Batches",
      content:"Curated batches to simplify the learning journey for your goal.",
      classes:"col_item"

    },
    
    {
      id:4,
      slug:"",
      imgLink:Courses,
      title:"Courses",
      content:"Learn every subject in detail from your favourite educator.",
      classes:"col_item"

    },
    {
      id:5,
      slug:"",
      imgLink:playlist,
      title:"Playlist",
      content:"High quality lecture videos for the entire syllabus for all your subjects.",
      classes:"col_item"

    },
    {
      id:6,
      slug:"",
      imgLink:test,
      title:"Test Series",
      content:"Evaluate and boost your exam preparation with test series",
      classes:"col_item"

    },
    {
      id:7,
      slug:"",
      imgLink:question,
      title:"Doubt & Solutions",
      content:"Get quick and detailed solutions to clarify your doubts.",
      classes:"col_item"

    },
    {
      id:8,
      slug:"",
      imgLink:pencil,
      title:"Practice",
      content:"Strengthen your exam preparation with adaptive practice tests.",
      classes:"col_item"
    }
    
  ]
  return (
    <>
    <div className="Home_container">
      <div className="Home_Carousel_Box">
        <Swiper
          loop={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper_page_One">
              <div className="swiper_page_One_Col_left">
                <p className="text-green-700">PHYSICS</p>
                <p>for 11th & 12th.</p>
                <p>
                  Exclusively for<span className="text-green-700"> JEE & NEET</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={carouselImgFirst} alt="" className="carouselImgFirst" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carouselImgSecond} alt="" className="carouselImgSecond" />
            <div className="carouselImgSecond_Text">
              <h1>Learning that gets you</h1>
              <p>Skills for your present (and your future). Get started with us.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Home_facilitates_Box">
        <div className="Home_facilitates_title">
          <div className="Home_facilitates_left">
            <p>
              Crack IIT JEE with <span className="text-green-700">Unacademy</span>
            </p>
            <h1>
              Over<span className="text-green-700">10 crore</span> learners trust us for online and offline coaching
            </h1>
          </div>
          <div className="Home_facilitates_right">
            <span>
              <img src={verify} alt="" className="verify" />
              <a href="/">View subscription offers</a>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {
          facility.map((element)=>(
            <Link onClick={()=>{setHome(false);
              setStudent(true);
              setEducator(false);
            
            }} key={element.id}>
            <div className={`${element.classes}`}>
              <span>
                
                <img src={element.imgLink} alt="" className="live" />
                {element.title}
              </span>
              <p>{element.content}</p>
            </div>
          </Link>
          ))
         }
         
        </div>
      </div>
      <div className="Home_Offer_Box">
        <div className="Home_Offer">
          <div className="Home_Offer_left">
            <p>Take a test for free and win up to 50% scholarship</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
          </div>
          <div className="Home_Offer_right">
            <img src={trofy} alt="" />
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
}
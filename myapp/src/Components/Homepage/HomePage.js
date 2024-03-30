import React from 'react'
import { Link } from 'react-router-dom'
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

export default function App() {
  return (
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
          <Link to='/LiveClass'>
            <div className="col_item">
              <span>
                {' '}
                <img src={live} alt="" className="live" />Live classes{' '}
              </span>
              <p>Watch free online coaching classes by our best educators.</p>
            </div>
          </Link>
          <div className="col_item">
            <span>
              {' '}
              <img src={user} alt="" className="live" />Top educators{' '}
            </span>
            <p>Learn from some of the best educators in the country.</p>
          </div>
          <div className="col_item">
            <span>
              {' '}
              <img src={Batches} alt="" className="live" />Batches{' '}
            </span>
            <p>Curated batches to simplify the learning journey for your goal.</p>
          </div>
          <Link to='/Courses'>
          <div className="col_item">
            <span>
              {' '}
              <img src={Courses} alt="" className="live" />Courses{' '}
            </span>
            <p>Learn every subject in detail from your favourite educator.</p>
          </div>
          </Link>
          <Link to='/Playlist'>
            <div className="col_item">
              <span>
                {' '}
                <img src={playlist} alt="" className="live" />Playlist{' '}
              </span>
              <p>High quality lecture videos for the entire syllabus for all your subjects.</p>
            </div>
          </Link>
          <div className="col_item">
            <span>
              {' '}
              <img src={pencil} alt="" className="live" />Practice{' '}
            </span>
            <p>Strengthen your exam preparation with adaptive practice tests.</p>
          </div>
          <div className="col_item">
            <span>
              {' '}
              <img src={test} alt="" className="live" />Test series{' '}
            </span>
            <p>Evaluate and boost your exam preparation with test series.</p>
          </div>
          <div className="col_item">
            <span>
              {' '}
              <img src={question} alt="" className="live" />Doubts & solutions{' '}
            </span>
            <p>Get quick and detailed solutions to clarify your doubts.</p>
          </div>
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
  );
}
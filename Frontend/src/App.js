import React, { useState } from "react";
import {
  Home,
  Register,
  Login,
  StAssignment,
  StFeedback,
  StPlayList,
  StCourses,
  Stliveclass,
  Chatbox,
  StTest,
  StudentProf,
  EducatorProfile,
  Assignment,
  TestSeries,
  Feedback,
  DoubtBox,
  LiveClass,
  EDPlaylist,
  EDCourses,
} from "./RouterList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentRoute from "./student/StudentRoute";
import EducatorRoute from "./educator/educatorPrivateRoute";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUsPage/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          {/* // USER DASHBOASR // */}
          <Route exact path="/dashboard/" element={<StudentRoute />}>
            <Route path="student" element={<StudentProf />}></Route>
            <Route path="student/profile" element={<StudentProf />}></Route>
            <Route path="student/test-series" element={<StTest/>}></Route>
            <Route path="student/assignment" element={<StAssignment />}></Route>
            <Route path="student/doubts" element={<Chatbox />}></Route>
            <Route path="student/courses" element={<StCourses />}></Route>
            <Route path="student/live-class" element={<Stliveclass />}></Route>
            <Route path="student/playlist" element={<StPlayList />}></Route>
            <Route path="student/feedback" element={<StFeedback />}></Route>
          </Route>

          {/* // EDUCATOR ROUTING // */}
          <Route exact path="/dashboard/" element={<EducatorRoute />}>
            <Route path="educator" element={<EducatorProfile />}></Route>
            <Route
              path="educator/profile"
              element={<EducatorProfile />}
            ></Route>
            <Route path="educator/test-series" element={<TestSeries />}></Route>
            <Route path="educator/assignment" element={<Assignment />}></Route>
            <Route path="educator/courses" element={<EDCourses />}></Route>
            <Route path="educator/live-class" element={<LiveClass />}></Route>
            <Route
              path="educator/students-doubts"
              element={<DoubtBox />}
            ></Route>
            <Route path="educator/playlist" element={<EDPlaylist />}></Route>
            <Route path="educator/feedback" element={<Feedback />}></Route>
          </Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

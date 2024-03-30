import React from "react";
import './App.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import LiveClass from "./Components/LiveClass/LiveClass";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Playlist from "./Components/LiveClass/Playlist";
import Courses from "./Components/LiveClass/Courses";

function App() {
  return (
    <>
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path='/Home' element={<HomePage />}>
          </Route>
          <Route path='/' element={< Navigate to='Home' />}>
          </Route>
          <Route path='/LiveClass' element={<LiveClass />}>
          </Route>
          <Route path='/Playlist' element={<Playlist />}>
          </Route>
          <Route path='/Courses' element={<Courses />}>
          </Route>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </>
  );
}

export default App;

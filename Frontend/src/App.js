import React, { useEffect, useId, useState } from "react";
// import Navbar from './Components/Header/Navbar'
import Dashboard from "./Dashboard";
import { ContextProvider } from "./context/Context";
import Home from "./Components/Homepage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useStickyBox } from "react-sticky-box";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";

function App() {
  const stickyBox = useStickyBox();
  const [student, setStudent] = useState(true);
  const [educator, setEducator] = useState(false);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);

  return (
    <ContextProvider
      value={{
        setStudent,
        setEducator,
        student,
        educator,
        setHome,
        login,
        setHome,
      }}
    >
      <div className=" overflow-x-hidden ">
        <Navbar />
        <div className=" mt-16 ">
          {/* <stickyBox>{student && home ? <Home /> : <Dashboard />}</stickyBox> */}
        </div>
      </div>
      <Login />
    </ContextProvider>
  );
}

export default App;

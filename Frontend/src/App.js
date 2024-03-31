import React, { useId, useState } from 'react'
// import Navbar from './Components/Header/Navbar'
import Dashboard from './Dashboard';
import { ContextProvider } from './context/Context';
import Home from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {useStickyBox} from 'react-sticky-box'


function App() {
  const stickyBox = useStickyBox();
  const [student, setStudent] = useState(true);
  const [educator, setEducator] = useState(false);
  const [login,setLogin] = useState(false)
  const [home, setHome] = useState(false);
 

  return (
    <ContextProvider value={{setStudent,setEducator, student, educator, setHome ,login,setHome }}>
      <div className=' overflow-x-hidden '>
        <Navbar />
        <div className=' mt-16 '>
          <stickyBox>
      {student && home? <Home /> : <Dashboard />}
          </stickyBox>

        </div>
       
       
      </div>
    </ContextProvider>
  )
}

export default App

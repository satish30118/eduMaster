import React, { useState } from 'react'
import Navbar from './Components/Header/Navbar'
import Dashboard from './Dashboard';
import { ContextProvider } from './context/Context';
import Home from './Components/Homepage/Home';


function App() {
  const [student,setStudent] = useState(true);
  const [educator,setEducator] = useState(true);
  const [home,setHome] = useState(false);
  return (
    <ContextProvider value={{student,educator,setHome}}>
    <div className=' overflow-x-hidden '>
      <Navbar/>
      <div className=' mt-20 '>
      <div>
         {home? <Home/>:<Dashboard/>}
      </div>
    
      </div>
      



     
      
    </div>
    </ContextProvider>
  )
}

export default App

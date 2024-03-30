import React from 'react'
import useData from '../../context/Context'

function Home() {
  const {setHome} = useData()
  return (
    <div className=' space-x-5'>
      <span>This is home</span>
      <button onClick={()=>{setHome(false)}}> Go to educator  </button>
      
    </div>
  )
}

export default Home

import React from 'react'
import oops from '../assets/oops.jpg'
const ErrorPage = () => {
  return (
    <div className=' flex flex-col justify-center items-center  '>
      <div className=" text-3xl font-semibold">
        Oops!
      </div>
      <div className=" h-[400px] w-[500px] p-2">
        <img src={oops} className=' w-full h-full rounded-xl' alt="" />
      </div>
    </div>
  )
}

export default ErrorPage

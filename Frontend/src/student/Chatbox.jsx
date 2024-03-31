import React from 'react'
import StudentMenu from './StudentMenu'

const Chatbox = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className=" overflow-y-scroll border border-green-500  w-[100%] p-2">
          <div className="flex flex-col h-screen bg-gray-100 p-4">
            <div className="overflow-y-auto flex-grow">

              <div
              >
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">

                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <input
                type="text"
                value=""
                onChange=""
                placeholder="Type your message..."
                className="flex-grow p-2 rounded-lg mr-2"
              />
              <button
                onClick=""
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbox

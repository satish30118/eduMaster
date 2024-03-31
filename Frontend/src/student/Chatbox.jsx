import React from 'react';
import StudentMenu from './StudentMenu';
import chatBg from '../Components/Image/chatBg.jpg';

const Chatbox = () => {
  return (
    <div className="dashboard relative">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content h-[80vh]">
        <div className="border border-green-500 w-full p-2 relative">
          <img src={chatBg} alt='' className='absolute inset-0 z-0 w-full h-full bg-cover'/>
          <div className="flex flex-col bg-transparent h-[78vh] p-4 relative z-10">
            <div className="overflow-y-auto flex-grow">
              <div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4 flex-col sm:flex-row">
              <input
                type="text"
                value=""
                onChange=""
                placeholder="Type message..."
                className="flex-grow p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2"
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

export default Chatbox;

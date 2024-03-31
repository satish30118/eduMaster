import React from 'react'
import StudentMenu from './StudentMenu'

const StFeedback = () => {
  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className="w-[100%] p-2">
          <div className="max-w-md h-fit py-16 px-2 mx-auto my-10">
            <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
            <form >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value=""
                  onChange=""
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value=""
                  onChange=""
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Teacher's Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value=""
                  onChange=""
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value=""
                  onChange=""
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StFeedback

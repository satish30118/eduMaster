import React, { useState } from "react";
import StudentMenu from "./StudentMenu";
import { useAuth } from "../context/authContext";
import axios from "axios";

const StFeedback = () => {
  const [auth, setAuth] = useAuth();
  const [feedback, setFeedback] = useState(" ");
  const [courseTitle, setCourseTitle] = useState(" ");
  const [educatorName, setEducatorName] = useState(" ");

  const sendFeedback = async (e) => {
    e.preventDefault();
    if (!feedback || !educatorName || !courseTitle) {
      alert("Fill all data!")
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/feedback/add-new-feedback`,
        {
          studentName: auth?.user?.name,
          studentEmail: auth?.user?.email,
          educatorName,
          courseTitle,
          feedback,
        }
      );

      if (data) {
        alert("Feedback send success");
        setFeedback("");
        setCourseTitle("");
        setEducatorName("");
        return;
      }
      alert("Feed can't send ");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="dashboard">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content">
        <div className="w-[100%] p-2">
          <div className="max-w-md h-fit py-16 px-2 mx-auto my-10">
            <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={auth?.user?.name}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={auth?.user?.email}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="course-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="course-name"
                  name="courseTitle"
                  value={ courseTitle }
                  onChange={(e) => setCourseTitle(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teacher's Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="educatorName"
                  value={educatorName}
                  onChange={(e) => setEducatorName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={sendFeedback}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StFeedback;

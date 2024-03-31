import React, { useEffect, useState } from "react";
import StudentMenu from "./StudentMenu";
import chatBg from "../Components/Image/chatBg.jpg";
import { useAuth } from "../context/authContext";
import axios from "axios";

const Chatbox = () => {
  const [auth] = useAuth();
  const [message, setMessage] = useState("");
  const [allChat, setAllChat] = useState([]);

  const sender = {
    senderId: auth?.user?._id,
    senderName: auth?.user?.name,
  };

  const checkEnter = (e) => {
    // console.log(e.key)
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };
  // SENDING NEW MESSAGE //
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/chat/create-chat`,
        {
          message,
          sender,
        }
      );

      if (data) {
        getAllChat();
        setMessage("");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // GETTING ALL CHAT
  const getAllChat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/chat/get-all-chat`
      );

      if (data) {
        setAllChat(data?.chats);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChat();
  }, []);
  return (
    <div className="dashboard relative">
      <div className="menu">
        <StudentMenu />
      </div>
      <div className="content h-[73vh]">
        <div className="border border-green-500 w-full p-2 relative">
          <img
            src={chatBg}
            alt=""
            className="absolute inset-0 z-0 w-full h-full bg-cover"
          />
          <div className="flex flex-col bg-transparent h-[74vh] p-4 relative z-10">
            <div className="overflow-y-auto flex-grow">
              <div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg"></span>

                {allChat?.map((chat) => (
                  <div
                    key={chat._id}
                    style={{
                      fontSize: "12px",
                      background: `${
                        chat?.sender?.senderId == auth?.user?._id
                          ? "rgba(0, 0, 255,0.4)"
                          : "rgba(12, 236, 15,0.6)"
                      }`,
                      // backgroundColor:"rgba(255, 255, 255,0.2)",
                      borderRadius: "8px",
                      margin: "5px 0",
                      width: "45%",
                      color: "white",
                      // fontWeight:"600",
                      padding: "10px 20px",
                      textAlign: `${
                        chat?.sender?.senderId == auth?.user?._id
                          ? "right"
                          : "left"
                      }`,
                      marginLeft: `${
                        chat?.sender?.senderId == auth?.user?._id ? "55%" : "0%"
                      }`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        // padding: "7px 0",
                      }}
                    >
                      {chat?.message}
                    </p>
                    <p>
                      <i class="fa-solid fa-user"></i>{" "}
                      {chat?.sender?.senderName}
                    </p>
                    <p>{chat?.createdAt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 flex-col sm:flex-row">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message..."
                className="flex-grow p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2"
                onKeyDown={checkEnter}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Chatbox;

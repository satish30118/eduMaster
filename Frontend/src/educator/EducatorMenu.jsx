import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../App.css"

const EducatorMenu = () => {
  const [auth, setAuth] = useAuth();
  const educatorComp = [
    {
      id: 2,
      slug: "/dashboard/educator/profile",
      title: "My Profile",
      icon: "person",
    },
    {
      id: 3,
      slug: "/dashboard/educator/test-series",
      title: "Tests",
      icon: "text_increase",
    },
    {
      id: 4,
      slug: "/dashboard/educator/assignment",
      title: "Assigntment",
      icon: "assignment",
    },
    {
      id: 5,
      slug: "/dashboard/educator/live-class",
      title: "Live class",
      icon: "smart_display",
    },
    {
      id: 6,
      slug: "/dashboard/educator/students-doubts",
      title: "Student's doubts",
      icon: "comment",
    },
    {
      id: 7,
      slug: "/dashboard/educator/courses",
      title: "My courses",
      icon: "comment",
    },
    {
      id: 8,
      slug: "/dashboard/educator/feedback",
      title: "Feedback",
      icon: "home",
    },
    {
      id: 9,
      slug: "/dashboard/educator/playlist",
      title: "My Playlists",
      icon: "video_library",
    },
  ];
  return (
    <>
      <div className="dashboard-menu-page bg-white border-r-[2px]" style={{ overflow: "auto" }}>
        <h2>Educator Panel</h2>
        <div className="dashboard-img">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div
          className="user-details"
          style={{ fontWeight: "700", margin: "10px 0", textAlign: "center" }}
        >
          <p>
            <i
              class="fa-solid fa-circle-user"
              style={{ marginRight: "3px" }}
            ></i>{" "}
            {auth?.user?.name}
          </p>
          <p>
            <i class="fa-solid fa-envelope" style={{ marginRight: "3px" }}></i>{" "}
            {auth?.user?.email}
          </p>
        </div>

        {educatorComp.map((element) => (
          <NavLink key={element.id} to={element.slug} style={{display:"flex", alignItems:"center"}}>
            <span class="material-symbols-rounded  font-bold mr-2">
              {element.icon}
            </span>
            <span>{element.title}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default EducatorMenu;

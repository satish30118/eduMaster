import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import { useAuth } from "../context/authContext";

function StudentMenu() {
  const [auth, setAuth] = useAuth();
  const studentsComp = [
    {
      id: 2,
      slug: "/dashboard/student",
      title: "My Profile",
      icon: "person",
    },
    {
      id: 3,
      slug: "/dashboard/student/test",
      title: "Test Series",
      icon: "text_increase",
    },
    {
      id: 4,
      slug: "/dashboard/student/assignment",
      title: "My Assigntment",
      icon: "assignment",
    },
    {
      id: 5,
      slug: "/dashboard/student/live-class",
      title: "Live class",
      icon: "smart_display",
    },
    {
      id: 6,
      slug: "/dashboard/student/doubtbox",
      title: "Ask doubts",
      icon: "comment",
    },
    {
      id: 7,
      slug: "/dashboard/student/courses",
      title: "My courses",
      icon: "comment",
    },
    {
      id: 8,
      slug: "/stfeedback",
      title: "Feedback",
      icon: "home",
    },
    {
      id: 9,
      slug: "/stplaylist",
      title: "My Playlists",
      icon: "video_library",
    },
    {
      id: 10,
      slug: "/stcalendar",
      title: "My Schedule",
      icon: "calendar_month",
    },
  ];

  return (
    <div className="dashboard-menu-page" style={{ overflow: "auto" }}>
      <h2>Student Panel</h2>
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
          <i class="fa-solid fa-circle-user" style={{ marginRight: "3px" }}></i>{" "}
          {auth?.user?.name}
        </p>
        <p>
          <i class="fa-solid fa-envelope" style={{ marginRight: "3px" }}></i>{" "}
          {auth?.user?.email}
        </p>
      </div>

      {studentsComp.map((element) => (
        <NavLink
          key={element.id}
          to={element.slug}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span class="material-symbols-rounded  font-bold mr-2">
            {element.icon}
          </span>
          <span>{element.title}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default StudentMenu;

import React from "react";
import StudentMenu from "./StudentMenu";

const StudentProf = () => {
  return (
    <div className="dashboard">
    <div className="menu">
      <StudentMenu/>
    </div>
    <div className="content">
      <div className=" overflow-y-scroll border border-green-500  w-[100%] p-2">
        Student Profile
      </div>
    </div>
  </div>
  );
};

export default StudentProf;

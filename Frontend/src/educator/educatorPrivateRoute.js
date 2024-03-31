import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";

const EducatorRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`
      );

      console.log(res.data.ok);
      if (res?.data?.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);
  return <>{ok ? <Outlet /> : (
    <>
        <h2>Either you have not login or you are not educator</h2>
        <button onClick={()=> navigate("/")}>Home</button>
        <button onClick={()=> navigate("/login")}>Login</button>
        </>
  )}</>;
};

export default EducatorRoute;

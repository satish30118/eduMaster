import React, { useEffect, useState } from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios"
import { useAuth } from '../context/authContext';

const StudentRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();

    useEffect(()=>{
        const authCheck = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`, {
                headers:{
                    "Authorization" : auth?.token,
                }
            })

            console.log(res.data.ok)
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck();
    },[auth?.token])
  return (
    <>
      {ok ? <Outlet/> : (
        <>
        <h2>You have not login, login to see dashboard</h2>
        <button onClick={()=> navigate("/")}>Home</button>
        <button onClick={()=> navigate("/login")}>Login</button>
        </>
      )}
    </>
  )
}

export default StudentRoute;

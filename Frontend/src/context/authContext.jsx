import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({
        user:null,
        token:""
    });

    //DEFAULT HEADERS SETTING
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(()=>{
        const data = localStorage.getItem("eduMentorInfo")
        if(data){
            const parseData = JSON.parse(data);
            setAuth({...auth, 
            user: parseData.userDetails,
            token: parseData.token
        })
        }
    },[auth?.token])
return (
    <AuthContext.Provider value= {[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
)

}

//custom hook
const useAuth = () => useContext(AuthContext);
export{useAuth, AuthProvider}



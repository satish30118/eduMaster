import { createContext, useContext } from "react";

export const context = createContext({
    student:true,
    educator:false,
    home:false,
    

})
export const ContextProvider = context.Provider
export default function useData(){
    return useContext(context);
}
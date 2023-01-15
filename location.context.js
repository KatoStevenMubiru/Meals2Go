import React, {useState, useEffect, useContext} from "react";
import { locationRequest, locationTransform } from "./location.service";

export const locationContext = createContext();

export const locationContextProvider = ({children}) => {
const[location,setLocation] = useState([]);
const[isLoading,setIsLoading] = useState(false);
const[error,setError]= useState(null);
const[keyword,setKeyword] = useState(null);



return(
<locationContext.Provider
value={{isLoading,location, error, search:()=>{},keyword}}
>
    {children}
</locationContext.Provider>


)

}
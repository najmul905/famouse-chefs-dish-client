import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const contextProvider=createContext(null)
const AuthProviders = ({children}) => {

const [data,setData]=useState([])
useEffect(()=>{
    fetch('http://localhost:3000/chefs')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])
const chefsData=data


    return (
       <contextProvider.Provider value={chefsData}>
        {children}
       </contextProvider.Provider>
    );
};

export default AuthProviders;
import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
const {user,loader}=useContext(contextProvider)
const location=useLocation()
console.log(location)
if(loader){
    return <progress className="progress w-56"></progress>
}
if(user){
    return children
}
return <Navigate state={{from:location}} to="logIn" replace></Navigate>
   
};

export default PrivetRout;
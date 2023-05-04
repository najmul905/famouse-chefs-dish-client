import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
export const contextProvider=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase';
const auth=getAuth(app)


const AuthProviders = ({children}) => {

const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth,email,password)
}

const logIn=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}

const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://chefs-dish-sarver-najmul905.vercel.app/chefs')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])
const chefsData=data
const [id,setId]=useState(null)
// id data
const getId=(id)=>{
setId(id)
}
console.log(id)
// single data
const singleData=chefsData.find(data=>{
    return data.id===id
})

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('auth current user',currentUser)
        setUser(currentUser)
        setLoader(false)
    });
    return()=>{
        unsubscribe()
    }
},[])

const logOut=()=>{
   return signOut(auth)
}
// console.log(singleData)
const authInfo={chefsData,getId,singleData,createUser,
    logIn,user,loader,logOut,setUser}
    return (
       <contextProvider.Provider value={authInfo}>
        {children}
       </contextProvider.Provider>
    );
};

export default AuthProviders;
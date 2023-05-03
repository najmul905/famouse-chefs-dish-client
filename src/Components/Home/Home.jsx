import React, { useContext, useState } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import './Home.css'
// import { AuthContext } from '../AuthProvider/AuthProviders';

const Home = () => {
// const [chef,setChef]=useState([])

const data=useContext(contextProvider)
console.log(data)
// const singleData=data.map((single)=></chef>)
// console.log(singleData)


// const {name}=singleData
    return (
        <div className='home'>
            
<h1>Home page</h1>
        </div>
    );
};

export default Home;
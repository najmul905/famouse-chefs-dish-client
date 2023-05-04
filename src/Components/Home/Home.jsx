import React, { useContext, useState } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import './Home.css'
import Banner from './Banner/Banner';
// import cover from '../../../public/img/cover (1).jpg'

const Home = () => {
    // const [chef,setChef]=useState([])

    const {chefsData} = useContext(contextProvider)



    return (
        <div className='home grid grid-cols-2 gap-4 mx-20 mt-10'>

           
            {chefsData.map(item => <Banner
                key={item.id}
                item={item}

            ></Banner>)}


        </div>
    );
};

export default Home;
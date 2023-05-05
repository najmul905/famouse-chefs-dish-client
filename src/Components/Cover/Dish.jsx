import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import Recipes from '../Recipes/Recipes';
import Footer from './Footer/Footer';
import { useParams } from 'react-router-dom';

const Dish = () => {
    const {id}=useParams()
    const { chefsData } = useContext(contextProvider)

    const dId=parseInt(id)
    // console.log(dId)

const chef=chefsData.find(data=>{
   return data.id===dId
})
console.log(chef)
    // const singleData=chefsData.find(data=>{
    //     return data.id===id
    // })
    // console.log(singleData)
const { name, dishes, image, description, } = chef
    console.log(name, dishes)
    return (

        <div>
<div className='grid md:grid-cols-5 mt-20 ml-12'>
            <div className='col-span-2 mb-5'>
                <div className="card w-72 md:w-96 glass ">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                      <p>{description}</p>
                       
                    </div>
                </div>
            </div>
            <div className='md:col-span-3'>
                <div className='grid md:grid-cols-2 gap-4'>
{
    dishes.map(recipe=><Recipes
    key={recipe.id}
    data={recipe}
    ></Recipes>)
}
                </div>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
        
    );
};

export default Dish;
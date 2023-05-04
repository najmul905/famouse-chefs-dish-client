import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import Recipes from '../Recipes/Recipes';

const Dish = () => {
    const { singleData } = useContext(contextProvider)
    const { name, dishes, image, description, } = singleData
    console.log(name, dishes)
    return (
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
    );
};

export default Dish;
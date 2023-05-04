import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import Recipes from '../Recipes/Recipes';

const Dish = () => {
    const { singleData } = useContext(contextProvider)
    const { name, dishes, image, description, } = singleData
    console.log(name, dishes)
    return (
        <div className='grid grid-cols-5 mt-20 ml-12'>
            <div className='col-span-2 '>
                <div className="card w-96 glass ">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                      <p>{description}</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <div className='grid grid-cols-2 gap-4'>
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
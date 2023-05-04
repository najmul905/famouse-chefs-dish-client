import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProviders';
import Recipes from '../Recipes/Recipes';

const Dish = () => {
    const { singleData } = useContext(contextProvider)
    const { name, dishes, image, description, } = singleData
    console.log(name, dishes)
    return (
        <div className='grid grid-cols-5 mt-20 '>
            <div className='col-span-2 '>
                <div className="card w-96 glass ">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                      <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
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
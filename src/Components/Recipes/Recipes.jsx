import React from 'react';

const Recipes = ({data}) => {
    const {name,image,description}=data
    // console.log(name)
    return (
        <div>
            <div className="card w-72 glass">
  <figure><img className='h-52 rounded-md ' src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default Recipes;
import React from 'react';

const Recipes = ({data}) => {
    const {name,image,description}=data
    console.log(name)
    return (
        <div>
            <div className="card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipes;
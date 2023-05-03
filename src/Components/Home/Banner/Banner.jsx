import React from 'react';
import './Banner.css'
const Banner = ({item}) => {

    const {name,image,description,years_experience,num_recipes,likes}=item
    return (
        <div className='banner-container '>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='chef-img px- ml-5 rounded-2xl' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="">
      <div>
      <div>
      <p><small>{likes}</small></p>
      
      </div>
<div></div>
<p><small></small></p>
      </div>
      <div>

      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;
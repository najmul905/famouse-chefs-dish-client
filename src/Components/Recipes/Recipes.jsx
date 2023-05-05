import React, { useState } from 'react';
import { FcLike} from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";
const Recipes = ({data}) => {
    const {name,image,description}=data
    
    const [fv,setFv]=useState(false)
const handelFv=()=>{
setFv(true)
}

    return (
        <div>
            <div className="card w-72 glass">
  <figure><img className='h-52 rounded-md ' src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>


    <div>
<div className='text-red-700'>
  {fv?<FcLike ></FcLike>:
  <GrFavorite></GrFavorite>}
</div>
      <button onClick={handelFv} className='bg-red-500 px-2 rounded '>Add to favorite</button>
      </div>
   
  </div>
</div>
        </div>
    );
};

export default Recipes;
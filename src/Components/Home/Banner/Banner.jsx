import React from 'react';
import './Banner.css'
import { AiFillLike,AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contextProvider } from '../../AuthProvider/AuthProviders';
const Banner = ({item}) => {

    const {name,image,description,years_experience,num_recipes,likes,id}=item

const {getId}=useContext(contextProvider)

    const handelRecipe=(id)=>{
        getId(id)
return;
    }
    return (
        <div className='banner-container '>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='chef-img px- ml-5 rounded-2xl' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div>
<p><small>Experience:{years_experience}</small></p>
<h2>Number of Recipes:{num_recipes}</h2>
</div>
    <div className="flex items-center justify-between">
      <div className='flex items-center'>
      <p><small>{likes}</small></p>
<AiFillLike></AiFillLike>
      </div>
      <div className=''>
<Link to='/dish'><button onClick={()=>handelRecipe(id)} className='bg-orange-700 text-white flex items-center p-2 rounded '>See AlD Recipes <AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;
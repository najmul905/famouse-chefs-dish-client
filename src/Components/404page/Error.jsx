import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {

   
  
    return (
        <div className='absolute '>
           <div id="error-page text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
     <Link to="/"><button className='bg-red-500 px-2 rounded'>Go Back Home</button></Link>
    </div>
        </div>
    );
};

export default Error;
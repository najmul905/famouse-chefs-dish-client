import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextProvider } from '../Components/AuthProvider/AuthProviders';
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
const {user,logOut}=useContext(contextProvider)

const handelLogOut=()=>{
  logOut()
  .then(result=>{
    console.log(result)
  })
  .catch(error=>{console.log(error)})
}
    return (
        <div>
            <div>
            <div className="navbar bg-green-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <Link to="/">Home</Link>
    <Link to="/logIn">LogIn</Link>
    <Link to="/singUp">SingUp</Link>
      </ul>
    </div>
    <h3 className='text-3xl italic text-red-500'><span className='text-red-950'>Famous</span> <span className='text-red-700'>Chef</span> Dish</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link className='hover:text-orange-700' to="/">Home</Link>
    
    <Link className='ml-4 hover:text-orange-700' to="/singUp">SingUp</Link>
    <Link className='ml-4 hover:text-orange-700' to="/blog">Blog</Link>
    <Link className='ml-4 hover:text-orange-700' to="/404page">404 Page</Link>
    
    </ul>
  </div>
  <div className="navbar-end flex items-center">

  <div>
    {
      user?<img className='h-8' src="https://lh3.googleusercontent.com/a/AGNmyxbtuGUpn1Vw4YIiXrj6qsd2srjvIF635Nt1KbQ=s192-c-rg-br100" alt="" />:<BsPersonCircle ></BsPersonCircle>
    }
  </div>
  <div className='ml-3'>{user? <button className='bg-red-500 px-2 rounded' onClick={handelLogOut}>LogOut</button>:<Link to="/logIn"><button className='bg-orange-700 hover:bg-orange-900 text-white p-2 rounded'>LogIn</button></Link>}</div>
  

  </div>
</div>
            </div>
           
        </div>
    );
};

export default Header;
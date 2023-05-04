import React, { useContext, } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../AuthProvider/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from "firebase/auth";
const LogIn = () => {
const {logIn,setUser}=useContext(contextProvider)
const location=useLocation()
const from=location.state?.from?.pathname || "/"
console.log(location)
const navigate=useNavigate()
const auth = getAuth();
const provider=new GoogleAuthProvider()
const gitProvider=new GithubAuthProvider()
// const [googleUser,setGoogleUser]=useState(null)
const handelGoogle=()=>{
  signInWithPopup(auth,provider)
  .then(result=>{
    const gUser=result.user
    setUser(gUser)
  })
  .catch(error=>console.log(error))
}
const handelGithub=()=>{
  signInWithPopup(auth,gitProvider)
  .then(result=>{
    const gUser=result.user
    setUser(gUser)
  })
  .catch(error=>console.log(error))
}


const handelLogIn=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    logIn(email,password)
    .then(result=>{
       const  logInRe=result.user;
       console.log(logInRe)
    navigate(from)
    })
.catch(error=>console.log(error))
    
}


    return (
        <div className="hero  bg-base-200">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogIn}>
      <h1 className=''> pleas LogIn</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div><button onClick={handelGoogle} className='bg-green-400 px-2 rounded'>SingUp With Google</button></div>
      <div><button onClick={handelGithub} className='bg-green-400 px-2 rounded'>SingUp With Github</button></div>
      <Link className='text-green-600 ml-2 mb-2' to="/singUp">Create a New Account</Link>
      </form>
    </div>
  </div>
</div>
    );
};

export default LogIn;
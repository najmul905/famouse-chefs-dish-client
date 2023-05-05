import React, { useContext, useState,  } from 'react';
import { Link } from 'react-router-dom';
import { contextProvider } from '../AuthProvider/AuthProviders';
import { getAuth, updateProfile,} from "firebase/auth";
const auth = getAuth();
const SingUp = () => {
const {createUser}=useContext(contextProvider)



const [error,setError]=useState('')

const handelSingUp=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const image=form.image.value;
    console.log(name,email,password)
setError('')
createUser(email,password,)
.then(result=>{
const user=result.user;
updateUserData(user,name,image)
form.reset()
console.log(user)

})
.catch(error=>{
    setError(error)
})

if(/(?=.*[A-Z])/.test(password)){
setError('Please add at least One Uppercase')
}
else if(/(?=.*[0-9].*[0-9])/.test(password)){
setError('Please add at least Two numbers')

}


}
const updateUserData=(user,name,image)=>{
  updateProfile(user,{
    displayName:name,
    photoURL:image
  })
  .then(result=>{console.log(result)})
  .catch(error=>{setError(error)})

}

// const [hp,setHp]=useState(true)
// const hideP=()=>{
// setHp(false)
// }
// console.log(hp)
// const [sp,setSp]=useState(false)
// const showP=()=>{
// setSp(true)
// }


// console.log(sp)
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelSingUp}>
     
      <div className='text-center mt-3 font-bold'>
      <h1 > pleas SingUp</h1>
      </div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="image" name="image" className="input input-bordered" required/>
        </div>
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
       <input type='password' name="password" placeholder="password" className="input input-bordered" required/>
      <p><small>{error}</small></p>
          {/* <button  className="btn btn-active btn-link"><small>Show Password</small></button>
          */}
        </div>
        <div className="form-control mt-6 ">
          <button className="btn btn-primary">SingUp</button>
        </div>
      </div>
     <div className='text-center mb-6'>
     <Link className='text-green-600 ml-2 mb-2 ' to="/logIn"><button className='bg-red-500 text-white px-2 rounded'>LogIn</button></Link>
     </div>
     
      </form>
    </div>
  </div>
</div>
    );
};

export default SingUp;
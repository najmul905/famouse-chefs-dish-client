import React, { useContext,  } from 'react';
import { Link } from 'react-router-dom';
import { contextProvider } from '../AuthProvider/AuthProviders';
import { getAuth, updateProfile,} from "firebase/auth";
const auth = getAuth();
const SingUp = () => {
const {createUser}=useContext(contextProvider)





const handelSingUp=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const image=form.image.value;
    console.log(name,email,password)

createUser(email,password,)
.then(result=>{
const user=result.user;
updateUserData(user,name,image)
form.reset()
console.log(user)

})
.catch(error=>{
    console.log(error)
})


}
const updateUserData=(user,name,image)=>{
  updateProfile(user,{
    displayName:name,
    photoURL:image
  })
  .then(result=>{console.log(result)})
  .catch(error=>{console.log(error)})

}
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelSingUp}>
      <h1 className=''> pleas SingUp</h1>
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp</button>
        </div>
      </div>
     
      <Link className='text-green-600 ml-2 mb-2' to="/logIn"><button>LogIn</button></Link>
      </form>
    </div>
  </div>
</div>
    );
};

export default SingUp;
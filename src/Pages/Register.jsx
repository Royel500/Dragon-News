import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
const { createUser ,setUser,updateUser } = use(AuthContext);
const navigate = useNavigate();
 const  handleSubmit =(e) =>{
e.preventDefault();
const name = e.target.name.value ;
const email = e.target.email.value ;
const password = e.target.password.value ;
const photo = e.target.photo.value ;
// console.log(name ,email,password,photo);


createUser(email,password)
.then(res => {
  const user = res.user ;
  updateUser( {  displayName : name , photoURL: photo })
  .then(() =>{
    setUser({...user, displayName : name , photoURL: photo });
  })
  .catch(error =>{
    // console.log(error);
    setUser(user);
  });
 
  navigate('/');
})
.catch(error =>{
  // console.log(error)
});
  
   

  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          <h1 className='text-2xl text-center font-bold'> Register Now</h1>
            <form onSubmit={handleSubmit} className="form">
              

              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Enter Your Name" required />

              <label className="label">Photo URL</label>
              <input type="text" name='photo'  className="input" placeholder="Enter Your Name" required />

              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input  type="password" name='password' className="input" placeholder="Password" required />

              <div><input type="checkbox"  className="checkbox my-2" required /> Accept Term & Conditions </div>
              <button type='submit' className="btn btn-neutral mt-4">Register</button>
              
            </form>
            <h1 className='text-center font-bold'>Already Have An Account ? <Link to='/auth/login' className='text-red-500'>LogIn</Link> </h1>
          </div>
        </div>
      </div>
    );
};

export default Register;
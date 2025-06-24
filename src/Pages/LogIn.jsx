import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate() ;
  const [show , setShow] = useState(false);
  const emailfef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log('User signed in:', user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        alert('Invalid email or password');
      });
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn} className="form">
            <h1 className="text-2xl text-center font-bold">Log In Now</h1>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              ref={emailfef}
              required
            />
 
            <label className="label">Password</label>
            <div className='relative'>
            <input
              type={show ? 'text' : 'password'}
              name="password"
              className="input "
              placeholder="Password"
              required
            />
            <button 
                 type="button" 
             onClick ={() => {setShow(!show)}} 
            className='absolute top-3 right-5'>
           { show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
               </button>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <h1 className="text-center font-bold">
            Don’t Have An Account?{' '}
            <Link to="/auth/register" className="text-red-500">
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
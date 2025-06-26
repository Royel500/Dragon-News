import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; // Correct import
import userr from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        logOut()
            .then(() => {
                alert('You Are Logged Out Successfully');
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    return (
        <div className="flex justify-between items-center">
               <div className='text-[10px]'>{user && user.email}</div>
            <div className="nav ml-5"> </div>
            <div className="flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/feature">Feature</NavLink>
            </div>
            <div className="flex gap-2 items-center  lg:mr-10">
                <img
                    src={user && user.photoURL ? user.photoURL : userr}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                {user ? (
                    <button onClick={handleOut} className="btn px-10">
                        LogOut
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn px-10">
                        LogIn
                    </Link>
                )}
                
            </div>
     
        </div>
    );
};

export default Navbar;
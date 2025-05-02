import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
        <div className="nav"></div>
        <div className="flex gap-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex gap-2">
            <img src={user} alt="" />
            <button className='btn px-10'>LogIn</button>
        </div>
        </div>
    );
};

export default Navbar;
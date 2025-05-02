import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LaftAside from './HomeLayout/LaftAside';
import RightAside from './HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <section className='w-11/12 my-3 mx-auto'>
                <Latest></Latest>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
           </header>


           <main className='w-11/12 mx-auto my-15 gap-5 grid grid-cols-12'>

       <aside className='col-span-3 sticky top-10 h-fit'>
          <LaftAside></LaftAside>
          </aside>
          
           <section className="col-span-6">
            <Outlet></Outlet>
           </section>

        <aside className='col-span-3 sticky top-10 h-fit'>
            <RightAside></RightAside>
        </aside>

        </main>



        </div>
    );
};

export default HomeLayout;
import React from 'react';

import { Outlet } from 'react-router';
import NavBer from '../Components/NavBer';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
          <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;
import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex font-bold gap-5 items-center bg-base-200 p-3'>
           <p className='bg-red-500 px-3 py-2 '>Latest</p>
        <Marquee className='flex gap-5' pauseOnHover={true} speed={60} >
             <p >Dragon News is a dynamic and reliable online news platform that brings you the latest 
              updates from around the world. From breaking headlines to in-depth features, Dragon News 
              covers a wide range
               of categories including Politics, Technology, Health, Business, Sports, and Weather.</p> 


</Marquee>  
        </div>
    );
};

export default Latest;
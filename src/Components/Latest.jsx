import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex font-bold gap-5 items-center bg-base-200 p-3'>
           <p className='bg-red-500 px-3 py-2 '>Latest</p>
        <Marquee className='flex gap-5' pauseOnHover={true} speed={60} >
             <p >Lorem ipsum dolor sit 
            amet consectetur adipisicing
           
              cum praesentium totam a amet blanditiis ?</p> 
             <p >Lorem ipsum dolor sit 
            amet consectetur adipisicing
             
              cum praesentium totam a amet blanditiis ?</p> 
             <p >Lorem ipsum dolor sit 
            amet consectetur adipisicing
            
              cum praesentium totam a amet blanditiis ?</p> 


</Marquee>  
        </div>
    );
};

export default Latest;
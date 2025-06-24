import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5 '>Find Us On </h1>
            <div className='flex flex-col '>
                {/* Facebook */}
<button className="btn border-[#005fd8]">
  <svg aria-label=" " className='bg-blue-600' width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
   Facebook
</button>
<button className="flex btn border-[#005fd8]"><span> <FaTwitter></FaTwitter> </span> Twitter</button>
<button className="flex btn border-[#005fd8]"><span><FiInstagram></FiInstagram> </span> Instagram</button>


            </div>
        </div>
    );
};

export default FindUs;
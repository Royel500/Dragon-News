import React from 'react';
import swim from '../../assets/swimming.png'
import clss from '../../assets/class.png'
import play from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className="font-bold p-2 "> Q-Zone</h1>
            <div>
   <img src={swim} alt="" />
   <img src={clss} alt="" />
   <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const de = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default de;
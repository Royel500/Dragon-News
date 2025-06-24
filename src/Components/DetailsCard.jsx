import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const DetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5 lg:px-20 px-5 py-10'>
            <img className='' src={news.image_url} alt="" />
            <h1 className='font-bold text-2xl'>{news.title}</h1>
            <p className='text-justify'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn flex bg-red-400 text-white'> <FaArrowLeft></FaArrowLeft> All news in this category</Link>
        </div>
    );
};

export default DetailsCard;
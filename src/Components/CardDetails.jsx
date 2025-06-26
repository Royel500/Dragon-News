import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from '../LayOut/HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news , setNews ] = useState({});

    // .log(data,id,news);

    useEffect(() =>{
        const newsDetails = data?.find((single) => single.id == id)
    setNews(newsDetails)
    },[data,id])
    return (
        <div className='space-y-10'>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
           <section className='col-span-3'>
         <h1 className='font-bold '>News Deatails</h1>
         <DetailsCard news={news} ></DetailsCard>
           </section>
           <aside className='col-span-1'>
            <RightAside></RightAside>
           </aside>

           </main>
        </div>
    );
};

export default CardDetails;
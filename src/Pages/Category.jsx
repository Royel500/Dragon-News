import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../Components/NewsCards';

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [newss , setNewss] = useState([]);

   
    useEffect(() => {
        if( id == '0'){
            setNewss(data)
            return;
        }
        else if (id == '1') {
            const filterNews = data.filter(
                (news) => news.others.is_today_pick == true );
                setNewss(filterNews)
        }
        else{
            const filterNews = data?.filter((news) => news.category_id == id );
            setNewss(filterNews);
        }

    } ,[data , id]);
    return (
        <div>
            <h1 className='font-bold text-center mb-3 text-xl'>
            Total <span className='text-fuchsia-700'>{newss.length}</span>  News Found 
            </h1>
        <div className='grid grid-cols-1 gap-5'>
            {
                newss.map((news) => (
                    <NewsCards key={news.id} news={news} ></NewsCards>
                ))

              }

        </div>
        </div>
    );
};

export default Category;
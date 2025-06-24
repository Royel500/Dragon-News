import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router";

const NewsCards = ({ news }) => {
  const {
    title,
    id,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,

  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl mb-6 border">
        <div>
      <div className="card-header flex items-center bg-fuchsia-100 justify-between p-4 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div> 
        <div className="text-gray-400 flex gap-3">
          <h1><FaRegBookmark size={25}></FaRegBookmark> </h1>
          <h1><IoMdShare size={25}></IoMdShare> </h1>
        </div>
        
      </div>
      <h2 className="card-title border-b px-5 py-3">{title}</h2>
      </div>
      <figure>
        
        <img src={thumbnail_url} alt="News thumbnail" className="w-full h-60 object-cover" />
      </figure>

      <div className="card-body">
      
        <p>
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <div className="mt-3">
          <Link to={`/news-details/${id}`} className="text-primary font-medium hover:underline">
            Read More
          </Link>
        </div>
        </p>
        <div className="card-actions mt-4 justify-between items-center text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default NewsCards;

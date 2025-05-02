import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoriess = fetch('/public/categories.json')
.then(res =>res.json()) ;

const Categories = () => {

const categorie = use(categoriess)

    return (
        <div>
           <h1 className='font-bold'>All categories ({categorie.length})</h1> 
           <div className='grid grid-cols-1 mt-5 gap-5 '>
            {
                categorie.map( (category) =>(
                    <NavLink
                     key={category.id}
                     className={'btn bg-white border-0 hover:bg-base-300'}
                    to={`/category/${category.id}`}
                     >{category.name}</NavLink>
                ) )
            }
           </div>


        </div>
    );
};

export default Categories;
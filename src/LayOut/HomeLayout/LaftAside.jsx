import React, { Suspense } from 'react';
import Categories from '../../Components/Categories';

const categoriess = fetch('/categories.json')
.then(res =>res.json()) ;

const LaftAside = () => {
    return (
        <div>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
     <Categories categoriess={categoriess}></Categories>
     </Suspense>
        </div>
    );
};

export default LaftAside;
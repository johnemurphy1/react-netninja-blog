//April 3rd 2022 All Blogs shows up twice? Delete function works on second set of All Blogs. However, if 
//I click on New Blog all the All Blogs show up again?

import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {
   const  {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')



//this passes bloglist component as prop...also, uses conditional rendering &&
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            
            </div>
     );
}
//()invokes function, don't want that in onClick=handleClick} because it would invoke right away
export default Home;

//to get db.json started npx json-server --watch data/db.json --port 8000 run this in powershell
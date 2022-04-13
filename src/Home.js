//April 3rd 2022 All Blogs shows up twice? Delete function works on second set of All Blogs. However, if 
//I click on New Blog all the All Blogs show up again?

import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    const [name, setName] = useState('mario');
    const[isLoading, setIsLoading] = useState(true);
//could wrap useEffect in setTimeout to see the loading message



//before return and doesn't need to be stored in const. usually fetch data or communicate with authentication service
//known as side effects. fires on every render
useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            //console.log(data);
            setBlogs(data)
            setIsLoading(false)
        });
    
    //console.log('use effect ran');
    //console.log(name);
    //console.log(blogs);
//empty dependency array only lets function run once on first render. name dependency runs function when 
}, [name]);



//this passes bloglist component as prop
    return ( 
        <div className="home">
            
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
            </div>
     );
}
//()invokes function, don't want that in onClick=handleClick} because it would invoke right away
export default Home;
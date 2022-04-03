//April 3rd 2022 All Blogs shows up twice? Delete function works on second set of All Blogs. However, if 
//I click on New Blog all the All Blogs show up again?

import { useState } from 'react';
import BlogList from './BlogList';



const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'luigi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 3},
    ]);
    

    const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setBlogs(newBlogs);
}
    
//this passes bloglist component as prop
    return ( 
        <div className="home">
            
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs."/>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            </div>
     );
}
//()invokes function, don't want that in onClick=handleClick} because it would invoke right away
export default Home;
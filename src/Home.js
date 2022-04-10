//April 3rd 2022 All Blogs shows up twice? Delete function works on second set of All Blogs. However, if 
//I click on New Blog all the All Blogs show up again?

import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'luigi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 3},
    ]);
    
    const [name, setName] = useState('mario')

    const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setBlogs(newBlogs);
}

//before return and doesn't need to be stored in const. usually fetch data or communicate with authentication service
//known as side effects. fires on every render
useEffect(() => {

    console.log('use effect ran');
    console.log(name);
    //console.log(blogs);
//empty dependency array only lets function run once. name dependency runs function when 
}, [name]);



//this passes bloglist component as prop
    return ( 
        <div className="home">
            
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs."/>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
            </div>
     );
}
//()invokes function, don't want that in onClick=handleClick} because it would invoke right away
export default Home;
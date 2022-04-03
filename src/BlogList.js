//accept handleDelete function as a prop along with blogs and title
const BlogList = ({blogs,title,handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;

    //console.log(props,blogs);

    //button onClick with function wrapped with anonymous function that passes argument with id that needs to be deleted
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                  
                <button onClick={()=> handleDelete(blog.id)}>delete blog</button>
              </div>  
            ))}
        </div>
      );
}
 
export default BlogList;
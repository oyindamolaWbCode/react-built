// props is used for reuseable codes, It is a way of passing parent component to a child component

const BlogList = (props) => {
    const blogs = props.blogs;

    console.log(props, blogs);
    return ( 
        <div className="blog-list">
        { blogs.map((blog) =>(
            <div className='blog-preview' key={blog.id}>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author} </p>
                <p> {blog.year} </p>
            </div>
        ))}
    </div>
);
} 
 
export default BlogList;
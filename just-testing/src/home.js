import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
       { title: 'My new website', body: 'lorem ipsum...', author: 'oyindamola', id:'1', year: '2022'}, 
       { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Ballerina', id:'2', year: '2017'}, 
       { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kushimo', id:'3', year: '2000'}
    ]);

    return (
        <div className="home">
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
export default Home;
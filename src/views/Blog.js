import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from 'react-router-dom';

const Blog = () => {
    const { data, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts/');
    let newData = [];
    if (data && data.length > 0) {
        newData = data.slice(0, 9);
        console.log('Blog data:', newData)
    }
    return (
        <div className="blog-container">
            {newData && newData.length > 0 && newData.map((item, index) => {
                return (
                    <div className="single-blog" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.body}</div>
                        <button>

                            <Link to={`/blog/${item.id}`}>View detail</Link>
                        </button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Blog;
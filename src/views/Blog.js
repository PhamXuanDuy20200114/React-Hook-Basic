import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from 'react-router-dom';

const Blog = () => {
    let history = useHistory();
    const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts/');
    let newData = [];
    if (data && data.length > 0) {
        newData = data.slice(0, 9);
        console.log('Blog data:', newData)
    }

    const handleAddNew = () => {
        history.push('/add-new-blog');
    }
    return (
        <>
            <button className="btn-add-new" onClick={handleAddNew}>+ Add new Blog</button>
            <div className="blog-container">
                {isLoading === false && newData && newData.length > 0 && newData.map((item, index) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>

                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </button>
                        </div>
                    )
                })
                }
                {isLoading === true && <div style={{ textAlign: 'center' }}>Loading...</div>}
            </div>
        </>
    )
}

export default Blog;
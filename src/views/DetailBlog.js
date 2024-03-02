import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blog.scss'
const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    let { data: singleBlogData, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const handleBackData = () => {
        history.push('/blog');
    }
    return (
        <div>
            <div><span onClick={handleBackData}>&lt;-- Back</span></div>
            {isLoading === false && singleBlogData &&
                <div className="blog-detail">
                    <div className="title">{singleBlogData.title}</div>
                    <div className="content">{singleBlogData.body}</div>
                </div>
            }
            {isLoading === true && <div>Loading...</div>}
        </div>
    )
}

export default DetailBlog;
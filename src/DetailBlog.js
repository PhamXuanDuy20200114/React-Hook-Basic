import { useParams } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams();
    return (
        <div>
            Detail Blog with id: {id}
        </div>
    )
}

export default DetailBlog;
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    let history = useHistory();
    const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts/');
    useEffect(() => {
        if (data && data.length > 0) {
            if (data && data.length > 0) {
                let newDataSimple = data.slice(0, 9);
                setNewData(newDataSimple);
            }
        }
    }, [data]);

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }
    return (
        <>

            <Button variant="primary" className="my-3" onClick={handleShow}>
                Add new Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className="blog-container">
                {isLoading === false && newData && newData.length > 0 && newData.map((item, index) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title}</span> <span onClick={() => deletePost(item.id)}>X</span></div>
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


import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !content) {
            alert('Please fill all fields');
        }

        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }
    }
    return (
        <div className="add-new-container">
            <form onSubmit={handleSubmit}>
                <div className="text-add-new">------ Add new blog ---------</div>
                <div className="input-data">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="input-data">
                    <label>Content: </label>
                    <input type='text' value={content} onChange={(event) => setContent(event.target.value)} />
                </div>
                <button className='btn-add-new' type='submit'>Submit</button>
            </form>
        </div>
    );


}

export default AddNewBlog;
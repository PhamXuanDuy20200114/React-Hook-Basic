import './Blog.scss';
import { useState } from 'react';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !content) {
            alert('Please fill all fields');
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
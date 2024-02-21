const Todo = (props) => {
    //properties -> sinh ra để truyền dữ liệu giữa các component
    //truyền từ cha sang con
    const { todos, title, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id);
    }
    return (
        <>
            <div className="title">
                {title}
            </div>
            <div className='todos-container'>
                {todos.map((todo, index) => {
                    return <div key={todo.id}>
                        {todo.name} &nbsp; &nbsp;
                        <span onClick={() => handleDelete(todo.id)}>x</span>
                    </div>
                })}
            </div>
            -------------------------
        </>

    )
}

export default Todo;
const Todo = (props) => {
    //properties -> sinh ra để truyền dữ liệu giữa các component
    //truyền từ cha sang con
    const todos = props.todos;
    return (
        <>
            <div className="title">
                {props.title}
            </div>
            <div className='todos-container'>
                {todos.map((todo, index) => {
                    return <div key={todo.id}>{todo.name}</div>
                })}
            </div>
            -------------------------
        </>

    )
}

export default Todo;
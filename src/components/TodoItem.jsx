import React from "react";

const TodoItem = ({ todo }) => {
    return <p style={style}>{todo.title}</p>
}

const style = {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
}

export default TodoItem;
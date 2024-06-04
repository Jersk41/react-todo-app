import React, { useContext } from "react";
import { TodoContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
    const { toggleCompleted, deleteTodo } = useContext(TodoContext);

    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return 'line-through text-slate-300'
        } else {
            return 'no-underline'
        }
    }

    return (
        <div
            className='text-8 group
            flex justify-center items-start shadow
            focus:outline-blue-300
            w-full sm:w-3/4 sm:mx-auto p-2 hover:bg-blue-50 has-[:checked]:text-blue-900 has-[:checked]:ring-blue-200'
        >

            <input
                type="checkbox"
                id={"todo-" + todo.id}
                className="flex-shrink-0 peer/check form-checkbox w-6 h-6 m-1 rounded text-blue-500 me-2 focus:ring-0 focus:outline-0 focus:ring-offset-0"
                onChange={() => toggleCompleted(todo.id)}
            />
            <label
                className={"peer-checked/check:text-slate-400 transition-all duration-400 flex-grow text-start " + getTodoTitleStyle()}
                htmlFor={"todo-" + todo.id}
            >
                {todo.title}
            </label>
            <button
                className="flex-shrink-0 rounded-full text-md w-8 h-8 px-2 py-1
                text-center text-red-500 hover:text-red-700 hover:bg-red-200 text-sm 
                transition-all duration-200 flex items-center place-content-center"
                onClick={()=> deleteTodo(todo.id)}
                role="button"
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    }
}

export default TodoItem;
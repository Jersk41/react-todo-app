import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="mb-4 sm:mb-8 mt-4 sm:w-3/5 w-full mx-auto h-full shadow rounded-md">
            <form
                className="flex justify-center align-center w-full border rounded-md"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input type="text"
                    placeholder="Add your todo"
                    className="form-input text-blue-500 h-full w-full text-lg self-center px-4 py-3 rounded-md border border-none bg-transparent"
                    onChange={(event) => handleChangeTitle(event)}
                    value={title}
                />
                <button className="h-full px-4 py-3 self-center text-center text-md rounded-r-md text-blue-600 border-2 border-blue-600 
                hover:bg-blue-700 focus:bg-blue-800 hover:text-white focus:text-white transition-all duration-200">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '40%',
        fontSize: '16px',
        padding: '0 16px',
    },
    button: {
        height: '72px',
        fontSize: '16px',
    }
}

export default TodoForm;
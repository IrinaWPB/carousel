import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const NewTodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState("")

    const handleChange = e => {
        setTodo(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        addTodo({ todo, id: uuid() });
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Add a new task:</label>
            <input id="todo" type="text" name="todo" value={todo} onChange={handleChange} />
            <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm
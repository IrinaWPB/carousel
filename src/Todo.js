import React, { useState } from 'react'


const Todo = ({ text, removeTask, updateTask, id }) => {
    //state to track updates when editting task, initialy set to current "todo"
    const [newText, setNewText] = useState(text)

    //state to track the view mode (regular/updateView)
    const [updateView, setUpdateView] = useState(false)

    //uses removeTask function to remove element by id
    const handleRemove = () => removeTask(id)

    //toggle between views
    const changeView = () => setUpdateView(update => !update)

    //setting newTask to current input value
    const handleChange = e => setNewText(e.target.value)

    //runs on form submit, uses updateTask(with id and cuurrent value of todo), resets view to regular
    const handleUpdate = e => {
        e.preventDefault() 
        updateTask(id, newText)
        setUpdateView(false)
    }

    //form to render if updateView is set to true
    const updateViewToRender = (
        <div>
            <form onSubmit={handleUpdate}>
                <input data-testid="updateInput" type="text" value={newText} onChange={handleChange} />
                <button>Update</button>
            </form>
        </div>
    )
    return (
        <>
            {updateView ? updateViewToRender : <li>{text}<button onClick={changeView}>Edit</button><button onClick={handleRemove}>X</button></li>} 
        </>
    )
}

export default Todo
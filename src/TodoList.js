import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


const TodoList = () => {
    const [todos, setTodos] = useState([])

    //function to run when new data is submited, adds a new todo to the list.
    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }
    
    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id, updatedTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, todo: updatedTask } : todo ))
    }

    return (
        <div className='TodoList'>
            <h1>My Todo List</h1>
            <div className='TodoList-form-div'>
                <NewTodoForm addTodo={addTodo} />
            </div>
            <div className='TodoList-ul'>
                <ul data-testid="list">
                    {todos.map(todo => <Todo id={todo.id} 
                                             text={todo.todo} 
                                             key={todo.id} 
                                             removeTask={removeTodo} 
                                             updateTask={updateTodo} />)}
                </ul>    
            </div>       
        </div>
    )
}

export default TodoList
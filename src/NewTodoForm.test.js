import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

it('renders without crashing', () => {
    render(<NewTodoForm />)
})

it('matches the snapshot', () => {
    const {asFragment} = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
})

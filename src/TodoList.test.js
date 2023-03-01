import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

it('renders without crashing', () => {
    render(<TodoList />)
})

it('matches the snapshot', () => {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

it('renders "NewTodoForm" component', () => {
    const { getByText } = render(<TodoList />)
    expect(getByText('Add a new task:')).toBeInTheDocument()
})

it('renders 0 "Todo" components', () => {
    const { queryByTestId } = render(<TodoList />)
    expect(queryByTestId('list')).toBeEmpty()
})

it('shows task after submit', () => {
    const { queryByText, queryByLabelText } = render(<TodoList />) 
    expect(queryByText('laundry')).not.toBeInTheDocument()
    const input = queryByLabelText('Add a new task:')
    const btn = queryByText('Add Task')
    fireEvent.change(input, {target: {value: 'laundry'}})
    fireEvent.click(btn)
    expect(queryByText('laundry')).toBeInTheDocument()
})

it('renders "edit" and "delete" buttons with task', () => {
    const { queryByText, queryByLabelText } = render(<TodoList />)
    const input = queryByLabelText('Add a new task:')
    const btn = queryByText('Add Task')
    fireEvent.change(input, {target: {value: 'wash dishes'}})
    fireEvent.click(btn)
    expect(queryByText('X')).toBeInTheDocument
    expect(queryByText('Edit')).toBeInTheDocument
})

it('removes element when X is pressed', () => {
    const { queryByText, queryByLabelText } = render(<TodoList />)
    const input = queryByLabelText('Add a new task:')
    const btn = queryByText('Add Task')
    fireEvent.change(input, {target: {value: 'wash dishes'}})
    fireEvent.click(btn)
    expect(queryByText('wash dishes')).toBeInTheDocument()

    const deletBtn = queryByText('X')
    fireEvent.click(deletBtn)
    expect(queryByText('wash dishes')).not.toBeInTheDocument()

})

it('changes view when "Edit" is pressed and updates task', () => {
    const { queryByText, queryByLabelText, queryByTestId } = render(<TodoList />)
    const input = queryByLabelText('Add a new task:')
    const btn = queryByText('Add Task')
    fireEvent.change(input, {target: {value: 'wash dishes'}})
    fireEvent.click(btn)
    
    const editBtn = queryByText('Edit')
    fireEvent.click(editBtn)

    const updateBtn = queryByText('Update')
    expect(updateBtn).toBeInTheDocument()
    
    const updateInput = queryByTestId('updateInput')
    fireEvent.change(updateInput, {target: {value: 'wash car'}})
    fireEvent.click(updateBtn)
    expect(queryByText('wash car')).toBeInTheDocument()
    expect(queryByText('wash dishes')).not.toBeInTheDocument()

})


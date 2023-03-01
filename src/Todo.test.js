import React from 'react'
import { render } from '@testing-library/react'
import Todo from './Todo'

it('renders without crashing', () => {
    render(<Todo />)
})

it('matches the snapshot', () => {
    const {asFragment} = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
})

it('renders task with "edit" and "x" buttons', () => {
    const {queryByText, queryByLabelText} = render(<Todo />)
    
})
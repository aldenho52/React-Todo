// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    const handleClick = () => {
        props.clearTodos()
    }

        return (
            <div>
            <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo handleToggleItem={props.handleToggleItem} key={todo.id} todo={todo} />
            ))}
            </div>
            <button className='clear-btn' onClick={handleClick}>Clear completed</button>
            </div>
        )
}


export default TodoList
import React from 'react'

const Todo = props => {

    const strikeThrough = () => {
        props.handleToggleItem(props.todo.id)
    }

        return(
            <div onClick={strikeThrough} className={`todo${props.todo.purchased ? ' purchased' : ''}`} >
            <p>{props.todo.task}</p>
            </div>
        )
}

export default Todo
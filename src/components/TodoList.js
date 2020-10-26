// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

class TodoList extends React.Component {

    handleClick = () => {
        this.props.clearTodos()
    }

    render() {
        return (
            <div>
            {this.props.todos.map(todo => (
                <Todo handleToggleItem={this.props.handleToggleItem} key={todo.id} todo={todo} />
            ))}
            </div>
        )
    }
}


export default TodoList
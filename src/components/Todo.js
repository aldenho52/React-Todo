import React from 'react'

class Todo extends React.Component {

    strikeThrough = () => {
        this.props.handleToggleItem(this.propsprops.todo.id)
    }

    render() {
        return(
            <div onClick={this.strikeThrough} className={`item${this.props.todo.purchased ? ' purchased' : ''}`} >
            <p>{this.props.todo.name}</p>
            </div>
        )
    }
}

export default Todo